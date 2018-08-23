import React, { Component } from 'react';
import Pagination from './Pagination'
import CustomCard from './CustomCard'
import escapeRegExp from 'escape-string-regexp'


class DisplayData extends Component {
  state = { allData: [], currentData: [], currentPage: null, totalPages: null, query: '' }

  componentDidMount() {
    fetch('/api/items')
      .then(res => res.json())
      .then(data => this.setState({ allData: data }, () => console.log('Data fetched...')))
  }

  onPageChanged = data => {
    const { allData } = this.state;
    const { currentPage, totalPages, pageLimit } = data;
    const offset = (currentPage - 1) * pageLimit;
    const currentData = allData.slice(offset, offset + pageLimit);

    
    this.setState({ currentPage, currentData, totalPages });
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() })
  }

  render() {
    const { query } = this.state
    const { allData, currentData, currentPage, totalPages } = this.state;

    
    let showingContacts
    if (query) {
      const match = new RegExp(escapeRegExp(query), 'i')
      showingContacts = allData.filter((contact) => match.test(contact.name))
    } else {
      showingContacts = currentData
    }

    const totalData = allData.length;

   

    if (totalData === 0) return null;
    const headerClass = ['text-dark py-2 pr-4 m-0', currentPage ? 'border-gray border-right' : ''].join(' ').trim();
    return (
      <div className="container mb-5">
        <div className="row d-flex flex-row py-5 justify-content-center">
        <div className='list-contacts-top'>
          <input
            className='search-contacts'
            type='text'
            placeholder='Search destination'
            value={query}
            onChange={(event) => this.updateQuery(event.target.value)}
          />
        </div>

          { showingContacts.map(data => <CustomCard key={data._id} 
                                                    name={data.name} 
                                                    avatar={data.fileBrowserImage} 
                                                    destination={data.destination} 
                                                    shortDescription={data.shortDescription}
                                                    description={data.description}
                                                    id={data._id}/>)}
          <div className="w-100 px-4 py-5 d-flex flex-row flex-wrap align-items-center justify-content-between">
            <div className="d-flex flex-row align-items-center">
                <h2 className={headerClass}>
                  <strong className="text-secondary">{query ? showingContacts.length : totalData}</strong> Destinations
                </h2>

                { currentPage && (
                  <span className="current-page d-inline-block h-100 pl-4 text-secondary">
                    Page <span className="font-weight-bold">{ currentPage }</span> / <span className="font-weight-bold">{ totalPages }</span>
                  </span>
                ) }

            </div>
              <div className="d-flex flex-row py-4 align-items-center">
                <Pagination totalRecords={query ? showingContacts.length : totalData} pageLimit={6} pageNeighbours={1} onPageChanged={this.onPageChanged} />
              </div>
          </div>
        </div>

      </div>
    );
  }
}

export default DisplayData;
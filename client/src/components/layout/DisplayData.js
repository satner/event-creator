import React, { Component } from 'react';
import Pagination from './Pagination'
import CustomCard from './CustomCard'

class DisplayData extends Component {
  state = { allData: [], currentData: [], currentPage: null, totalPages: null }

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

  render() {
    const { allData, currentData, currentPage, totalPages } = this.state;
    const totalData = allData.length;

    if (totalData === 0) return null;
    const headerClass = ['text-dark py-2 pr-4 m-0', currentPage ? 'border-gray border-right' : ''].join(' ').trim();
    return (
      <div className="container mb-5">
        <div className="row d-flex flex-row py-5 justify-content-center">

          { currentData.map(data => <CustomCard key={data._id} name={data.name} />) }

          <div className="w-100 px-4 py-5 d-flex flex-row flex-wrap align-items-center justify-content-between">
            <div className="d-flex flex-row align-items-center">
                <h2 className={headerClass}>
                  <strong className="text-secondary">{totalData}</strong> Destinations
                </h2>

                { currentPage && (
                  <span className="current-page d-inline-block h-100 pl-4 text-secondary">
                    Page <span className="font-weight-bold">{ currentPage }</span> / <span className="font-weight-bold">{ totalPages }</span>
                  </span>
                ) }

            </div>
              <div className="d-flex flex-row py-4 align-items-center">
                <Pagination totalRecords={totalData} pageLimit={6} pageNeighbours={1} onPageChanged={this.onPageChanged} />
              </div>
          </div>
        </div>

      </div>
    );
  }
}

export default DisplayData;
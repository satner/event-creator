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
    const totalCountries = allData.length;

    if (totalCountries === 0) return null;

    return (
      <div className="container mb-5">
        <div className="row d-flex flex-row py-5 justify-content-center">

          { currentData.map(data => <CustomCard key={data._id} name={data.name} />) }

          <div className="w-100 px-4 py-5 d-flex flex-row flex-wrap align-items-center justify-content-between">
            <div className="d-flex flex-row py-4 align-items-center">
              <Pagination totalRecords={totalCountries} pageLimit={6} pageNeighbours={1} onPageChanged={this.onPageChanged} />
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default DisplayData;
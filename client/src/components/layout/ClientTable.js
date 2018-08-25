import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';

class ClientTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      columns: [{
        dataField: 'name',
        text: 'Name',
        filter: textFilter(),
        sort: true
      }, {
        dataField: 'destination',
        text: "Destination",
        filter: textFilter(),
      }, {
        dataField: 'email',
        text: 'Email',
        sort: true
      }, {
        dataField: 'contactPhone',
        text: "Contact Phone",
      }, {
        dataField: 'passportExpiryDate',
        text: "Passport ExpiryDate",
      }, {
        dataField: 'passportNumber',
        text: "Passport Number",
      }, {
        dataField: '_id',
        text: "id",
        hidden: true
      }],
      defaultSorted: [{
          dataField: 'name',
          order: 'desc'
      }],
      options: {
      paginationSize: 4,
      pageStartIndex: 0,
      firstPageText: 'First',
      prePageText: 'Back',
      nextPageText: 'Next',
      lastPageText: 'Last',
      nextPageTitle: 'First page',
      prePageTitle: 'Pre page',
      firstPageTitle: 'Next page',
      lastPageTitle: 'Last page',
      showTotal: false,
      }
    };
  }

  componentDidMount() {
    fetch('/api/client')
      .then(response => response.json())
      .then(data => this.setState({ data: data.filter( item => item.agent === this.props.username) }));
      
  }

  customTotal = (from, to, size) => (
    <span className="react-bootstrap-table-pagination-total">
      Showing { from } to { to } of { size } Results
    </span>
  )

  render() {

    return (
      <div>
          <p id="table-title"></p>
          <div className="container" >
              <BootstrapTable 
              striped
              hover
              keyField={(1 + Math.random() * (1000 - 1)).toString()}
              data={ this.state.data } 
              defaultSorted={ this.state.defaultSorted } 
              columns={ this.state.columns }
              pagination={ paginationFactory(this.state.options) } 
              filter={ filterFactory() }
              noDataIndication={ 'No clients yet' }/>
          </div>  
      </div>
    )
  }
}

export default ClientTable;


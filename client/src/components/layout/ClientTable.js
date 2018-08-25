import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';

class ClientTable extends Component {

  componentDidMount() {
    fetch('/api/client')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
  });
  }

  render() {
    return (
        <div>
            <p>jhgjgfh</p>
        </div>
    )
  }
}

export default ClientTable;


import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';

class App extends Component {
  state = {
    products: [
      {
        id: 1,
        name: 'TV',
        'price': 1000
      },
      {
        id: 2,
        name: 'Mobile',
        'price': 500
      },
      {
        id: 3,
        name: 'Book',
        'price': 20
      },
    ],

    columns: [{
      dataField: 'name',
      text: 'Destination'
    }, {
      dataField: 'subcribers',
      text: 'Subcribers',
      sort: true
    }]
  } 
  
  render() {
    return (
      <div className="container" style={{ marginTop: 50 }}>
        <BootstrapTable 
        striped
        hover
        keyField='id' 
        data={ this.state.products } 
        columns={ this.state.columns } />
      </div>
    );
  }
}

export default App;
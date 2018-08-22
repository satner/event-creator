import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';

class App extends Component {
  state = {
    allData: [],
    columns: [{
      dataField: 'destination',
      text: 'Destination'
    }, {
      dataField: 'subcribers',
      text: 'Subcribers',
      sort: true
    }]
  } 
  componentDidMount() {
    fetch('/api/items')
      .then(res => res.json())
      .then(data => this.setState({ allData: data }))
  }

  render() {
    let products = this.state.allData.filter( item => item.name === this.props.username)
    return (
      <div className="container" style={{ marginTop: 50 }}>
        <BootstrapTable 
        striped
        hover
        keyField='id' 
        data={ products } 
        columns={ this.state.columns } />
      </div>
    );
  }
}

export default App;
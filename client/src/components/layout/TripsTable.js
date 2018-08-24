import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import axios from 'axios';
import { ToastStore} from 'react-toasts';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';



class App extends Component {
  state = {
    allData: [],
    columns: [{
      dataField: 'destination',
      text: 'Destination',
      filter: textFilter(),
      sort: true
    }, {
      dataField: 'subscribers',
      text: 'Subcribers',
      filter: textFilter(),
      sort: true
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
  } 

  componentDidMount() {
    fetch('/api/items')
      .then(res => res.json())
      .then(data => this.setState({ allData: data.filter( item => item.name === this.props.username) }))
  }

  customTotal = (from, to, size) => (
    <span className="react-bootstrap-table-pagination-total">
      Showing { from } to { to } of { size } Results
    </span>
  )

  rowEvents = {
    onClick: (e, row, rowIndex) => {
        axios.delete('/api/items/'+ row._id)
        .then((response) => {
            if(response.status === 200) {
                ToastStore.success("Trip deleted!");
                this.updateASAP()
              } else {
                ToastStore.error("Error occurred");
              }
        }).catch(e => {
          ToastStore.error("Error occurred");
        })
    }
  };

  updateASAP = () => {
    this.props.cb()
  }

  render() {
    // let products = this.state.allData.filter( item => item.name === this.props.username)
    return (
        <div>
        {/* <Alert style={{marginTop: "25px", width: "250px"}} color="dark">Click a line to delete it!</Alert> */}
            <p id="table-title"></p>
            <div className="container" >
                <BootstrapTable 
                striped
                hover
                keyField='id' 
                data={ this.state.allData } 
                defaultSorted={ this.state.defaultSorted } 
                columns={ this.state.columns }
                pagination={ paginationFactory(this.state.options) } 
                filter={ filterFactory() }
                rowEvents={ this.rowEvents }
                noDataIndication={ 'Add a trip!' }/>
            </div>  
            <sub style={{float: "right", marginTop: "25px", marginRight: "10px"}}>Click a line to delete it!</sub>
        </div>
    );
  }
}

export default App;


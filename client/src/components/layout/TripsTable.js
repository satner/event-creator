import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import axios from 'axios';

import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


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
              this.allGood()
            } else {
              this.allFail()
            }
        }).catch(e => {
          this.allFail()
        })
    }
  };

  updateASAP = () => {
    this.props.cb()
  }

  allGood = () => toast.success('🦄 Trip deleted!', {
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });

  allFail = () => toast.error('🦄 Error occurred', {
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true
  });

  render() {
    return (
        <div>
            <p id="table-title"></p>
            <div className="container" >
                <BootstrapTable 
                striped
                hover
                keyField={(1 + Math.random() * (1000 - 1)).toString()}
                data={ this.state.allData } 
                defaultSorted={ this.state.defaultSorted } 
                columns={ this.state.columns }
                pagination={ paginationFactory(this.state.options) } 
                filter={ filterFactory() }
                rowEvents={ this.rowEvents }
                noDataIndication={ 'Add a trip!' }/>
            </div>  
            <sub style={{float: "right", marginTop: "25px", marginRight: "10px"}}>Click a line to delete it!</sub>
            <ToastContainer
              position="bottom-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnVisibilityChange
              draggable
              pauseOnHover
              />
        </div>
    );
  }
}

export default App;


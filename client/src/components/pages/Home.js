import React, { Component } from 'react';
import CustomCarousel from '../layout/CustomCarousel';
import DisplayData from '../layout/DisplayData';
import SearchBar from '../layout/SearchBar';

class Home extends Component {
 
  render() {

    return (
      <div >
        <CustomCarousel />
        <h1 id="main-header" className="display-4 text-center" >Active Experiences</h1>
        
        <DisplayData />
      </div>
    );
  }
}

export default Home;
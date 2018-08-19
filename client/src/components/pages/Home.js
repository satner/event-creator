import React, { Component } from 'react';
import CustomCarousel from '../layout/CustomCarousel';
import DisplayData from '../layout/DisplayData';
import SearchBar from '../layout/SearchBar';
import Footer from '../layout/Footer';
import ScrollUpButton from "react-scroll-up-button";

class Home extends Component {
 
  render() {

    return (
      <div >
         <ScrollUpButton EasingType='linear'/>
        <CustomCarousel />
        <h1 id="main-header" className="display-4 text-center" >Active Experiences</h1>
        
        <DisplayData />
        
        <Footer />
      </div>
    );
  }
}

export default Home;
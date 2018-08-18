import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '@okta/okta-react';

import CustomCarousel from '../layout/CustomCarousel';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    fetch('/api/items')
      .then(res => res.json())
      .then(data => this.setState({ data }, () => console.log('Data fetched...', data)))
  }

  render() {

    return (
      <div>
       <CustomCarousel />
      </div>
    );
  }
}

export default Home;
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';

import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Staff from './components/pages/Staff';
import Login from './components/auth/Login';
import TripDetails from './components/pages/TripDetails';
import Book from './components/pages/Book'
import Footer from './components/layout/Footer';

import './App.css';

function onAuthRequired({ history }) {
  history.push('/login');
}

class App extends Component {
  render() {
    return (
      <Router>
        <Security
          issuer="https://dev-116156.oktapreview.com/oauth2/default"
          client_id="0oafyf3lu1K1i7TCs0h7"
          redirect_uri={window.location.origin + '/implicit/callback'}
          onAuthRequired={onAuthRequired}
        >
          <div className="App">
            <Navbar />
            <div className="container">
              <Route path="/" exact={true} component={Home} />
              <SecureRoute path="/staff" exact={true} component={Staff} />
              <Route
                path="/login"
                render={() => (
                  <Login baseUrl="https://dev-116156.oktapreview.com" />
                )}
              />
              <Route path="/TripDetails" exact component={TripDetails}/>
              <Route path="/book" exact component={Book}/>
              <Route path="/implicit/callback" component={ImplicitCallback} />
              <Footer />
            </div>
          </div>
        </Security>
      </Router>
    );
  }
}

export default App;
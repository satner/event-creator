import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';
import AllGood from '../../../images/all-good.png'


class Complete extends Component {


  render() {
    return (
        <div>
            <Jumbotron>
                <h1 style={{textAlign: "center"}}>Have a nice trip, {this.props.name}</h1>
                
            </Jumbotron>
        </div>
    )
  }
}


export default Complete;


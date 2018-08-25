import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';

class Complete extends Component {

componentDidMount() {
    let data = JSON.parse(this.props.travellerInfo)
    data.extras = this.props.travellerSchedule
    data.tripID = this.props.tripID

    fetch('/api/client', {
        method: 'post',
        body: JSON.stringify(data),
        headers:{
            'Content-Type': 'application/json'
          }
      }).then(function (data) {  
        console.log('Request success: ', data);  
      })  
      .catch(function (error) {  
        console.log('Request failure: ', error);  
      });
}

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


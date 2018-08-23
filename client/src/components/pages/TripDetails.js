import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Button  } from 'reactstrap';
import JustTrip from '../layout/JustTrip'
import '../../TripDeatails.css'

class TripDetails extends Component {
  state ={
    tripData: []
  }

  componentDidMount() {
    fetch('/api/items/' + this.props.location.state.id)
      .then(res => res.json())
      .then(data => this.setState({ tripData: data }, () => console.log('Specific data fetched...')))
  }

  testing = () => {
    let kappa
    if (this.state.tripData.activities) {
      kappa = JSON.parse(this.state.tripData.activities)
      console.log(kappa["main-activity-1-day-1"])
    }
     
    

    
  }
  render() {
    const {tripData} = this. state;
    const days = tripData.duration;
    
    return (
        <Container>
          {/* Header and subHeader of trip */}
        <Row>
          <Col id="trip-header"><h1>{tripData.destination}</h1></Col>
        </Row>
        <Row>
          <Col id="trip-subheader"><h2 className="text-muted">{tripData.shortDescription}</h2></Col>
        </Row>
        {/* Main info */}
        <Row id="main-trip-info" className="vdivide">
          <Col className="main-trip-info-col text-center">
            <h4><small className="text-muted">DATE</small></h4>
            <p className="main-trip-info-data"> {tripData["date-start"]} <br /> {tripData["date-end"]}</p>
          </Col>
          <Col className="main-trip-info-col text-center">
            <h4><small className="text-muted">DURATION</small></h4>
            <p className="main-trip-info-data">{tripData["duration"]} DAYS</p>
          </Col>
          <Col className="main-trip-info-col text-center">
            <h4><small className="text-muted">PRICE</small></h4>
            <p className="main-trip-info-data">{tripData["price"]}</p>
          </Col>
          <Col className="main-trip-info-col text-center">
            <h4><small className="text-muted">AVAILABILITY</small></h4>
            <p className="main-trip-info-data">{tripData["total-participation"]}</p>
          </Col>
          <Col className="main-trip-info-col text-center">
            <div className='button-wrapper'>
              <Button color="danger">BOOK</Button> 
            </div>
          </Col>
        </Row>
        {/* Desc of trip */}
        <Row>
          <Col style={{marginTop: "25px"}}>
            <h3><small className="text-muted">Description</small></h3>
            {tripData["description"]}
            <hr />
          </Col>
        </Row>

        {/* Schedule */}
        <h3><small className="text-muted">Schedule</small></h3>
        {this.testing() }
       
      </Container>
    )
  }
}

export default TripDetails;

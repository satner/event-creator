import React, { Component } from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem, Badge } from 'reactstrap';
import { Button  } from 'reactstrap';
import JustTrip from '../layout/JustTrip'
import '../../TripDeatails.css'

class TripDetails extends Component {
  state ={
    tripData: [],
    days: 0
  }

  componentDidMount() {
    fetch('/api/items/' + this.props.location.state.id)
      .then(res => res.json())
      .then(data => this.setState({ tripData: data }, () => console.log('Specific data fetched...')))
      window.scrollTo(0,0)
  }

  createSchedule = (days) => {
    // let table = []
    // for(let i = 0; i < days; i++) {
    //   table.push(
    //     <div key={i} >
    //       <JustTrip day={i + 1} activities={this.state.tripData.activities}/>
    //     </div>
    //   )
    // }
    // return table
    let table = []
    if(this.state.tripData.activities) {
      let p = JSON.parse(this.state.tripData.activities)
      let act = Object.values(p)
      for(let i = 0 ; i < act.length / 5; i++) {
        table.push(
          <div key={i} >
            <JustTrip day={i + 1} main={act[i]} ex1={act[i+1]} exc1={act[i+2]} ex2={act[i+3]} exc2={act[i+4]}/>
          </div>
        )
      }    
    }
    return table
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
            <p className="main-trip-info-data">{tripData["price"]} &euro;</p>
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
        {this.createSchedule(days)}

        {/* Must have */}
        <Row>
          <Col style={{marginTop: "25px"}}>
            <h3><small className="text-muted">Must have</small></h3>
            {tripData["mustHave"]}
            <hr />
          </Col>
        </Row>

        {/* Extras */}
        <Row>
          <Col style={{marginTop: "25px"}}>
            <h3><small className="text-muted">Extras</small></h3>
            {tripData["extras"]}
            <hr />
          </Col>
        </Row>

        {/* Notes */}
        <Row>
          <Col style={{marginTop: "25px"}}>
            <h3><small className="text-muted">Notes</small></h3>
            <ListGroup>
              <ListGroupItem className="justify-content-between"><Badge color="info" style={{marginRight: "10px"}}>Hotel</Badge> {tripData.hotel}</ListGroupItem>
              <ListGroupItem className="justify-content-between"><Badge color="info" style={{marginRight: "10px"}}>Email</Badge>  {tripData.email}</ListGroupItem>
              <ListGroupItem className="justify-content-between"><Badge color="info" style={{marginRight: "10px"}}>Contact phone</Badge>+30 {tripData["contact-phone"]}</ListGroupItem>
              <ListGroupItem className="justify-content-between"><Badge color="info" style={{marginRight: "10px"}}>Travel agent</Badge>  {tripData.name}</ListGroupItem>
            </ListGroup>
          </Col>
        </Row>

      </Container>
    )
  }
}

export default TripDetails;

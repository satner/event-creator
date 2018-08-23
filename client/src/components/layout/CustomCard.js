import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import { Link } from 'react-router-dom'
import TripDetails from '../pages/TripDetails'

class CustomCard extends React.Component  {
  
  render() {
    {console.log(this.props.id)}
    return (
      <div className="d-flex p-2">
        <Card style={{ width: "350px" }}>
          <CardImg top width="100%" src={this.props.avatar} alt="Card image cap" />
          <CardBody>
            <CardTitle style={{textTransform: "uppercase"}}>{this.props.destination}</CardTitle>
            <CardSubtitle style={{marginBottom: "15px"}}>{this.props.shortDescription}</CardSubtitle>
            <CardText style={{maxWidth: "250px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap"}}>{this.props.description}</CardText>
            {/* <Button tag={Link} to="/TripDetails" params={{ testvalue: "hello" }}> Subscribe</Button> */}
            <Link to={{ pathname: '/TripDetails', state: { id: this.props.id} }}>My route</Link>
          </CardBody>
        </Card>
      </div>
    )
  }
}

export default CustomCard;
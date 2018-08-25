import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import { Link } from 'react-router-dom'

class CustomCard extends React.Component  {
  
  render() {
    return (
      <div className="d-flex p-2">
        <Card style={{ width: "350px" }}>
          <CardImg top width="100%" src={this.props.avatar} alt="Card image cap" className="card-img-top"/>
          <CardBody>
            <CardTitle style={{textTransform: "uppercase"}}>{this.props.destination}</CardTitle>
            <CardSubtitle style={{marginBottom: "15px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap"}}>{this.props.shortDescription}</CardSubtitle>
            <CardText style={{maxWidth: "250px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap"}}>{this.props.description}</CardText>
            <Link to={{ pathname: '/TripDetails', state: { id: this.props.id} }}><Button>Subscribe</Button></Link>
          </CardBody>
        </Card>
      </div>
    )
  }
}

export default CustomCard;
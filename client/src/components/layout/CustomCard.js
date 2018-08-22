import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const CustomCard = (props) => {
  return (
    <div className="d-flex p-2">
      <Card style={{ width: "350px" }}>
        <CardImg top width="100%" src={props.avatar} alt="Card image cap" />
        <CardBody>
          <CardTitle style={{textTransform: "uppercase"}}>{props.destination}</CardTitle>
          <CardSubtitle style={{marginBottom: "15px"}}>{props.shortDescription}</CardSubtitle>
          <CardText style={{maxWidth: "250px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap"}}>{props.description}</CardText>
          <Button>Subscribe</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default CustomCard;
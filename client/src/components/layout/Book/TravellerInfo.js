import React from 'react';
import 'react-credit-cards/es/styles-compiled.css';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { Button, FormGroup, Jumbotron } from 'reactstrap';

class TravellerInfo extends React.Component {
    state = {
        travellerInfo: ''
    }
    handleSubmitTravellerInfo = (event, errors, values) => {
        this.setState({travellerInfo: values});
        this.props.cb(values)
        this.props.callNextStep()
    }

  render() {
    return (
    <div>
      <Jumbotron>
        <AvForm onSubmit={this.handleSubmitTravellerInfo} style={{ marginTop: "25px"}}>
            {/* Traveller name */}
            <AvField name="name" label="Name" required />
            {/* Date of birth */}
            <AvField name="dateOfBirth" label="Date of birth" type="date" required/>
            {/* Passport number */}
            <AvField name="passportNumber" label="Passport number" type="text" validate={{pattern: {value: /[a-zA-Z]{2}\d{7}/}}} required/>       
            {/* Passport expiry date */}
            <AvField name="passportExpiryDate" label="Passport expiry date" type="date" required/>
            {/* Contact phone */}
            <AvField name="contactPhone" label="Contact phone" type="text" validate={{pattern: {value: /\d{10}/}}} required/>
            {/* Traveller email */}
            <AvField name="email" label="Email" type="email" required/>
            <FormGroup>
                <Button>Next</Button>
            </FormGroup>
        </AvForm>
      </Jumbotron>
      {this.state.travellerInfo && <div>
          <h5>Submission values</h5>
          Values: <pre>{JSON.stringify(this.state.travellerInfo, null, 2)}</pre>
        </div>}
    </div>
           
    );
  }
}

export default TravellerInfo;
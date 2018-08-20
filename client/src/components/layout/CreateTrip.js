import React from 'react';
import { AvForm, AvField, AvGroup, AvInput, AvFeedback, AvRadioGroup, AvRadio } from 'availity-reactstrap-validation';
import { CustomInput, Button, Form, FormGroup, Label, Input, FormText,InputGroup,
  InputGroupAddon, FormFeedback, Collapse, Alert } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmitSchedule = this.handleSubmitSchedule.bind(this);
    this.toggleSchedule = this.toggleSchedule.bind(this);
    this.toggleMain = this.toggleMain.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      collapseMain: true,
      collapseSchedule: false,
      schedule: ''
      };
  }

  handleSubmit(event, errors, values) {
    this.setState({errors, values});
    if (errors.length === 0) {
      this.setState({ collapseMain: !this.state.collapseMain });
      this.toggleSchedule();
    }
  }

  handleSubmitSchedule(event, errors, values) {
    if (errors.length === 0) {
      this.setState({schedule: values});
    }
  }

  toggleMain() {
    this.setState({ collapseMain: !this.state.collapseMain });
  }

  toggleSchedule() {
    this.setState({ collapseSchedule: !this.state.collapseSchedule });
  }

  createSchedule = (duration) => {
    let table = []
    
    for (let i = 1; i <= duration; i++) {
      table.push(
        <div key={i} style={{padding: "25px"}}>
          <AvField name={"main-activity-" + i + "-day-" + i} label={"Main Activity Day" + i} required />
          <div style={{paddingLeft: "25px"}}>
            <AvField name={"extra-activity-1-day-" + i}  placeholder={"Extra activity one"} required />
            <AvField name={"extra-activity-1-constraint" + "-day-" + i}  type="number" min="1" placeholder="Minimum participation"/>
            <AvField name={"extra-activity-2-day-" + i} placeholder={"Extra activity two"} required />
            <AvField name={"extra-activity-2-constraint" + "-day-" + i}   type="number" min="1" placeholder="Minimum participation"/>
          </div>
        </div>
      )
    }

    return table
  }

  render() {
    return (
      <div>
        
        <Alert color="dark" onClick={this.toggleMain} style={{ marginTop: '25px'}}>Main content of trip</Alert>

        {/* Create Main content of trip */}
        <Collapse isOpen={this.state.collapseMain}>
          <AvForm onSubmit={this.handleSubmit} style={{marginTop: "25px", display: "flex", flexWrap: "wrap", justifyContent: "space-evenly"}}>
            <div>
            <AvField name="name" label="Name" value={this.props.username} disabled/>
            <AvField name="email" label="Email" value={this.props.email} disabled />
            <AvField name="duration" label="Duration" type="number" min="1" required placeholder="Enter duration of trip"/>
            <AvField name="total-participation" label="Total Participation" type="number" min="1" required />
            <AvField name="price" label="Price" type="number" min="1" required />
            <AvField name="date-start" label="Date (Start)" type="date" required/>
            </div>
            <div >
            <AvField name="date-end" label="Date (End)" type="date" required/>
            <AvField name="contact-phone" label="Phone" type="tel" required/>
            <AvField name="hotel" label="Hotel Name" required />
            <FormGroup>
              <Label for="exampleText">Description</Label>
              <Input type="textarea" name="description" id="exampleText" required/>
            </FormGroup>
            <FormGroup>
              <Label for="exampleText">Extras</Label>
              <Input type="textarea" name="extras" id="exampleText" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleText">Must have</Label>
              <Input type="textarea" name="must-have" id="exampleText" />
            </FormGroup>
            <FormGroup>
              <Button>Next</Button>
            </FormGroup>
            </div>
            
          </AvForm>
        </Collapse>


        {/* Create Schedule of trip */}
        <Alert color="dark" onClick={this.toggleSchedule} style={{ marginTop: '25px'}}>Main content of trip</Alert>
        <Collapse isOpen={this.state.collapseSchedule}>
          <AvForm onSubmit={this.handleSubmitSchedule} style={{marginTop: "25px", display: "flex", flexWrap: "wrap", justifyContent: "flex-start"}}>
          {this.state.values && this.state.values.duration &&
            this.createSchedule(this.state.values.duration)
          }
            <FormGroup style={{alignSelf: "flex-end"}}>
                <Button>Save</Button>
            </FormGroup>
          </AvForm>
        </Collapse>
            {console.log('qqqqqqqqqqq',this.state.schedule)}
        
        {/* {this.state.values && <div>
          <h5>Submission values</h5>
          Invalid: {this.state.errors.join(', ')}<br />
          Values: <pre>{JSON.stringify(this.state.values, null, 2)}</pre>
        </div>} */}

      </div>
    );
  }
}
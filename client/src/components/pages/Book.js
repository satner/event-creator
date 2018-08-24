import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Steps, { Step } from 'rc-steps';
import 'rc-steps/assets/index.css';
import 'rc-steps/assets/iconfont.css';
import { AvForm, AvField, AvGroup, AvInput, AvFeedback, AvRadioGroup, AvRadio } from 'availity-reactstrap-validation';
import { Button, Label, FormGroup, Badge } from 'reactstrap';


class App extends Component {
  state = {
    currentStep: 1,
    totalSteps: 4,
  };


  nextStep = () => {
    let s = this.state.currentStep + 1;
    if (s >= this.state.totalSteps) {
      s = 5;
    }
    this.setState({
      currentStep: s,
    });
  }

  prevStep = () => {
    let s = this.state.currentStep - 1;
    if (s <= 1) {
      s = 1;
    }
    this.setState({
      currentStep: s,
    });
  }

  handleSubmit(event, errors, values) {
    this.setState({errors, values});
    if(errors.length === 0) {
      let s = this.state.currentStep + 1;
      if (s >= this.state.totalSteps) {
        s = 5;
      }
      this.setState({
        currentStep: s,
      });
    }
  }

  createSheduleExtras = (days, activities) => {
    let table = []
    let act = Object.values(activities).filter(i => i.includes("main") !== true)
    console.log(act);
    for (let i = 0; i < act.length / 4; i++) {
      let n = "extra-activity-" + (i+1)
      let d = "Extra activities day: " + (i+1)
     
      if (i > 0 ) {
        let newAct = act.slice(i+3, i+7)
        console.log(newAct);
        console.log(act);
        
        table.push(
          <AvRadioGroup key={i} inline name={n} label={d} required>
              <AvRadio label={newAct[0]} value={newAct[0]} /><Badge color="danger" style={{marginRight: "15px"}}>At least {newAct[1]}</Badge>
              <AvRadio label={newAct[2]} value={newAct[2]} /><Badge color="danger" style={{marginRight: "15px"}}>At least {newAct[3]}</Badge>
          </AvRadioGroup>
        )
        
      } else {
        table.push(
          <AvRadioGroup key={i} inline name={n} label={d} required>
              <AvRadio label={act[i]} value={act[i]} /><Badge color="danger" style={{marginRight: "15px"}}>At least {act[i+1]}</Badge>
              <AvRadio label={act[i+2]} value={act[i+2]} /><Badge color="danger" style={{marginRight: "15px"}}>At least {act[i+3]}</Badge>
          </AvRadioGroup>
        )
      }
    }
    return table
  }

  render() {
    const activities = JSON.parse(this.props.location.state.activities)
    const days = parseInt(this.props.location.state.days)
    return (
      <div>
        <Steps current={this.state.currentStep}>
        <Step title="Traveler Information" />
        <Step title="Schedule" />
        <Step title="Payment" />
        <Step title="待运行" />
        </Steps>

        { this.state.currentStep === 1 &&
            <AvForm onSubmit={this.handleSubmit.bind(this)} style={{width: "50%", marginTop: "25px"}}>
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
              <FormGroup>
                <Button>Next</Button>
              </FormGroup>
            </AvForm>
          }

          { this.state.currentStep === 2 &&
            <AvForm onSubmit={this.handleSubmit.bind(this)} style={{width: "50%", marginTop: "25px"}}>
              {this.createSheduleExtras(days, activities)}
              <FormGroup>
                <Button>Next</Button>
              </FormGroup>
            </AvForm>
          }

          {this.state.values && <div>
          <h5>Submission values</h5>
          Invalid: {this.state.errors.join(', ')}<br />
          Values: <pre>{JSON.stringify(this.state.values, null, 2)}</pre>
        </div>}
        
        {/* <Button style={{float: "left"}} onClick={this.prevStep}>Back</Button>
        <Button style={{float: "right"}} onClick={this.nextStep}>Next</Button> */}
      </div>
    )
  }
    
    
  }


export default App;

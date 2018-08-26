import React, { Component } from 'react';
import Steps, { Step } from 'rc-steps';
import 'rc-steps/assets/index.css';
import 'rc-steps/assets/iconfont.css';

import CreditCard from '../layout/Book/CreditCard'
import TravellerInfo from '../layout/Book/TravellerInfo'
import Schedule from '../layout/Book/Schedule'
import Complete from '../layout/Book/Complete'

class App extends Component {
  state = {
    currentStep: 1,
    totalSteps: 4,
    travellerInfo: '',
    travellerSchedule: '',
    allData: ''
  };

  nextStep = () => {
    let s = this.state.currentStep + 1;
    if (s >= this.state.totalSteps) {
      s = 4;
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

  saveTravellerInfo = (travellerInfo) => {
    this.setState({travellerInfo})
  }

  saveTravellerSchedule = (travellerSchedule) => {
    this.setState({travellerSchedule})
  }

  render() {
    const activities = JSON.parse(this.props.location.state.activities)
    const days = parseInt(this.props.location.state.days, 10)
    return (
      <div>
        <Steps current={this.state.currentStep}>
        <Step title="Traveller Information" icon={IconStepOne}/>
        <Step title="Schedule" icon={IconStepTwo}/>
        <Step title="Payment" icon={IconStepThree}/>
        <Step title="Complete" icon={IconStepFour}/>
        </Steps>

        { this.state.currentStep === 1 &&
          <TravellerInfo callNextStep={this.nextStep} cb={this.saveTravellerInfo}/>
        }

        { this.state.currentStep === 2 &&
          <Schedule callPrevStep={this.prevStep} callNextStep={this.nextStep} days={days} activities={activities} cb={this.saveTravellerSchedule}/>
        }

        { this.state.currentStep === 3 && 
          <CreditCard callPrevStep={this.prevStep} callNextStep={this.nextStep}/>
        }

        { this.state.currentStep === 4 &&
          <Complete name={this.state.travellerInfo.name} travellerInfo={JSON.stringify(this.state.travellerInfo)} travellerSchedule={JSON.stringify(this.state.travellerSchedule)} tripID={this.props.location.state.id} agent={this.props.location.state.agent} dest={this.props.location.state.dest} activities={activities}/>
        }
      
      </div>
    )
  }
    
    
  }


export default App;


const IconStepOne =  <i className="fas fa-info"></i>
const IconStepTwo =  <i className="far fa-calendar-alt"></i>
const IconStepThree =  <i className="fas fa-credit-card"></i>
const IconStepFour =  <i className="fas fa-check"></i>
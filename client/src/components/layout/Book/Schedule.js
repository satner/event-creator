import React from 'react';
import 'react-credit-cards/es/styles-compiled.css';
import { AvForm, AvRadioGroup, AvRadio } from 'availity-reactstrap-validation';
import { Button, FormGroup, Badge, Jumbotron } from 'reactstrap';

class Schedule extends React.Component {
    state = {
        travellerSchedule: ''
    }

    handleSubmitTravellerChoices = (event, errors, values) => {
        this.setState({travellerSchedule: values});
        this.props.cb(values)
        this.props.callNextStep()
    }
      

      createSheduleExtras = (days, activities) => {
        let table = []
        let act = Object.values(activities).filter(i => i.includes("main") !== true)

        for (let i = 0; i < act.length / 4; i++) {
          let n = "extra-activity-" + (i+1)
          let d = "Extra activities day: " + (i+1)
         
          if (i > 0 ) {
            let newAct = act.slice(i+3, i+7)
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
    return (
    <div>
      <Jumbotron>
              <AvForm onSubmit={this.handleSubmitTravellerChoices} style={{marginTop: "25px"}}>
                {this.createSheduleExtras(this.props.days, this.props.activities)}
                <FormGroup>
                  <Button>Next</Button>
                </FormGroup>
              </AvForm>
        </Jumbotron>
        
    </div>
           
    );
  }
}

export default Schedule;
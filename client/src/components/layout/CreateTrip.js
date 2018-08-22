import React from 'react';
import { AvForm, AvField} from 'availity-reactstrap-validation';
import { Button, FormGroup, Label, Input, Collapse, Alert, CustomInput } from 'reactstrap';
import axios from 'axios';
import {ToastContainer, ToastStore} from 'react-toasts';


export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmitSchedule = this.handleSubmitSchedule.bind(this);
    this.toggleSaveTrip = this.toggleSaveTrip.bind(this);
    this.toggleSchedule = this.toggleSchedule.bind(this);
    this.toggleMain = this.toggleMain.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      collapseMain: true,
      collapseSchedule: false,
      CollapseSaveTrip: false,
      schedule: '',
      scheduleTable: [],
      description: '',
      extras: '',
      mustHave:'',
      mainGood: false,
      allGood: false, 
      selectedFile: ''
      };
  }

  handleSubmit(event, errors, values) {
    values.description = this.state.description
    values.extras = this.state.extras
    values.mustHave = this.state.mustHave

    this.setState({errors, values});
    if (errors.length === 0) {
      this.setState({ collapseMain: !this.state.collapseMain });
      this.setState({mainGood: true});
      this.toggleSchedule();
    }
  }

  handleSubmitSchedule(event, errors, values) {
    if (errors.length === 0) {
      this.setState({schedule: values});
      this.setState(function(oldState) {
        scheduleTable: oldState.scheduleTable.push(this.state.schedule)
      });
      this.state.mainGood ? this.setState({allGood: true}) : ''
    }
      this.setState({ collapseSchedule: !this.state.collapseSchedule });
      this.toggleSaveTrip();
  }

  toggleMain() {
    this.setState({ collapseMain: !this.state.collapseMain });
  }

  toggleSchedule() {
    this.setState({ collapseSchedule: !this.state.collapseSchedule });
  }

  toggleSaveTrip() {
    this.setState({ CollapseSaveTrip: !this.state.CollapseSaveTrip });
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

  kappa = (data) => {
    // fetch('/api/items', {
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: data
    // })

    let formData = new FormData();


    formData.append('name', data.name);
    formData.append("email", data.email);
    formData.append("destination", data.destination);
    formData.append("subscribers", '0');
    formData.append("duration", data.duration);
    formData.append("total-participation", data["total-participation"]);
    formData.append("price", data.price);
    formData.append("date-start", data["date-start"]);
    formData.append("date-end", data["date-end"]);
    formData.append("contact-phone", data["contact-phone"]);
    formData.append("hotel", data.hotel);
    formData.append("description", data.description);
    formData.append("extras", data.extras);
    formData.append("mustHave", data.mustHave);
    formData.append("activities", JSON.stringify(data.activities));
    formData.append('fileBrowserImage', this.state.selectedFile);

    // fetch('/api/items', {
    //   method:'POST',
    //   body: formData

    // })
    

    axios.post('/api/items', formData)
    .then(function (response) {
      if(response.status === 200) {
        ToastStore.success("Trip saved!");
      } else {
        ToastStore.error("Error occurred");
      }
    })
  }

  saveTrip = () => {
    this.state.values.activities = this.state.scheduleTable
    this.kappa(this.state.values)
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
            <AvField name="destination" label="Destination"/>
            <AvField name="duration" label="Duration" type="number" min="1" required placeholder="Enter duration of trip"/>
            <AvField name="total-participation" label="Total Participation" type="number" min="1" required />
            <AvField name="price" label="Price" type="number" min="1" required />
            <AvField name="date-start" label="Date (Start)" type="date" required/>
            <FormGroup encType="multipart/form-data">
              <Label for="fileBrowserImage">Trip image</Label>
              <CustomInput encType="multipart/form-data" type="file" id="fileBrowser" name="fileBrowserImage" onChange={e => this.setState({selectedFile: e.target.files[0]})}/>
            </FormGroup>
            </div>
            <div style={{alignSelf: "flex-end"}}>
            <AvField name="date-end" label="Date (End)" type="date" required/>
            <AvField name="contact-phone" label="Phone" type="tel" required/>
            <AvField name="hotel" label="Hotel Name" required />
            <FormGroup>
              <Label for="exampleText">Description</Label>
              <Input type="textarea" name="description" id="exampleText" onKeyUp={(e) => this.setState({description: e.target.value})} required/>
            </FormGroup>
            <FormGroup>
              <Label for="exampleText">Extras</Label>
              <Input type="textarea" name="extras" id="exampleText" onKeyUp={(e) => this.setState({extras: e.target.value})}/>
            </FormGroup>
            <FormGroup>
              <Label for="exampleText">Must have</Label>
              <Input type="textarea" name="must-have" id="exampleText" onKeyUp={(e) => this.setState({mustHave: e.target.value})}/>
            </FormGroup>
            <FormGroup >
              <Button>Next</Button>
            </FormGroup>
            </div>
            
          </AvForm>
        </Collapse>


        {/* Create Schedule of trip */}
        <Alert color="dark" onClick={this.toggleSchedule} style={{ marginTop: '25px'}}>Schedule</Alert>
        <Collapse isOpen={this.state.collapseSchedule}>
          <AvForm onSubmit={this.handleSubmitSchedule} style={{marginTop: "25px", display: "flex", flexWrap: "wrap", justifyContent: "flex-start"}}>
          {this.state.values && this.state.values.duration &&
            this.createSchedule(this.state.values.duration)
          }
            <FormGroup style={{alignSelf: "flex-end"}}>
                <Button>Next</Button>
            </FormGroup>
          </AvForm>
        </Collapse>
            
        
        {/* {this.state.values && <div>
          <h5>Submission values</h5>
          Invalid: {this.state.errors.join(', ')}<br />
          Values: <pre>{JSON.stringify(this.state.values, null, 2)}</pre>
        </div>} */}

      <Alert color="dark" onClick={this.toggleSaveTrip} style={{ marginTop: '25px'}}>Save trip</Alert>
      <Collapse isOpen={this.state.CollapseSaveTrip}>
        <Button disabled={!this.state.allGood} onClick={this.saveTrip} >Submit</Button>
        <ToastContainer store={ToastStore}/>
      </Collapse>

      </div>
    );
  }
}
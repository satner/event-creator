import React, { Component } from 'react';
import { Jumbotron, Table } from 'reactstrap';

class Complete extends Component {

componentDidMount() {
    let data = JSON.parse(this.props.travellerInfo)
    data.extras = this.props.travellerSchedule
    data.tripID = this.props.tripID
    data.agent = this.props.agent
    data.destination = this.props.dest
    
    // Post client to DB
    fetch('/api/client', {
        method: 'post',
        body: JSON.stringify(data),
        headers:{
            'Content-Type': 'application/json'
          }
      }).then(function (data) {  
        console.log('Request success: ', data);  
      })  
      .catch(function (error) {  
        console.log('Request failure: ', error);  
      });

    // Create email body
    data.activities = this.props.activities
    let rows = this.createDayRows(data)
    let sub = this.createEmailTable(rows)

    let emailData = {
      data: sub, 
      receiver: data.email}

    // Send email
    fetch('/api/email', {
      method: 'POST', 
      body: JSON.stringify(emailData),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then(response => console.log('Success:', JSON.stringify(response)))
    .catch(error => console.error('Error:', error));

    // Update trip "total-participation"
    fetch('/api/items/' + data.tripID, {
      method: 'PUT',
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then(response => console.log('Success:', JSON.stringify(response)))
    .catch(error => console.error('Error:', error));
}

createEmailTable = (rows) => {
  let sub = `<style type="text/css">
  .tg  {border-collapse:collapse;border-spacing:0;}
  .tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:0px;overflow:hidden;word-break:normal;}
  .tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:0px;overflow:hidden;word-break:normal;}
  .tg .tg-aoz7{border-color:#680100;text-align:left;vertical-align:top}
  .tg .tg-jy0c{font-size:22px;font-family:Verdana, Geneva, sans-serif !important;;border-color:#680100;text-align:left;vertical-align:top}
  </style>
  <table class="tg">
    <tr>
      <th class="tg-jy0c" colspan="2"><span style="font-weight:bold">SCHEDULE</span></th>
    </tr>
    ` + rows.toString() +
  `</table>`

  return sub
}

createDayRows = (data) => {
  let table = []
  let iterations = Object.values(JSON.parse(data.extras)).length
  let mainActs = Object.values(data.activities).filter(i => i.includes("main"))
  let extraActs = Object.values(JSON.parse(data.extras))
  for (let i = 0; i < iterations; i++) {
    table.push(
      `<tr>
      <td class="tg-aoz7">Day ` + (i+1) +`</td>
      <td class="tg-aoz7"></td>
    </tr>
    <tr>
      <td class="tg-aoz7">` + mainActs[i] + `</td>
      <td class="tg-aoz7">` + extraActs[i] + `<br></td>
    </tr>`
    )
  }
  return table
}

  render() { 
    return (
        <div>
            <Jumbotron>
                <h1 style={{textAlign: "center"}}>Have a nice trip, {this.props.name}</h1>
                <h3><small style={{textAlign: "center"}} className="text-muted">Check your email for the trip schedule</small></h3>
            </Jumbotron>
        </div>
    )
  }
}

export default Complete;


import React, { Component } from 'react';
import { Collapse, Alert, Table } from 'reactstrap';
import '../../JustTrip.css'

class JustTrip extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
      }
    
      toggle() {
        this.setState({ collapse: !this.state.collapse });
      }
    
      render() {
        
        return (
          <div>
            <Alert color="dark" onClick={this.toggle} style={{ marginBottom: '1rem', cursor: "pointer" }}>Day {this.props.day}</Alert>
            <Collapse isOpen={this.state.collapse}>
              <Table>
                <thead>
                  <tr>
                    <th>Activities</th>
                    <th>Type of activity</th>
                    <th>Minimum participation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="activity">{this.props.main}</td>
                    <td>Compulsory</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td className="activity">{this.props.ex1}</td>
                    <td>Optional</td>
                    <td>{this.props.exc1} people</td>
                  </tr>
                  <tr>
                    <td className="activity">{this.props.ex2}</td>
                    <td>Optional</td>
                    <td>{this.props.exc2} people</td>
                  </tr>
                </tbody>
              </Table>
            </Collapse>
          </div>
        );
      }
    }
export default JustTrip;

import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card, Alert } from 'reactstrap';


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
            <Alert color="dark" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Day </Alert>
            <Collapse isOpen={this.state.collapse}>
              <Card>
                <CardBody>
                Anim pariatur cliche reprehenderit,
                 enim eiusmod high life accusamus terry richardson ad squid. Nihil
                 anim keffiyeh helvetica, craft beer labore wes anderson cred
                 nesciunt sapiente ea proident.
                </CardBody>
              </Card>
            </Collapse>
          </div>
        );
      }
    }
export default JustTrip;

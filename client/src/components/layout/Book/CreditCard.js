import React from 'react';
import 'react-credit-cards/es/styles-compiled.css';
import CreditCardInput from 'react-credit-card-input';
import { Jumbotron, Button } from 'reactstrap';

export default class CreditCard extends React.Component {
  

  render() {
    return (
      <div>
      <Jumbotron>
        <CreditCardInput
          cardCVCInputRenderer={({ handleCardCVCChange, props }) => (<input {...props}/>)}
          cardExpiryInputRenderer={({ handleCardExpiryChange, props }) => (<input {...props} /> )}
          cardNumberInputRenderer={({ handleCardNumberChange, props }) => (<input {...props} />)}
          containerClassName="kappa-reality"
          containerStyle={{backgroundColor: "rgb(240, 240, 240)"}}
      />
      
      <Button color="dark" id="credit-card-pay-btn" onClick={this.props.callNextStep}>PAY</Button>
      </Jumbotron>
    </div>
           
    );
  }
}
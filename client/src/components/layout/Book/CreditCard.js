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
          cardCVCInputRenderer={({ handleCardCVCChange, props }) => (
            <input
            {...props}
            onChange={handleCardCVCChange(e => console.log('cvc change', e))}
            />
            )}
          cardExpiryInputRenderer={({ handleCardExpiryChange, props }) => (
            <input
              {...props}
              onChange={handleCardExpiryChange(e =>
                console.log('expiry change', e)
              )}
            />
          )}
          cardNumberInputRenderer={({ handleCardNumberChange, props }) => (
            <input
              {...props}
              onChange={handleCardNumberChange(e =>
                console.log('number change', e)
              )}
            />
          )}
          containerClassName="kappa-reality"
          containerStyle={{backgroundColor: "rgb(240, 240, 240)"}}
      />
      
      <Button color="dark" id="credit-card-pay-btn">PAY</Button>
      </Jumbotron>
    </div>
           
    );
  }
}
import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';

class Payments extends Component {
  render(){
    return (
      <StripeCheckout
        name="REM"
        description="$5 for 5 email credits"
        amount={ 500 }
        //token is the response from the callback function not the API key
        token={ token => console.log(token) }
        stripeKey={ process.env.REACT_APP_STRIPE_KEY }
      >
        <button className='btn'>
          Add credits
        </button>
      </StripeCheckout>
    );
  }
}

export default Payments;

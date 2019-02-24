import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

export class StripeCheckoutComponent extends React.Component {
  render() {
    return (
      <StripeCheckout
        name="Emaily"
        description="Purchase 5 Emaily Credits"
        amount={500}
        token={this.props.handleToken}
        stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}
      >
        <button className="btn">
          Add Credits
        </button>
      </StripeCheckout>
    )
  }
}

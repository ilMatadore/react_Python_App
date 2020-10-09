import React from 'react';
import { withRouter } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price, history }) => {
    const priceForStripe = price * 100;
    const publishableKey= 'pk_test_uHwH5mIyIiLXqq34TjsUN0M400CsL1gScH';

    const onToken = token => {
        axios({
          url: 'payment',
          method: 'post',
          data: {
            amount: priceForStripe,
            token: token
          }
        })
          .then(response => {
            history.push('/order')
            console.log(response)
          })
          .catch(error => {
            console.log('Payment Error: ', error);
            alert(
              'There was an issue with your payment!! Please make sure you use the provided credit card.'
            );
          });
      };

    return (

    <StripeCheckout
        label='Pay Now'
        name='Eureka'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.png'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    );
};

export default withRouter(StripeCheckoutButton);
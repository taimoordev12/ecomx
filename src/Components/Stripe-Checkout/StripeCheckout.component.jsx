import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import E2 from '../../assets/images/E2.png';

const StripeCheckout1 =({price})=>{
const priceForStripe=price*100;
const publishablekey ='pk_test_9UVg29Qx90z1rufWRihSiC5N000ETbIThS';

const onToken=token=>{
console.log(token);
alert('Payment Successful');
}
return (
    <StripeCheckout
    label='Pay with Stripe'
    name='EcomX'
    shippingAddress
    billingAddress={false}
    image={E2}
    description={`your total is $${price}`}
    amount={priceForStripe}
    panelLabel='Pay Now'
    token={onToken}
    stripeKey={publishablekey}


    />
)

}

export default StripeCheckout1;
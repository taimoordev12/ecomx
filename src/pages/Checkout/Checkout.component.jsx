import React, {Component} from 'react';
import {selectCartItem} from '../../redux/cart/cart.reselect';
import {selectCartTotal} from '../../redux/cart/cart.reselect';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import axios from 'axios';
import { Redirect } from "react-router-dom";


import CheckoutItem from '../../Components/cart-page-item/cart-page-item.component';
import SripeCheckout1 from '../../Components/Stripe-Checkout/StripeCheckout.component';


class  Checkout extends Component {

  constructor(props){
    super(props);
    this.state= {
      firstName:'',
      lastName:'',
      email:'',
      address:'',
      state:'',
      country:'',
      zip:'',
      paymentType:'',
      products:this.props.cartItems,
      checkoutTotal:this.props.cartTotal
  
  }

}
handleChange = event => {
  const {name, value} = event.target;
  this.setState({[name]:value});
}
HandleSubmit =  event=> {
  let success= false;

  event.preventDefault();
  const order=this.state;
  axios.post('/api/orders', this.state)
  .then((response) => {
    console.log(response);
      
    })
  .catch((error)=> {
    console.log(error);
  });

 
  }
 


      render() {
        const {cartItems,cartTotal} = this.props;
        const {  firstName, lastName, email, address, state,zip,country} = this.state;
 
   return (
        <div className="container">
          <div className="py-5 text-center">
            <img className="d-block mx-auto mb-4" src="https://getbootstrap.com/assets/brand/bootstrap-solid.svg" alt="" width={72} height={72} />
            <h2>Checkout form</h2>
            <p className="lead"></p>
          </div>
          <div className="row">
            <div className="col-md-4 order-md-2 mb-4">
              <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-muted">Your cart</span>
                <span className="badge badge-secondary badge-pill">3</span>
              </h4>
              <ul className="list-group mb-3">
              {cartItems.map((cartItem)=><CheckoutItem key={cartItem.id} cartItems={cartItem}/>)}

               
               
               
                <li className="list-group-item d-flex justify-content-between">
                  <span>Total (PKR)</span>
      <strong>{cartTotal}</strong>
                </li>
              </ul>
             
            </div>
            <div className="col-md-8 order-md-1">
              <h4 className="mb-3">Billing address</h4>
              <form className="needs-validation" onSubmit={this.HandleSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="firstName">First name</label>
                    <input type="text" name='firstName' className="form-control" id="firstName" placeholder='Enter your first name' value={firstName} onChange={this.handleChange} required />
                    <div className="invalid-feedback">
                      Valid first name is required.
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="lastName">Last name</label>
                    <input type="text" name='lastName' className="form-control" id="lastName" value={lastName} onChange={this.handleChange} required />
                    <div className="invalid-feedback">
                      Valid last name is required.
                    </div>
                  </div>
                </div>
               
                <div className="mb-3">
                  <label htmlFor="email">Email </label>
                  <input type="email" name='email' className="form-control" id="email" placeholder="you@example.com" value={email} onChange={this.handleChange} required />
                  <div className="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="address">Address</label>
                  <input type="text" name='address' className="form-control" id="address" placeholder="1234 Main St" value={address} onChange={this.handleChange} required />
                  <div className="invalid-feedback">
                    Please enter your shipping address.
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-5 mb-3">
                    <label htmlFor="country">Country</label>
                    <select name='country' className="custom-select d-block w-100" id="country" value={country} onChange={this.handleChange} required>
                      <option value>Choose...</option>
                      <option>Pakistan</option>
                    </select>
                    <div className="invalid-feedback">
                      Please select a valid country.
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <label htmlFor="state">State</label>
                    <select name='state' className="custom-select d-block w-100" id="state" value={state} onChange={this.handleChange} required>
                      <option value>Choose...</option>
                      <option>Punjab</option>
                      <option>KPK</option>
                      <option>Balohistan</option>
                      <option>Sindh</option>


                    </select>
                    <div className="invalid-feedback">
                      Please provide a valid state.
                    </div>
                  </div>
                  <div className="col-md-3 mb-3">
                    <label htmlFor="zip">Zip</label>
                    <input name='zip' type="text" className="form-control" id="zip" placeholder value={zip} onChange={this.handleChange} required />
                    <div className="invalid-feedback">
                      Zip code required.
                    </div>
                  </div>
                </div>
                <hr className="mb-4" />
              
                <hr className="mb-4" />
                <h4 className="mb-3">Payment</h4>
                <div className="d-block my-3">
                  <div className="custom-control custom-radio">
                    <input name='paymentType' id="credit"  type="radio" className="custom-control-input" value='COD' onChange={this.handleChange} required />
                    <label className="custom-control-label" htmlFor="credit">Cash on Delievery</label>
                  </div>
                  <div className="mt-2">
                 </div>
                </div>
              
                <button className="btn btn-primary btn-lg btn-block" type="submit">Place Order</button>
              </form>
            </div>
          </div>
          <div className="mt-3">
          <SripeCheckout1 price={cartTotal}/>
          </div>
        </div>
        )

}
}
const mapStateToProps = createStructuredSelector ({
    cartItems:selectCartItem,
    cartTotal:selectCartTotal,

}

)



export default connect(mapStateToProps,null)(Checkout);

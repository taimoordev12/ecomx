import React from 'react'
import {Col,Container ,Row } from 'reactstrap';
import {connect} from 'react-redux';
import {ClearItems} from '../../redux/cart/cart-action';
import {RemoveItems} from '../../redux/cart/cart-action';
import {addItems} from '../../redux/cart/cart-action';


import '../cart-page-item/cart-page-item.style.css';
 
const CheckoutItem=({cartItems})=> {
    const {name,price,quantity} =cartItems;
    return (
        <li className="list-group-item d-flex justify-content-between lh-condensed">
        <div>
    <h6 className="my-0">{name}</h6>
    <small className="text-muted">x {quantity}</small>
        </div>
    <span className="text-muted">${price}</span>
      </li>
    )
}


export default  CheckoutItem;

import React from 'react'
import {Col,Container ,Row } from 'reactstrap';
import {connect} from 'react-redux';
import {ClearItems} from '../../redux/cart/cart-action';
import {RemoveItems} from '../../redux/cart/cart-action';
import {addItems} from '../../redux/cart/cart-action';


import '../cart-page-item/cart-page-item.style.css';
 
const CartPageItem=({cartItems,clearItem,removeItem,addItem})=> {
    const {imageUrl,name,price,quantity} =cartItems;
    return (
        <Container className="mt-3">
            <Row>
        <Col md="3"><img src={imageUrl} className="image-fluid w-50" alt="item"/></Col>
    <Col className="text-center my-auto" md="3"><h6>{name}</h6></Col>
    <Col className="text-center my-auto" md="3"><h6>Rs. {price}</h6></Col>
    <Col className="text-center my-auto" md="2"><h6><span className="mr-2 font-weight-bold pointer" onClick={()=>removeItem(cartItems)}>&#x276E;</span>{quantity}<span className="ml-2 font-weight-bold pointer" onClick={()=>addItem(cartItems)}>&#x276F;</span></h6></Col>
        <Col className="text-center my-auto pointer" md="1" onClick={()=>clearItem(cartItems)}><h6>&#10005;</h6></Col>
        </Row>
        </Container>
    )
}

const mapDispatchToProps =dispatch => ({
    clearItem:item=>dispatch(ClearItems(item)),
    removeItem:item=>dispatch(RemoveItems(item)),
    addItem:item=>dispatch(addItems(item)),

})
export default  connect(null,mapDispatchToProps)(CartPageItem);

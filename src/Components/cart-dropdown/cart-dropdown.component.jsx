import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import '../cart-dropdown/cart-dropdown.component.css';
import CartItem from '../cart-item/cart-item.component';
import {connect} from 'react-redux';
import {selectCartItem} from '../../redux/cart/cart.reselect';
import {withRouter} from 'react-router-dom';
import {toggleHidden} from '../../redux/cart/cart-action';
const CartDropdown=({cartItems,history,dispatch})=>(
<div className="cart-dropdown">
    <div className="cart-items">
        
        {cartItems.length ? cartItems.map(cartitem =><CartItem key={cartitem.id} item={cartitem}/>):
        <span className="my-auto">Empty cart is a sad cart.</span>}
    </div>
    <CustomButton onClick={()=>{history.push('/cart');dispatch(toggleHidden())}}>Go to Cart</CustomButton>
</div>
)
const mapStatetoProps =state=> ({
    cartItems:selectCartItem(state)
})

export default withRouter(connect(mapStatetoProps)(CartDropdown));
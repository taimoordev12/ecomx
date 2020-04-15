import React from 'react'
import {ReactComponent as ShoppingIcon} from '../cart-icon/bag.svg';
import '../cart-icon/cart-icon.component.css';
const CartIcon=()=> (
 <div className="cart-icon">
     <ShoppingIcon className="shopping-icon"  />
     <span className="item-count ">0</span>
 </div>
)
export default CartIcon;
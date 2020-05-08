import React from 'react'
import {ReactComponent as ShoppingIcon} from '../cart-icon/bag.svg';
import '../cart-icon/cart-icon.component.css';
import {selectCartItemsCount} from '../../redux/cart/cart.reselect';
import {connect} from 'react-redux';
import {toggleHidden} from '../../redux/cart/cart-action';
const CartIcon=({toggleHidden,cartquantity})=> (
 <div className="cart-icon" onClick={toggleHidden}>
     <ShoppingIcon className="shopping-icon"  />
<span className="item-count ">{cartquantity}</span>
 </div>
)
const mapStateToProps= state=>({
 cartquantity:selectCartItemsCount(state)
});

const mapDispatchToprops= dispatch=>({
    toggleHidden:()=>dispatch(toggleHidden())
  });
export default connect(mapStateToProps,mapDispatchToprops)(CartIcon);
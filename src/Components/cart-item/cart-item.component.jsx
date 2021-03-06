import React from 'react'
import '../cart-item/cart-item.style.css';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
    <div className="cart-item">
      <img src={imageUrl} alt="image" className="img" />
  
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} X ${price}
        </span>
      </div>
    </div>
  );
  
  export default CartItem;
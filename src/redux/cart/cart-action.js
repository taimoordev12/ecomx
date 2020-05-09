import {cartTypes} from './cart-types';
export const toggleHidden = ()=>({
   type: cartTypes.TOGGLE_CART,
})

export  const addItems= item=>({
   type: cartTypes.ADD_ITEMS,
   payload:item,
})

export  const ClearItems= item=>({
   type: cartTypes.CLEAR_ITEMS_FROM_CART,
   payload:item,
})
export  const RemoveItems= item=>({
   type: cartTypes.REMOVE_ITEMS,
   payload:item,
})


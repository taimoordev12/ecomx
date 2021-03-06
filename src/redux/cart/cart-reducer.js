import {cartTypes} from '../cart/cart-types';
import {addItemToCart} from '../cart/cart.util';
import {RemoveItem} from '../cart/cart.util';

const INTIAL_STATE = {
    hidden: true,
    cartItems: []

}

const cartReducer=(state=INTIAL_STATE,action)=> {
    switch(action.type){
        case cartTypes.TOGGLE_CART:
            return {
                ...state,
                hidden:!state.hidden
            }
            case cartTypes.ADD_ITEMS:
                return {
                  ...state,
                  cartItems: addItemToCart(state.cartItems, action.payload),
                }
                case cartTypes.CLEAR_ITEMS_FROM_CART:
                    return {
                        ...state,
                        cartItems:state.cartItems.filter((item)=>item.id !== action.payload.id)
                    }
                    case cartTypes.REMOVE_ITEMS:
                        return {
                            ...state,
                            cartItems:RemoveItem(state.cartItems, action.payload)
                        }
            default :
            return state;
   
    }
   
   }
   
   export default cartReducer;
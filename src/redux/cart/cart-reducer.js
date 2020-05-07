import {cartTypes} from '../cart/cart-types';
const INTIAL_STATE = {
    toggleCART: false
}

const cartReducer=(state=INTIAL_STATE,action)=> {
    switch(action.type){
        case cartTypes.TOGGLE_CART:
            return {
                ...state,
                toggleCART:!state.hidden
            }
            default :
            return state;
   
    }
   
   }
   
   export default cartReducer;
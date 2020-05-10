import SHOP_DATA  from './2.2 shop.data.js';

const INTIAL_STATE ={
    shopData: SHOP_DATA
}

const shopReducer =(state=INTIAL_STATE,action)=>{
switch(action.type){
    default:
        return state;
}
}
export default shopReducer;
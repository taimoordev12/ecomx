const INTIAL_STATE ={
    currentuser:null
}

const useReducer=(state=INTIAL_STATE,action)=> {
 switch(action.type){
     case 'SET_CURRENT_USER':
         return {
             ...state,
             currentuser:action.payload
         }
         default :
         return state;

 }

}

export default useReducer;
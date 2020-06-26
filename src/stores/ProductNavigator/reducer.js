import {TOGGLE_PRODUCT_MENU, SET_PRODUCT_CATEGORY} from "./actions";

const initialState = {turnOnOff:true, category:{category:"copaz"}};


export default function productNavigator(state=initialState, action){
  
  
  //console.log("Reducers------")
  //console.log(action.category)
  //console.log(state)
  
  
  switch(action.type){
    
    case TOGGLE_PRODUCT_MENU:
      return {
        ...state,
        turnOnOff:!state.turnOnOff
      }

    case SET_PRODUCT_CATEGORY:
      /*
      console.log("Into Reducer");
      console.log(state.category);
      */
      return{
        ...state,
        category:action.category
      }

    default: return state;
  }

}
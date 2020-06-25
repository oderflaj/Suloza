import {TOGGLE_PRODUCT_MENU} from "./actions";

const initialState = {turnOnOff:false};


export default function productNavigator(state=initialState, action){
  /*
  console.log("Reducers------")
  console.log(state)
  */
  switch(action.type){
    case TOGGLE_PRODUCT_MENU:
      return {
        ...state,
        turnOnOff:!state.turnOnOff
      }
    default: return state;
  }

}
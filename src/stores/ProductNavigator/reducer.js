import {TOGGLE_PRODUCT_MENU, SET_PRODUCT_CATEGORY} from "./actions";
import {imageProduct} from "../../services/Images";

const initialState = {turnOnOff:false, category:{
        category:"cubiertos",
        name:"Cubiertos",
        products:[
            {
                id:14,
                name:"Cubierto 1",
                image:imageProduct.cutlery1,
                imageToTable:imageProduct.cutlery1,
                price:"9"
            }
        ]
    }};


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
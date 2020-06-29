import {TOGGLE_PRODUCT_MENU, SET_PRODUCT_CATEGORY, TOGGLE_RESET_CAROUSEL} from "./actions";
import {imageProduct} from "../../services/Images";

const initialState = {turnOnOff:false, resetCarousel:false, category:{
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
      
      console.log("Reducers------Actions")
      console.log(action.category)
      console.log("Reducers------State")
      console.log(state.category)
      console.log(`Comparacion state state.category.category:${state.category.category}===${action.category.category}`);
      console.log(state.category.category===action.category.category)
      */
      return{
        ...state,
        category:action.category,
        resetCarousel:!(state.category.category===action.category.category)
      }
    
    case TOGGLE_RESET_CAROUSEL:
        return {
          ...state,
          resetCarousel:!state.resetCarousel
        }
    default: return state;
  }

}
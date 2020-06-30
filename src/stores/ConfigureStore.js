import { combineReducers } from 'redux';
import reducerProductNavigator from "./ProductNavigator/reducer";
import reducerShoppingCart from "./ShoppingCart/reducer";

const combine =  combineReducers({
  reducerProductNavigator,
  reducerShoppingCart
});

export default combine;

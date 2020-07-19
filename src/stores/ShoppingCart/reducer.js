import * as Actions from "./actions";

const initialState = { guesses: "0", cart: [], turnProductTable: false };

export default function shoppingCart(state = initialState, action) {
  switch (action.type) {
    case Actions.SET_GUESSES:
      return {
        ...state,
        guesses: action.guesses,
      };
    case Actions.ADD_PRODUCT:
      //console.log("Reducer")
      //console.log(action)
      state.cart.push(action.product);
      return {
        ...state,
      };
    case Actions.REMOVE_PRODUCT:
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== action.idProduct),
      };

    case Actions.TURN_PRODUCT_TABLE:
      return {
        ...state,
        turnProductTable: action.turnProductTable,
      };
    default:
      return state;
  }
}

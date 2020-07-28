import * as Actions from "./actions";

const initialState = {
  amount: 0,
  quantity: 0,
  guesses: "0",
  cart: [],
  turnProductTable: false,
};

//Carculo del monto del carrito de compra
const calcAmount = (currentCart) => {
  if (currentCart.length == 0) {
    return 0;
  }
  let amountReduced = currentCart.reduce((a, b) => ({
    price: Number(a.price) + Number(b.price),
  }));
  return amountReduced.price;
};

export default function shoppingCart(state = initialState, action) {
  switch (action.type) {
    case Actions.SET_GUESSES:
      return {
        ...state,
        guesses: action.guesses,
        quantity: state.cart.length * action.guesses,
        amount: calcAmount(state.cart) * action.guesses,
      };
    case Actions.ADD_PRODUCT:
      state.cart.push(action.product);
      return {
        ...state,
        quantity: state.cart.length * state.guesses,
        amount: calcAmount(state.cart) * state.guesses,
      };
    case Actions.REMOVE_PRODUCT:
      let cartMinus = state.cart.filter(
        (product) => product.id !== action.idProduct
      );
      return {
        ...state,
        cart: cartMinus,
        quantity: cartMinus.length * state.guesses,
        amount: calcAmount(cartMinus) * state.guesses,
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

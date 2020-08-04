import * as Actions from "./actions";

const initialState = {
  amount: 0,
  quantity: 0,
  guesses: "0",
  cart: [],
  turnProductTable: false,
  turnOnOffShoppingCart: false,
};

//Carculo del monto del carrito de compra
const calcAmount = (currentCart) => {
  console.log(currentCart);
  if (typeof currentCart == "undefined" || currentCart.length == 0) {
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
      state.cart = state.cart.map((product) => {
        product.units = action.guesses;
        return product;
      });
      return {
        ...state,
        guesses: action.guesses,
        quantity: state.cart.length * action.guesses,
        amount: calcAmount(state.cart) * action.guesses,
      };
    case Actions.ADD_PRODUCT:
      action.product["units"] = state.cart.length * state.guesses;
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

    case Actions.TRUNONOFF_SHOPPINGCART:
      return {
        ...state,
        turnOnOffShoppingCart: !state.turnOnOffShoppingCart,
      };

    default:
      return state;
  }
}

export const SET_GUESSES = "SET_GUESSES";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const TURN_PRODUCT_TABLE = "TOGGLE_PRODUCT_TABLE";
export const TRUNONOFF_SHOPPINGCART = "TRUNONOFF_SHOPPINGCART";
export const CLEAR_CART = "CLEAR_CART";
export const SET_STATUS_CART = "SET_STATUS_CART";

export const setGuess = (guesses) => {
  //console.log(guesses)
  return {
    type: SET_GUESSES,
    guesses,
  };
};

export const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    product,
  };
};

export const removeProduct = (idProduct) => {
  return {
    type: REMOVE_PRODUCT,
    idProduct,
  };
};

//TURN OFF/ON the flag of the products on the table
export const turnProductTableReset = (turnProductTable) => {
  return { type: TURN_PRODUCT_TABLE, turnProductTable };
};

//TURN OFF/ON the flag of the SHOPPING CART FORM
export const turnOnOffShoppingCart = () => {
  return { type: TRUNONOFF_SHOPPINGCART };
};

export const clearCart = () => {
  return {
    type: CLEAR_CART,
  };
};

export const setStatusCart = (statusShoppingCart) => {
  return {
    type: SET_STATUS_CART,
    statusShoppingCart,
  };
};

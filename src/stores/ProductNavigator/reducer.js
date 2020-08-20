import {
  TOGGLE_PRODUCT_MENU,
  SET_PRODUCT_CATEGORY,
  TOGGLE_RESET_CAROUSEL,
  SET_PRODUCT_CATALOG,
} from "./actions";

const initialState = {
  turnOnOff: false,
  resetCarousel: false,
  category: {},
  pendingCarousel: false,
  productCatalog: {},
};

//console.log(initialState);

export default function productNavigator(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_PRODUCT_MENU:
      return {
        ...state,
        turnOnOff: !state.turnOnOff,
      };
    case SET_PRODUCT_CATEGORY:
      return {
        ...state,
        pendingCarousel: true,
        category: action.category,
        resetCarousel: !(state.category.category === action.category.category),
      };

    case TOGGLE_RESET_CAROUSEL:
      return {
        ...state,
        resetCarousel: !state.resetCarousel,
      };
    case SET_PRODUCT_CATALOG:
      return {
        ...state,
        productCatalog: action.productCatalog,
      };

    default:
      return state;
  }
}

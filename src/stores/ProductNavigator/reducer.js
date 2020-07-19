import {
  TOGGLE_PRODUCT_MENU,
  SET_PRODUCT_CATEGORY,
  TOGGLE_RESET_CAROUSEL,
} from "./actions";
import { imageProduct, imageProductToTable } from "../../services/Images";

const initialState = {
  turnOnOff: false,
  resetCarousel: false,
  category: {
    category: "platos",
    name: "Platos",
    products: [
      {
        id: 1,
        name: "Plato 1",
        image: imageProduct.dish1,
        imageToTable: imageProductToTable.dish1,
        ImageToTableWidth: 120,
        ImageToTableHeight: 50,
        price: "10",
      },
      {
        id: 2,
        name: "Plato 2",
        image: imageProduct.dish2,
        imageToTable: imageProductToTable.dish2,
        ImageToTableWidth: 100,
        ImageToTableHeight: 50,
        price: "20",
      },
      {
        id: 3,
        name: "Plato 3",
        image: imageProduct.dish3,
        imageToTable: imageProductToTable.dish3,
        ImageToTableWidth: 100,
        ImageToTableHeight: 100,
        price: "30",
      },
      {
        id: 4,
        name: "Plato 4",
        image: imageProduct.dish5,
        imageToTable: imageProductToTable.dish5,
        ImageToTableWidth: 100,
        ImageToTableHeight: 50,
        price: "35",
      },
      {
        id: 5,
        name: "Plato 5",
        image: imageProduct.dish6,
        imageToTable: imageProductToTable.dish6,
        ImageToTableWidth: 100,
        ImageToTableHeight: 50,
        price: "36",
      },
      {
        id: 6,
        name: "Plato 6",
        image: imageProduct.dish7,
        imageToTable: imageProductToTable.dish7,
        ImageToTableWidth: 120,
        ImageToTableHeight: 120,
        price: "40",
      },
    ],
  },
};

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
        category: action.category,
        resetCarousel: !(state.category.category === action.category.category),
      };

    case TOGGLE_RESET_CAROUSEL:
      return {
        ...state,
        resetCarousel: !state.resetCarousel,
      };
    default:
      return state;
  }
}

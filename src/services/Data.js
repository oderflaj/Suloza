import { imageProduct, imageTable, imageProductToTable } from "./Images";
import { AsyncStorage } from "react-native";
import * as Facebook from "expo-facebook";
import { setUserInformation } from "../stores/ShoppingCart/actions";
import { store } from "../stores/GlobalContainer/Global";
import axios from "axios";

export const SULOZA = {
  GET_CATALOG: "https://sulozaapi.azurewebsites.net/api/Products/catalog",
  POST_REGISTER: "https://sulozaapi.azurewebsites.net/api/Account/Register",
  POST_LOGIN: "https://sulozaapi.azurewebsites.net/api/Account/Login",
  POST_SHOPPINGCART: "https://sulozaapi.azurewebsites.net/api/Email/Send",
  POST_DEACTIVATE_USER:
    "https://sulozaapi.azurewebsites.net/api/Account/Deactivate",
};

export const OPENPAY = {
  POST_PAYMENT_OPENPAY:
    "https://sulozaapi.azurewebsites.net/api/Charge/Openpay",
  merchantId: "mwyl4lr7mwshaa8eutfn",
  privateKey: "sk_a6fd18f39624425abb69807fd9096dd1",
  method: "card",
  production: false,
};

export const nameItemMenu = {
  cup1: "Copas",
  cupCoffee1: "Tazas",
  cutlery1: "Cubiertos",
  dish1: "Platos",
  glass1: "Vasos",
};

export const productCatalog = [
  {
    category: "platos",
    name: "Platos",
    products: [
      {
        id: 1,
        name: "Plato 1",
        image: imageProduct.dish1,
        imageToTable: imageProductToTable.dish1,
        ImageToTableWidth: 120,
        ImageToTableHeight: 60,
        price: "10",
      },
      {
        id: 2,
        name: "Plato 2",
        image: imageProduct.dish2,
        imageToTable: imageProductToTable.dish2,
        ImageToTableWidth: 120,
        ImageToTableHeight: 50,
        price: "20",
      },
      {
        id: 3,
        name: "Plato 3",
        image: imageProduct.dish3,
        imageToTable: imageProductToTable.dish3,
        ImageToTableWidth: 120,
        ImageToTableHeight: 120,
        price: "30",
      },
      {
        id: 4,
        name: "Plato 4",
        image: imageProduct.dish5,
        imageToTable: imageProductToTable.dish5,
        ImageToTableWidth: 120,
        ImageToTableHeight: 60,
        price: "35",
      },
      {
        id: 5,
        name: "Plato 5",
        image: imageProduct.dish6,
        imageToTable: imageProductToTable.dish6,
        ImageToTableWidth: 120,
        ImageToTableHeight: 60,
        price: "36",
      },
      {
        id: 6,
        name: "Plato 6",
        image: imageProduct.dish7,
        imageToTable: imageProductToTable.dish7,
        ImageToTableWidth: 120,
        ImageToTableHeight: 120,
        price: "4",
      },
    ],
  },
  {
    category: "copas",
    name: "Copas",
    products: [
      {
        id: 7,
        name: "Copa 1",
        image: imageProduct.cup1,
        imageToTable: imageProductToTable.cup1,
        ImageToTableWidth: 90,
        ImageToTableHeight: 90,
        price: "11",
      },
      {
        id: 20,
        name: "Copa 2",
        image: imageProduct.cup2,
        imageToTable: imageProductToTable.cup2,
        ImageToTableWidth: 90,
        ImageToTableHeight: 90,
        price: "22",
      },
      {
        id: 8,
        name: "Copa 3",
        image: imageProduct.cup3,
        imageToTable: imageProductToTable.cup3,
        ImageToTableWidth: 90,
        ImageToTableHeight: 90,
        price: "33",
      },
      {
        id: 9,
        name: "Copa 4",
        image: imageProduct.cup4,
        imageToTable: imageProductToTable.cup4,
        ImageToTableWidth: 90,
        ImageToTableHeight: 90,
        price: "44",
      },
      {
        id: 10,
        name: "Copa 5",
        image: imageProduct.cup5,
        imageToTable: imageProductToTable.cup5,
        ImageToTableWidth: 90,
        ImageToTableHeight: 90,
        price: "45",
      },
    ],
  },
  {
    category: "tazas",
    name: "Tazas",
    products: [
      {
        id: 11,
        name: "Taza 1",
        image: imageProduct.cupCoffee1,
        imageToTable: imageProductToTable.cupCoffee1,
        ImageToTableWidth: 70,
        ImageToTableHeight: 70,
        price: "12",
      },
      {
        id: 12,
        name: "Taza 2",
        image: imageProduct.cupCoffee2,
        imageToTable: imageProductToTable.cupCoffee2,
        ImageToTableWidth: 70,
        ImageToTableHeight: 70,
        price: "23",
      },
    ],
  },
  {
    category: "cubiertos",
    name: "Cubiertos",
    products: [
      {
        id: 13,
        name: "Cubierto 1",
        image: imageProduct.cutlery1,
        imageToTable: imageProductToTable.cutlery1,
        ImageToTableWidth: 50,
        ImageToTableHeight: 50,
        price: "9",
      },
    ],
  },
  {
    category: "vasos",
    name: "Vasos",
    products: [
      {
        id: 14,
        name: "Vaso 1",
        image: imageProduct.glass1,
        imageToTable: imageProductToTable.glass1,
        ImageToTableWidth: 80,
        ImageToTableHeight: 80,
        price: "8",
      },
      {
        id: 15,
        name: "Vaso 2",
        image: imageProduct.glass2,
        imageToTable: imageProductToTable.glass2,
        ImageToTableWidth: 80,
        ImageToTableHeight: 80,
        price: "9",
      },
      {
        id: 16,
        name: "Vaso 3",
        image: imageProduct.glass3,
        imageToTable: imageProductToTable.glass3,
        ImageToTableWidth: 80,
        ImageToTableHeight: 80,
        price: "10",
      },
      {
        id: 17,
        name: "Vaso 4",
        image: imageProduct.glass4,
        imageToTable: imageProductToTable.glass4,
        ImageToTableWidth: 80,
        ImageToTableHeight: 80,
        price: "11",
      },
      {
        id: 18,
        name: "Vaso 5",
        image: imageProduct.glass5,
        imageToTable: imageProductToTable.glass5,
        ImageToTableWidth: 90,
        ImageToTableHeight: 90,
        price: "12",
      },
      {
        id: 19,
        name: "Vaso 6",
        image: imageProduct.glass6,
        imageToTable: imageProductToTable.glass6,
        ImageToTableWidth: 80,
        ImageToTableHeight: 80,
        price: "1",
      },
    ],
  },
];

export const tableCatalog = [
  {
    id: 1,
    name: "table1",
    title: "Mesa Formal",
    image: imageTable.table1,
  },
  {
    id: 2,
    name: "table2",
    title: "Mesa Casual",
    image: imageTable.table2,
  },
  {
    id: 3,
    name: "table3",
    title: "Mesa Bohemia",
    image: imageTable.table3,
  },

  {
    id: 4,
    name: "table4",
    title: "Mesa Moderna",
    image: imageTable.table4,
  },
  {
    id: 5,
    name: "table5",
    title: "Mesa Bohemia",
    image: imageTable.table5,
  },
  {
    id: 6,
    name: "table6",
    title: "Mesa Bohemia",
    image: imageTable.table6,
  },
  {
    id: 7,
    name: "table7",
    title: "Mesa Bohemia",
    image: imageTable.table7,
  },
  {
    id: 8,
    name: "table8",
    title: "Mesa Bohemia",
    image: imageTable.table8,
  },
];

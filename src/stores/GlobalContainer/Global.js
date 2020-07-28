import { createStore } from "redux";
import combine from "../ConfigureStore";

export const store = createStore(combine);

export default () => {
  console.log("Viendo que tiene el combine STORE....");
  console.log(store);
};

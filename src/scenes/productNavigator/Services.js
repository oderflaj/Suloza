import axios from "axios";
import { SULOZA } from "../../services/Data";
import { store } from "../../stores/GlobalContainer/Global";
import { AsyncStorage } from "react-native";
import { unsetUserInformation } from "../../stores/ShoppingCart/actions";

export const DeactivateUser = async () => {
  let userInformation = store.getState().reducerShoppingCart.userInformation;
  let user = {
    id: userInformation.id,
    email: userInformation.email,
  };
  console.log("Antes de mandar.");

  return await axios
    .post(SULOZA.POST_DEACTIVATE_USER, user)
    .then((response) => {
      console.log("DESACTIVANDO AL USUARIO.................");
      console.log(response.data);
      let result = response.data;

      if (result.statusResponse == "Deactivated") {
        AsyncStorage.removeItem("userInformation");
        store.dispatch(unsetUserInformation());
      }
      return result;
    });
};

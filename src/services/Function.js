import { AsyncStorage } from "react-native";
import Global from "../stores/GlobalContainer/Global";

export const LocalStorage = {
  InitializeSuloza: async () => {
    let userSession = (await AsyncStorage.getItem("userSession")) | {};
    console.log("userSession");
    console.log(userSession === 0 ? false : true);
    Global();
  },
  SaveCart: () => {
    console.log("Se escribe aqui...");
  },
};

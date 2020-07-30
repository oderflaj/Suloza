import { AsyncStorage } from "react-native";
import { store } from "../stores/GlobalContainer/Global";

/**
 * Se suscribe la función SaveSession al store para que se ejecute cada que el store
 * es modificado.
 */
store.subscribe(SaveSession);

export function SaveSession() {
  console.log("SaveSession-----------------------\n--------------------------");
  console.log(store.getState());
  //AsyncStorage.setItem("userSession", JSON.stringify(store.getState()));
}

export const LocalStorage = {
  InitializeSuloza: async () => {
    let userSession = await AsyncStorage.getItem("userSession");
    console.log("userSession");
    console.log(userSession === null ? "false" : "true");
    if (userSession != null) {
      //store = JSON.parse(userSession);
      //console.log(store.getState());
      console.log("Escribe session-----------------------");
      console.log(JSON.parse(userSession));
      //store.state = JSON.parse(userSession);
      //console.log(store.getState());
    }
  },
};

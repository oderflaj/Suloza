import { AsyncStorage } from "react-native";
import * as Facebook from "expo-facebook";
import { setUserInformation } from "../../stores/ShoppingCart/actions";
import { store } from "../../stores/GlobalContainer/Global";
import axios from "axios";
import { SULOZA } from "../../services/Data";

export async function FacebookLogIn() {
  const facebookId = "634586767223460";
  try {
    await Facebook.initializeAsync(facebookId);

    const {
      type,
      token,
      expires,
      permissions,
      declinedPermissions,
    } = await Facebook.logInWithReadPermissionsAsync(facebookId, {
      permissions: ["public_profile"],
    });

    if (type === "success") {
      // Get the user's name using Facebook's Graph API
      const response = await fetch(
        `https://graph.facebook.com/me?access_token=${token}`
      );
      //alert("Logged in!", `Hi ${(await response.json()).name}!`);
      let result = await response.json();

      console.log(result);

      result["token"] = token;

      if (typeof result.email == "undefined") {
        result["email"] = "emailxxx@dummy.com";
      }

      if (typeof result.phoneNumber == "undefined") {
        result["phoneNumber"] = "00000000";
      }

      let userInfo = {
        name: result.name,
        email: result.email,
        phoneNumber: result.phoneNumber,
        externalToken: result.token,
        password: "abcd1234",
        image: "",
        isExternal: true,
      };

      await AsyncStorage.setItem("userInformation", JSON.stringify(userInfo));
      await store.dispatch(setUserInformation(userInfo));

      let resultRegister = await Register(userInfo);

      console.log("Se registro el usuario en el Sistema backend");
      console.log(resultRegister);

      return true;
    } else {
      // type === 'cancel'
      return false;
    }
  } catch ({ message }) {
    alert(`Facebook Login Error: ${message}`);
    return false;
  }
}

export const Register = async (userInformation) => {
  try {
    return await axios
      .post(SULOZA.POST_REGISTER, userInformation)
      .then(async (response) => {
        console.log("Llego a AXIOS------------------");
        console.log(response);
        if (response.data.statusResponse == "Error") {
          throw response.data.message;
        }
        let result = await response.data;

        if (
          result.statusResponse == "Ok" ||
          result.statusResponse == "Reactivated"
        ) {
          userInformation["id"] = result.data[0].id;
          await AsyncStorage.setItem(
            "userInformation",
            JSON.stringify(userInformation)
          );
          await store.dispatch(setUserInformation(userInformation));
        }

        return result;
      });
  } catch (error) {
    //alert(`Error al registrar su información: ${error}`);
    return {
      statusResponse: "error",
      message: `Error al registrar: ${error}`,
      result: false,
    };
  }
};

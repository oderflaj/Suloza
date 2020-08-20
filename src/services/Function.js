import { AsyncStorage } from "react-native";
import { store } from "../stores/GlobalContainer/Global";
import axios from "axios";
import { SULOZA, productCatalog } from "./Data";
import {
  setProductCategory,
  setProductCatalog,
} from "../stores/ProductNavigator/actions";

/**
 * Se suscribe la función SaveSession al store para que se ejecute cada que el store
 * es modificado.
 */
store.subscribe(SaveSession);

export function SaveSession() {
  //console.log("SaveSession-----------------------\n--------------------------");
  //console.log(store.getState());
  //AsyncStorage.setItem("userSession", JSON.stringify(store.getState()));
}

export const LocalStorage = {
  InitializeSuloza: async () => {
    await axios
      .get(SULOZA.GET_CATALOG)
      .then(function (response) {
        let productsNew = response.data.data.map((catalogApi) => {
          let productsCatalogAux = productCatalog.filter(
            (product) => product.category == catalogApi.category
          );

          catalogApi.products = catalogApi.products.map((product) => {
            let productOneAux = productsCatalogAux[0].products.filter(
              (aux) => aux.id == product.id
            );

            let productNew = product;
            if (productOneAux.length == 0) {
              return { id: 0 };
            }

            productNew["image"] = productOneAux[0].image;
            productNew["imageToTable"] = productOneAux[0].imageToTable;

            return productNew;
          });
          return catalogApi;
        });

        store.dispatch(setProductCatalog(productsNew));
        //set Initial Category
        let initialCategory = productsNew.filter(
          (category) => category.category === "platos"
        );

        store.dispatch(setProductCategory(initialCategory[0]));

        return false;
      })
      .catch(function (error) {
        //store.dispatch(fetchProductsError(error));
        console.log(error);
      });

    return true;
  },
};

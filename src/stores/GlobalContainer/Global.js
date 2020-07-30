import { AsyncStorage } from "react-native";
import { createStore, applyMiddleware } from "redux";
import combine from "../ConfigureStore";
import { persistStore, persistReducer } from "redux-persist";

//-------------MIDDLEWARE CONFIGURATION------------------------------
/**
 * Se crea un logger customizado donde puedo poner que se hara con el store cada vez que se modifica
 */
//const logger = (store) => (next) => (action) => {
//  console.log("Entra a guarar estado en memora fija...");
//  let result = next(action);
//
//  AsyncStorage.setItem("userSession", JSON.stringify(store.getState()));
//  return result;
//};
//
///**
// * Se maneja un Log y una manera de regresar al store anterior en caso de error
// */
//const crashReporter = (store) => (next) => (action) => {
//  try {
//    return next(action);
//  } catch (err) {
//    console.error("Caught an exception!", err);
//    Raven.captureException(err, {
//      extra: {
//        action,
//        state: store.getState(),
//      },
//    });
//    throw err;
//  }
//};

//
// *Se implementa el middleware que usa el Logger y CrashReport creados anteriormente para
// *manejar el store en cada cambio y los errores.
// */
///*
//export const store = createStore(
//  combine,
//  applyMiddleware(logger, crashReporter)
//);

//-------------MIDDLEWARE CONFIGURATION------------------------------
const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, combine);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);

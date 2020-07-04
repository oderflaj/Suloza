export const SET_GUESSES = "SET_GUESSES";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";

export const setGuess = guesses => {
    //console.log(guesses)
    return{
        type:SET_GUESSES,
        guesses
    }
}

export const addProduct = product =>{
    //console.log("Action ADD_PRODUCT")
    //console.log(product)
    return{
        type:ADD_PRODUCT,
        product
    }
}

export const removeProduct = idProduct =>{
    return{
        type:REMOVE_PRODUCT,
        idProduct
    }
}
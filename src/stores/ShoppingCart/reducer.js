import {SET_GUESSES} from "./actions"

const initialState = {guesses:0}

export default function shoppingCart(state=initialState,action){
    switch(action.type){
        case SET_GUESSES:
            return{
                ...state,
                guesses:action.guesses
            }
        default: return state;
    }
}
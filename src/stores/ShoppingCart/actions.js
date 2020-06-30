export const SET_GUESSES = "SET_GUESSES";

export const setGuess = (guesses)=>{
    return{
        type:SET_GUESSES,
        guesses
    }
}
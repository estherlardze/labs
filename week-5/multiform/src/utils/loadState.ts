import { initialState } from "../context/constants";

export const loadStateFromStorage = () => {
    const storedState = localStorage.getItem("form-state");
 
    const initialStateWithStorage = storedState && storedState !== "undefined" 
        ? JSON.parse(storedState)
        : initialState;
 
    return initialStateWithStorage;
};
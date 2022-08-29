import { calculation } from "./reducers";
import { combineReducers, createStore } from "redux";

export const rootReducers = () => {
    const store = createStore(combineReducers(
        {
            calculation: calculation
        }
    ))
    return store
}
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { userReducer } from './reducers/userReducer';


const appReducer = combineReducers(
    {
        user: userReducer,
    }
);


const rootReducer = (state, action) => {
    if (action.type === 'LOGOUT_SUCCESS') {
        return appReducer(undefined, action)
    }

    return appReducer(state, action)
}

export const configureStore = () => {

    const store = createStore(
        rootReducer, applyMiddleware(thunk)
    );

    return store;
}




import * as ActionTypes from '../actionTypes';

export const userReducer = (state = { isLoading: false, user: null, errMess: null, }, action) => {

    switch (action.type) {
        case ActionTypes.AUTH_LOADING:
            return {
                ...state,
                isLoading: true,
                errMess: false,
                user: null
            };
        case ActionTypes.AUTH_FAILED:
            return {
                ...state,
                isLoading: false,
                errMess: action.payload,
                user: null
            };
        case ActionTypes.AUTH_SUCCESS:
            return {
                ...state,
                isLoading: false,
                errMess: null,
                user: action.payload,
            };
        default:
            return state;

    }
}
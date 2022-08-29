import * as actionTypes from '../actionTypes';

export const calculation = (state = 0, action) => {

    switch (action.type) {
        case actionTypes.ADDITION:
            return state + 1;
        case actionTypes.SUBTRACTION:
            return state - 1;

        default:
            return state;
    };

}
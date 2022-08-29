import * as actionTypes from '../actionTypes';

export const addtion = (data) => {
    console.log(333)
    return {
        type: actionTypes.ADDITION,
        payload: data
    }
}
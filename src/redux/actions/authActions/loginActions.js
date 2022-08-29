import * as ActionTypes from '../../actionTypes';

export const authSuccess = (data) => ({
    type: ActionTypes.AUTH_SUCCESS,
    payload: data
});

export const authFailed = (err) => ({
    type: ActionTypes.AUTH_FAILED,
    payload: err
})

export const authLoading = (err) => ({
    type: ActionTypes.AUTH_LOADING,

})

export const Login = (data) => {


    return (dispatch) => {

        dispatch(authSuccess(data));

    }
}
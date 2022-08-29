// import { baseUrl } from '../baseUrl';
const baseUrl = "sds";

export default postApi = (data, url, token, successCallback, errorCallback) => {

    return fetch(
        baseUrl + url,
        {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
                "Authorization": token ? "Bearer " + token : null,
                // "Accept": "application/json"
            },
            credentials: "same-origin"
        }
    )
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText); //error if user not found etc
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);  //error if we face problem to connect server
                throw errmess;
            })
        .then((res) => res.json())
        .then(data => {
            successCallback && successCallback(data);
        })
        .catch(error => {
            errorCallback && errorCallback(error);
        });
}
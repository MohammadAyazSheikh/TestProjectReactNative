
// import { baseUrl } from '../baseUrl';
const baseUrl = "sd";

export default getApi = (url, token, successCallback, errorCallback) => {

    return fetch(baseUrl + url,
        {
            headers: {
                "Authorization": token ? "Bearer " + token : null,
                "Content-Type": "application/json"
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
            successCallback(data);
        })
        .catch(error => {
            errorCallback(error);
        });
}
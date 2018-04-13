import { url } from "../shared/constants";
import { headers } from '../shared/constants';

const myFetchGet = (url) => {

    let requestOptions = {
        method: 'GET',
        headers: {
            ...headers,
            "SessionId": localStorage.getItem("SessionId")
        }
    }

    return fetch(url, requestOptions)
        .then(response => response.json())
        .catch(error => alert("Sorry, failed to load data"))
}

const myFetchPost = (endpoint, body) => {
    const requestOptions = {
        method: 'POST',
        headers: {
            ...headers,
            "SessionId": localStorage.getItem("SessionId")
        },
        body: JSON.stringify(body),
    }

    return fetch(url.baseUrl + endpoint, requestOptions);
}

const myFetchPUT = (changeProfileData) => {
    const api = url.baseUrl + url.editProfile;
    const requestOptions = {
        method: 'PUT',
        headers: {
            ...headers,
            "SessionId": localStorage.getItem("SessionId")
        },
        body: JSON.stringify(changeProfileData)
    }
    return fetch(api, requestOptions)
        .then(response => {
            console.log(response);
            
            response})
}

export { myFetchGet, myFetchPost, myFetchPUT };

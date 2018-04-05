import { url } from "../shared/constants";
import { headers } from '../shared/constants';
import { getHeaders } from "../shared/utils";

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

const myFetchPUT = (text, image, name, email, aboutShort) => {
    const api = url.baseUrl + url.editProfile;
    const requestOptions = {
        method: 'PUT',
        headers: {
            ...headers,
            "SessionId": localStorage.getItem("SessionId")
        },
        body: JSON.stringify({
            about: text,
            avatarUrl: image,
            name: name,
            email: email,
            aboutShort: aboutShort
        })
    }
    return fetch(api, requestOptions)
        .then(response => response)
}

export { myFetchGet, myFetchPost, myFetchPUT };

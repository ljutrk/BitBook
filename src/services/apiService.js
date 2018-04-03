import { url } from "../shared/constants";
import { headers } from '../shared/constants';

const myFetchGet = (url) => {
    const requestOptions = {
        method: 'GET',
        headers
    }

    return fetch(url, requestOptions)
        .then(response => response.json())
}

const myFetchPost = (endpoint, body) => {
    const requestOptions = {
        method: 'POST',
        headers,
        body: JSON.stringify(body),
    }

    return fetch(url.baseUrl + endpoint, requestOptions);
}

const myFetchPUT = (text, image, name, email, aboutShort) => {
    const api = url.baseUrl + url.editProfile;
    const requestOptions = {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
            "Key": "bitbook",
            "SessionId": "7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94"
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
        .then(response => { if (response.status === 204) console.log("hooray") });
}

export { myFetchGet, myFetchPost, myFetchPUT };

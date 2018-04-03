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

export { myFetchGet, myFetchPost };
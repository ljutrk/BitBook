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

const createNewTextPost = (text) => {

    const requestOptions = {
        method: 'POST',
        headers,
        body: JSON.stringify({
            text: text
        })
    }

    return fetch(url.baseUrl + url.textPosts, requestOptions)
        .then(response => response.json())
}

const createNewImagePost = (imageURL) => {

    const requestOptions = {
        method: 'POST',
        headers,
        body: JSON.stringify({
            imageUrl: imageURL
        })
    }

    return fetch(url.baseUrl + url.imagePosts, requestOptions)
        .then(response => response.json())
}

const createNewVideoPost = (videoURL) => {

    let link = videoURL;

    if (link.includes("watch?v=")) {
        link = link.replace("watch?v=", "embed/");
    }

    if (link.includes("youtu.be/")) {
        link = link.replace("youtu.be/", "youtube.com/embed/");
    }

    const requestOptions = {
        method: 'POST',
        headers,
        body: JSON.stringify({
            videoUrl: link
        })
    }

    return fetch(url.baseUrl + url.videoPosts, requestOptions)
        .then(response => response.json())
};


const postNewComment = (comment, id) => {
    const api = url.baseUrl + url.newComment;

    const requestOptions = {
        method: 'POST',
        headers,
        body: JSON.stringify({
            body: comment,
            postId: id
        }),
    }
    return fetch(api, requestOptions)
}

export { myFetchGet, createNewTextPost, createNewImagePost, createNewVideoPost, postNewComment };
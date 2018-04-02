import { url } from "../shared/constants";

const myFetchGet = (url) => {
    const requestOptions = {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Key": "bitbook",
            "SessionId": "7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94"
        },
    }

    return fetch(url, requestOptions)
        .then(response => response.json())
}

const createNewTextPost = (text) => {

    const requestOptions = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Key": "bitbook",
            "SessionId": "7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94"
        },
        body: JSON.stringify({
            text: text
        })
    }

    return fetch("http://bitbookapi.azurewebsites.net/api/TextPosts", requestOptions)
        .then(response => response.json())
}

const createNewImagePost = (imageURL) => {

    const requestOptions = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Key": "bitbook",
            "SessionId": "7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94"
        },
        body: JSON.stringify({
            imageUrl: imageURL
        })
    }

    return fetch("http://bitbookapi.azurewebsites.net/api/ImagePosts", requestOptions)
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
        headers: {
            "Content-Type": "application/json",
            "Key": "bitbook",
            "SessionId": "7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94"
        },
        body: JSON.stringify({
            videoUrl: link
        })
    }

    return fetch("http://bitbookapi.azurewebsites.net/api/VideoPosts", requestOptions)
        .then(response => response.json())
};


const postNewComment = (comment, id) => {
    const api = url.baseUrl + url.newComment;

    const requestOptions = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Key": "bitbook",
            "SessionId": "7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94"
        },
        body: JSON.stringify({
            body: comment,
            postId: id
        }),
    }
    return fetch(api, requestOptions)
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

export { myFetchGet, createNewTextPost, createNewImagePost, createNewVideoPost, postNewComment, myFetchPUT };
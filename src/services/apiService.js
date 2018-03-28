

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
};

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
};
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
};
const createNewVideoPost = (videoURL) => {
    const requestOptions = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Key": "bitbook",
            "SessionId": "7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94"
        },
        body: JSON.stringify({
            videoUrl: videoURL
        })
    }

    return fetch("http://bitbookapi.azurewebsites.net/api/VideoPosts", requestOptions)
        .then(response => response.json())
};


export { myFetchGet, createNewTextPost, createNewImagePost, createNewVideoPost };


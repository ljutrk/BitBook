import { myFetchGet, myFetchPost } from "../services/apiService";
import { Text } from "../entities/Text";
import { Image } from "../entities/Image";
import { Video } from "../entities/Video";
import { url } from "../shared/constants";
import { capitalizeFirstLetter, changeYoutubeLink } from "../shared/utils";
import { headers } from "../shared/constants";

class PostService {

    getPosts = (url) => {
        return myFetchGet(url)
            .then(res => res.map(post => {
                if (post.type === "text") {
                    return new Text(post);
                } else if (post.type === "video") {
                    return new Video(post);
                } else if (post.type === "image") {
                    return new Image(post);
                }
            }
            ));
    }

    getPost = (type, id) => {
        type = capitalizeFirstLetter(type);
        const api = url.baseUrl + type + "Posts/" + id;
        return myFetchGet(api);
    }

    deletePost = (id) => {
        const requestOptions = {
            method: 'DELETE',
            headers
        }
        const deleteURL = url.baseUrl + url.posts + "/" + id;

        return fetch(deleteURL, requestOptions);
    }

    createNewImagePost = (imageUrl) => {
        const body = { imageUrl };

        return myFetchPost(url.imagePosts, body);
    }

    createNewVideoPost = (videoUrl) => {
        const changedVideoURL = changeYoutubeLink(videoUrl)
        const body = { videoUrl: changedVideoURL };

        return myFetchPost(url.videoPosts, body);
    }

    createNewTextPost = (text) => {
        const body = { text: text };

        return myFetchPost(url.textPosts, body);
    }

}

export const postService = new PostService();
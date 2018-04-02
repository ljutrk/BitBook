import { Post } from "../entities/Post";
import { myFetchGet } from "../services/apiService";
import { Text } from "../entities/Text";
import { Image } from "../entities/Image";
import { Video } from "../entities/Video";
import { url } from "../shared/constants";
import { capitalizeFirstLetter } from "../shared/utils";
import { headers } from "../shared/constants";

class PostService {

    getPosts = (url) => {
        return myFetchGet(url)
            .then(res => res.map(post => {
                if (post.type === "text") {
                    return new Text(post)
                } else if (post.type === "video") {
                    return new Video(post)
                } else if (post.type === "image") {
                    return new Image(post)
                }
            }
            ))
    }

    getPost = (type, id) => {
        type = capitalizeFirstLetter(type);
        const api = url.baseUrl + type + "Posts/" + id;
        return myFetchGet(api)
    }

    deletePost = (id) => {
        const requestOptions = {
            method: 'DELETE',
            headers
        }
        const deleteURL = url.baseUrl + url.posts + "/" + id;
        return fetch(deleteURL, requestOptions)

    }

}

export const postService = new PostService();
import { Post } from "../entities/Post";
import { myFetchGet } from "../services/apiService"


class PostService {

    getPosts = (url) => {
        return myFetchGet(url)
            .then(res => res.map(post => new Post(post)))
    }

}

export const postService = new PostService();
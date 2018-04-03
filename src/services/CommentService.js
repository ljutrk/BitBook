import { url } from "../shared/constants";
import { myFetchGet, myFetchPost } from "../services/apiService";

class CommentService {

    getComments = (id) => {
        const api = url.baseUrl + url.comments + id;
        return myFetchGet(api)
    }

    createNewComment = (text, postId) => {
        const body = {
            body: text,
            postId: postId
        }

        return myFetchPost(url.newComment, body);
    }

}

export const commentService = new CommentService();
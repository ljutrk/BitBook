import { url } from "../shared/constants";
import { myFetchGet } from "../services/apiService";

class CommentService {
    getComments = (id) => {
        const api = url.baseUrl + url.comments + id;
        return myFetchGet(api)
    }
}

export const commentService = new CommentService();
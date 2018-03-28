import { Post } from "./Post";

class Video extends Post {
    constructor(post) {
        super(post)
        this.videoUrl = post.videoUrl;
    }
}

export { Video };
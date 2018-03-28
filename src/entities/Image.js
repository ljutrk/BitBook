import { Post } from "./Post";

class Image extends Post {
    constructor(post) {
        super(post)
        this.imageUrl = post.imageUrl;
    }
}

export { Image };
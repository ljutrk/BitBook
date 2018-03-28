import { Post } from "./Post";

class Text extends Post {
    constructor(post) {
        super(post)
        this.text = post.text
    }
}

export { Text };

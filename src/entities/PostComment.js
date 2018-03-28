
class PostComment {
    constructor(comment) {
        this.id = comment.id;
        this.authorName = comment.author;
        this.authorId = comment.authorId;
        this.body = comment.body;
        this.dateCreated = comment.dateCreated;
        this.postId = comment.postId;
    }
}
export { PostComment };
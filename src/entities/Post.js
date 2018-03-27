class Post {
    constructor(post) {
        this.text = post.text;
        this.id = post.id;
        this.dateCreated = post.dateCreated;
        this.userId = post.userId;
        this.userDisplayName = post.userDisplayName;
        this.type = post.type;
        this.commentsNumber = post.commentsNum;
    }
}

export { Post };
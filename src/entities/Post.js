class Post {
    constructor(post) {
        this.id = post.id;
        this.dateCreated = post.dateCreated;
        this.userId = post.userId;
        this.userDisplayName = post.userDisplayName;
        this.type = post.type;
        this.commentsNum = post.commentsNum;
    }

    isText = () => {
        return this.type === "text";
    }

    isImage = () => {
        return this.type === "image";
    }

    isVideo = () => {
        return this.type === "video";
    }
}

export { Post };
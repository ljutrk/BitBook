const url = {
    baseUrl: "http://bitbookapi.azurewebsites.net/api/",
    posts: "Posts",
    comments: "Comments?postId=",
    users: "users/",
    newComment: "Comments",
    profile: "profile",
    editProfile: "Profiles",
    textPosts: "TextPosts",
    imagePosts: "ImagePosts",
    videoPosts: "VideoPosts"

}

const button = {
    active: "modal-action modal-close waves-effect waves-green btn-flat",
    disabled: "modal-action modal-close waves-effect waves-green btn-flat disabled"
}

const videoURL = {
    watch: "youtube.com/watch?v=",
    embed: "youtube.com/embed/",
    shared: "youtu.be/"
}

const headers = {
    "Content-Type": "application/json",
    "Key": "64C2396",
}

const imagePlaceholder = "http://via.placeholder.com/150x150";

export { url, button, videoURL, imagePlaceholder, headers };
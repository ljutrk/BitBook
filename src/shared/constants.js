const url = {
    baseUrl: "http://bitbookapi.azurewebsites.net/api/",
    posts: "Posts",
    // imagePost: "/api/ImagePosts/",
    // textPost: "/api/TextPosts/",
    // videoPost: "/api/VideoPosts/",
    comments: "Comments?postId=",
    users: "users/",
    newComment: "Comments",
    profile: "profile",
    editProfile: "Profiles"
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

const imagePlaceholder = "http://via.placeholder.com/150x150";

export { url, button, videoURL, imagePlaceholder };
import React, { Fragment } from "react";
import { Comment } from "./Comment";
import { TextPost } from "../feedpage/TextPost";
import { ImagePost } from "../feedpage/ImagePost";
import { VideoPost } from "../feedpage/VideoPost";
import { myFetchGet } from "../../../services/apiService";
import { url } from "../../../shared/constants";
import { PostComment } from "../../../entities/PostComment";

class PostDetailsPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            postObject: null,
            comments: []
        }
    }

    fetchPost = () => {
        const currentUrl = this.props.match.url;

        if (currentUrl.includes("/images")) {
            const imageEndpoint = url.baseUrl + url.imagePost + this.props.match.params.id;
            return myFetchGet(imageEndpoint);
        } else if (currentUrl.includes("/texts")) {
            const textEndpoint = url.baseUrl + url.textPost + this.props.match.params.id;
            return myFetchGet(textEndpoint);
        } else if (currentUrl.includes("/videos")) {
            const videoEndpoint = url.baseUrl + url.videoPost + this.props.match.params.id;
            return myFetchGet(videoEndpoint);
        }
    }

    fetchComments = () => {
        const commentsUrl = url.baseUrl + url.comments + this.props.match.params.id;
        myFetchGet(commentsUrl)
            .then(response => this.setState({
                comments: response
            })
            )
    }

    componentDidMount() {
        this.fetchPost()
            .then(response => { this.setState({ postObject: response }) })

        this.fetchComments()
    }

    displayPost = () => {
        const postObject = this.state.postObject;

        if (postObject.type === "image") {
            return <ImagePost post={postObject} />
        } else if (postObject.type === "text") { ///ovde prosledjujemo broj komentara iz state.comments
            return <TextPost post={postObject} />
        } else if (postObject.type === "video") {
            return <VideoPost post={postObject} />
        }
    }

    render() {
        if (!this.state.postObject) {
            return <h1>...</h1>
        }

        const comments = this.state.comments;
        return (
            <Fragment>
                {this.displayPost()}
                {(comments.length !== 0) ? comments.map((comment, index) => {
                    const newComment = new Comment(comment);
                    return <Comment comment={newComment} key={index} />
                }) : "No comments yet..."}
            </Fragment>
        )
    }
}

export { PostDetailsPage }
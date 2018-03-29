import React, { Fragment } from "react";
import { Comment } from "./Comment";
import { TextPost } from "../feedpage/TextPost";
import { ImagePost } from "../feedpage/ImagePost";
import { VideoPost } from "../feedpage/VideoPost";
import { myFetchGet } from "../../../services/apiService";
import { url } from "../../../shared/constants";
import { PostComment } from "../../../entities/PostComment";
import { NewComment } from "./NewComment";
import { postService } from "../../../services/PostService";


class PostDetailsPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            postObject: null,
            comments: []
        }
    }

    fetchPost = () => {
        const { id, type} = this.props.match.params;
        
        return postService.getPost(type, id);
    }

    fetchComments = () => {
        const id = this.props.match.params.id;
        return postService.getComments(id)
            .then(response => {
                this.setState({
                    comments: response
                })
            }
        )
    }

    componentDidMount() {
        this.fetchPost()
            .then(response => {
                this.setState({ postObject: response })
            })
        this.fetchComments()
    }

    displayPost = () => {
        const postObject = this.state.postObject;

        if (postObject.type === "image") {
            return <ImagePost post={postObject} />
        } else if (postObject.type === "text") { 
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
                <NewComment />
                {(comments.length !== 0) ? comments.map((comment, index) => {
                    const newComment = new Comment(comment);
                    return <Comment comment={newComment} key={index} />
                }) : null}
            </Fragment>
        )
    }
}

export { PostDetailsPage }
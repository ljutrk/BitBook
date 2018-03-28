import React, { Fragment } from "react";
import { postService } from "../../../services/PostService";
import { url } from "../../../shared/constants";
import { PostFeedItem } from "./PostFeedItem";
import M from 'materialize-css';
import { CreatePost } from "./createPost/CreatePost";


class FeedPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        const posts = postService.getPosts(url.baseUrl + url.posts)
            .then(postList => {
                this.setState({
                    posts: postList
                })
            })
    }

    render() {

        if (!this.state.posts.length) {
            return <h1>loading...</h1>
        }

        const posts = this.state.posts;

        return (
            <Fragment>
                <CreatePost />
                <PostFeedItem postList={posts} />
            </Fragment>
        );
    }
}

export { FeedPage };



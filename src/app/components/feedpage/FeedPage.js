import React, { Fragment } from "react";
import { url } from "../../../shared/constants";
import { postService } from "../../../services/PostService";
import { PostFeedItem } from "./PostFeedItem";
import { CreatePost } from "./createPost/CreatePost";

class FeedPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            postCreated: false
        }
    }

    componentDidMount() {
        this.fetchMeStuff();
    }

    fetchMeStuff = () => {

        postService.getPosts(url.baseUrl + url.posts)
            .then(postList => {
                this.setState({
                    posts: postList,
                    postCreated: !this.state.postCreated
                });
            });
    }

    render() {

        if (!this.state.posts.length) {
            return <h1>loading...</h1>
        }
        const posts = this.state.posts;

        return (
            <Fragment>
                <CreatePost fetchMeStuff={this.fetchMeStuff} />
                <PostFeedItem postList={posts} fetchMeStuff={this.fetchMeStuff} />
            </Fragment>
        );
    }
}

export { FeedPage };


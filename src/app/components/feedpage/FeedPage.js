import React, { Fragment } from "react";
import { url } from "../../../shared/constants";
import { postService } from "../../../services/PostService";
import { PostFeedItem } from "./PostFeedItem";
import { CreatePost } from "./createPost/CreatePost";
import { FilterDropdown } from './FilterDropdown';

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

    filterPosts = (eventTargetID) => {
        postService.getPosts(url.baseUrl + url.posts)
            .then(posts => posts.filter(post => post.type === eventTargetID))
            .then(filteredPosts => {
                this.setState({ posts: filteredPosts })
            })
    }

    render() {

        if (!this.state.posts.length) {
            return <h1>loading...</h1>
        }
        const posts = this.state.posts;

        return (
            <Fragment>
                <FilterDropdown filterPosts={this.filterPosts} fetchMeStuff={this.fetchMeStuff} />
                <CreatePost fetchMeStuff={this.fetchMeStuff} />
                <PostFeedItem postList={posts} fetchMeStuff={this.fetchMeStuff} />
            </Fragment>
        );
    }
}

export { FeedPage };


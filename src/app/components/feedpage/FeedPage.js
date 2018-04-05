import React, { Fragment } from "react";
import { url, headers } from "../../../shared/constants";
import { postService } from "../../../services/PostService";
import { PostFeedItem } from "./PostFeedItem";
import { CreatePost } from "./createPost/CreatePost";
import { FilterDropdown } from './FilterDropdown';
import "./feedPage.css";
import { isAuthenticated } from "../../../services/AuthenticationService";
import { Loader } from "../../partials/Loader";

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
        // console.log(localStorage.getItem("SessionId"));
        // if (isAuthenticated()) {
        //     console.log("ima storage");

        // }
        // if (!isAuthenticated()) {
        //     console.log("nema storage");

        // }

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
            return (
                <Fragment>
                    <Loader />
                    <CreatePost fetchMeStuff={this.fetchMeStuff} />
                </Fragment>
            )
        }
        const posts = this.state.posts;

        return (
            <Fragment>
                <CreatePost fetchMeStuff={this.fetchMeStuff} />
                <FilterDropdown filterPosts={this.filterPosts} fetchMeStuff={this.fetchMeStuff} />
                <PostFeedItem postList={posts} fetchMeStuff={this.fetchMeStuff} />
            </Fragment>
        );
    }
}

export { FeedPage };


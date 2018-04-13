import React, { Fragment } from "react";
import { url } from "../../../shared/constants";
import { postService } from "../../../services/PostService";
import { PostFeedItem } from "./PostFeedItem";
import { CreatePost } from "./createPost/CreatePost";
import { FilterDropdown } from './FilterDropdown';
import "./feedPage.css";
import { Loader } from "../../partials/Loader";

class FeedPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
        }
    }

    componentDidMount() {
        this.fetchMeStuff();
    }

    fetchMeStuff = () => {

        postService.getPosts(url.baseUrl + url.posts)
            .then(posts => {
                this.setState({ posts });
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
            return <Loader />
        }

        return (
            <Fragment>
                <CreatePost fetchMeStuff={this.fetchMeStuff} />
                <FilterDropdown filterPosts={this.filterPosts} fetchMeStuff={this.fetchMeStuff} />
                <PostFeedItem postList={this.state.posts} fetchMeStuff={this.fetchMeStuff} />
            </Fragment>
        );
    }
}

export { FeedPage };


import React from "react";
import { VideoPost } from "./VideoPost";
import { ImagePost } from "./ImagePost";
import { TextPost } from "./TextPost";
import { postService } from "../../../services/PostService";
import { url } from "../../../shared/constants";

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
        const posts = this.state.posts;

        return (
            <React.Fragment>
                {
                    posts.map((post) => {
                        if (post.type === "text") {
                            return <TextPost post={post} key={post.id} />
                        }
                        else if (post.type === "image") {
                            return <ImagePost post={post} key={post.id} />
                        }
                        else if (post.type === "video") {
                            return <VideoPost post={post} key={post.id} />
                        }
                    })
                }
            </React.Fragment>
        );
    }
}

export { FeedPage };
import React from "react";
import { VideoPost } from "./VideoPost";
import { ImagePost } from "./ImagePost";
import { TextPost } from "./TextPost";
import { postTypes } from "../../../shared/postTypes";

class PostFeedItem extends React.Component {
    constructor(props) {
        super(props)
    }

    renderPostByType = (post) => {
        if (post.isText()) {
            return <TextPost post={post} key={post.id} />
        }
        else if (post.isVideo()) {
            return <VideoPost post={post} key={post.id} />
        }
        else if (post.isImage()) {
            return <ImagePost post={post} key={post.id} />
        }
    }

    render() {
        const postList = this.props.postList;
        return (
            <React.Fragment>
                {postList.map(post => this.renderPostByType(post))}
            </React.Fragment>

        )
    }
}
export { PostFeedItem };
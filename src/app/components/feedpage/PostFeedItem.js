import React from "react";
import { VideoPost } from "./VideoPost";
import { ImagePost } from "./ImagePost";
import { TextPost } from "./TextPost";

class PostFeedItem extends React.Component {

    renderPostByType = (post) => {
        if (post.isText()) {
            return <TextPost post={post} key={post.id} fetchMeStuff={this.props.fetchMeStuff} />
        }
        else if (post.isVideo()) {
            return <VideoPost post={post} key={post.id} fetchMeStuff={this.props.fetchMeStuff} />
        }
        else if (post.isImage()) {
            return <ImagePost post={post} key={post.id} fetchMeStuff={this.props.fetchMeStuff} />
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
import React from "react";
import { VideoPost } from "./VideoPost";
import { ImagePost } from "./ImagePost";
import { TextPost } from "./TextPost";

class FeedPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <React.Fragment>
                <VideoPost />
                <TextPost />
                <ImagePost />
            </React.Fragment>

        );
    }
}

export { FeedPage };
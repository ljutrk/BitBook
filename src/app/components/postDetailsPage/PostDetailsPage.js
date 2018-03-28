import React, { Fragment } from "react";
import { Comment } from "./Comment";
import { TextPost } from "../feedpage/TextPost";
import { ImagePost } from "../feedpage/ImagePost";
import { VideoPost } from "../feedpage/VideoPost";
import { myFetchGet } from "../../../services/apiService";
import { url } from "../../../shared/constants";

class PostDetailsPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            postType: null
        }
    }

    fetchPost = () => {
        const currentUrl = this.props.match.url;

        if (currentUrl.includes("/images")) {
            const imageEndpoint = url.baseUrl + url.imagePost + this.props.match.params.id;
            return myFetchGet(imageEndpoint);
        } else if (currentUrl.includes("/texts")) {
            const textEndpoint = url.baseUrl + url.textPost + this.props.match.params.id;
            return myFetchGet(textEndpoint);
        } else if (currentUrl.includes("/videos")) {
            const videoEndpoint = url.baseUrl + url.videoPost + this.props.match.params.id;
            return myFetchGet(videoEndpoint);
        }
    }

    componentDidMount() {
        this.fetchPost()
            .then(response => { this.setState({ postType: response }) })
    }

    displayPost = () => {
        const postType = this.state.postType;
        console.log(postType);


        if (postType.type === "image") {
            return <ImagePost post={postType} />
        } else if (postType.type === "text") {
            return <TextPost post={postType} />
        } else if (postType.type === "video") {
            return <VideoPost post={postType} />
        }
    }

    render() {
        if (!this.state.postType) {
            return <h1>...</h1>
        }
        return (
            <Fragment>
                {this.displayPost()}
            </Fragment>
        )
    }
}

export { PostDetailsPage }
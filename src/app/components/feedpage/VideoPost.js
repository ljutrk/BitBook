import React, { Fragment, Component } from 'react';
import { Link, HashRouter } from "react-router-dom";
import { post } from './post.css';
import DeleteButton from '../../partials/DeleteButton';


class VideoPost extends Component {
    constructor(props) {
        super(props)
    }

    ifEmbededVideo = (url) => {
        const toReplace = "watch?v=";
        const replaceWith = "embed/"
        if (url.includes(toReplace)) {
            return url.replace(toReplace, replaceWith)
        } else {
            return url;
        }
    }

    renderFooter = () => {
        const { post } = this.props;
        return (
            <div className="card-action container">
                <span>{post.type} post</span>
                <Link to="/" className="right">{(post.commentsNum === 0) ? "No " : post.commentsNum} Comments</Link>
            </div>
        )
    }

    // clickHandler = (event) => {

    //     // this.props.fetchMeStuff()
    //     postService.deletePost(this.props.post.id)
    //         .then(res => {
    //             this.props.fetchMeStuff()
    //         })

    // }

    render() {

        const { post, hasFooter = true, fetchMeStuff } = this.props;

        return (
            <Fragment>
                <div className="card">
                    <div className="row">
                        <div className="col s12">
                            <DeleteButton fetchMeStuff={fetchMeStuff} post={post} />
                            <div className="card-content white-text">
                                <Link to={`/post/video/${post.id}`}>
                                    <div className="video-container">
                                        <iframe width="853" height="480" src={this.ifEmbededVideo(post.videoUrl)} frameBorder="0" allowFullScreen></iframe>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {(hasFooter) ? (this.renderFooter()) : null}
                </div>
            </Fragment >
        )
    }
}
export { VideoPost };
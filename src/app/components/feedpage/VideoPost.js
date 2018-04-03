import React, { Fragment, Component } from 'react';
import { Link } from "react-router-dom";
import DeleteButton from '../../partials/DeleteButton';

class VideoPost extends Component {

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
        );
    }

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
                                        <iframe title={post.id} width="853" height="480" src={this.ifEmbededVideo(post.videoUrl)} frameBorder="0" allowFullScreen></iframe>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {(hasFooter) ? (this.renderFooter()) : null}
                </div>
            </Fragment >
        );
    }
}

export { VideoPost };
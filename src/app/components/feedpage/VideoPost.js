import React, { Fragment } from 'react';
import { Link, HashRouter } from "react-router-dom";
import { post } from './post.css';

const VideoPost = ({ post }) => {

    const ifEmbededVideo = (url) => {
        const toReplace = "watch?v=";
        const replaceWith = "embed/"
        if (url.includes(toReplace)) {
            return url.replace(toReplace, replaceWith)
        } else {
            return url;
        }
    }
    return (
        <Fragment>
            <div className="card">
                <Link to={`/post/video/${post.id}`}>
                    <div className="row">
                        <div className="col s12 offset-m1 m10">
                            <div className="card-content white-text">
                                <div className="video-container">
                                    <iframe width="853" height="480" src={ifEmbededVideo(post.videoUrl)} frameBorder="0" allowFullScreen></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
                <div className="card-action container">
                    <span>{post.type} post</span>
                    <Link to="/" className="right">{(post.commentsNum === 0) ? "No " : post.commentsNum} Comments</Link>
                </div>
            </div>
        </Fragment>
    )
}

export { VideoPost };
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
        <div className="row">
            <div className="col s12 offset-m2 m8">
                <div className="card">
                    <div className="card-content white-text">
                        <div className="video-container">
                            <iframe width="853" height="480" src={ifEmbededVideo(post.videoUrl)} frameBorder="0" allowFullScreen></iframe>
                        </div>
                    </div>
                    <div className="card-action">
                        <Link to="/">{post.type} post</Link>
                        <Link to="/" className="right">15 Comments</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { VideoPost };
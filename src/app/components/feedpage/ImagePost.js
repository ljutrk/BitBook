import React, { Fragment } from "react";
import { Link, HashRouter } from "react-router-dom";
import { post } from './post.css';

const ImagePost = ({ post }) => {
    return (
        <Fragment>
            <div className="card">
                <Link to={`/post/image/${post.id}`}>
                    <div className="row">
                        <div className="col s12 offset-m1 m10">
                            <div className="card-image">
                                <img src={post.imageUrl} />
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

export { ImagePost };
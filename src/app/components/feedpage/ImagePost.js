import React, { Fragment } from "react";
import { Link, HashRouter } from "react-router-dom";
import { post } from './post.css';

const ImagePost = ({ post, hasFooter = true }) => {

    const renderFooter = () => {
        return (
            <div className="card-action container">
                <span>{post.type} post</span>
                <Link to="/" className="right">{(post.commentsNum === 0) ? "No " : post.commentsNum} Comments</Link>
            </div>
        )
    }

    return (
        <Fragment>
            <div className="card">
                <Link to={`/post/image/${post.id}`}>
                    <div className="row">
                        <div className="col s12">
                            <div className="card-image">
                                <img src={post.imageUrl} />
                            </div>
                        </div>
                    </div>
                </Link>
                {(hasFooter) ? (renderFooter()) : null}
            </div>
        </Fragment>

    )
}

export { ImagePost };
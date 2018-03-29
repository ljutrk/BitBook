import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { post } from './post.css';
import { Comment } from "../postDetailsPage/Comment";

const TextPost = ({ post, hasFooter = true }) => {

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
                <Link to={`/post/text/${post.id}`}>
                    <div className="row">
                        <div className="col s12">
                            <div className="card-content center">
                                <p>{post.text}</p>
                            </div>
                        </div>
                    </div>
                </Link>
                {(hasFooter) ? (renderFooter()) : null}
            </div>
        </Fragment>
    )



}

export { TextPost };
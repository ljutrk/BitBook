import React, { Fragment } from "react";
import { Link, HashRouter } from "react-router-dom";
import { post } from './post.css';

const ImagePost = ({ post }) => {
    console.log(post.id)
    return (
        <Fragment>
            <div className="card">
                <Link to={`/images/${post.id}`}>
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
                    <Link to="/" className="right">15 Comments</Link>
                </div>
            </div>
        </Fragment>

    )
}

export { ImagePost };
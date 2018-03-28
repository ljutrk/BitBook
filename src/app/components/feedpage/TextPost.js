import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { post } from './post.css';
import { Comment } from "../postDetailsPage/Comment";

const TextPost = ({ post }) => {
    return (
        <Fragment>
            <div className="card">
                <Link to={`/texts/${post.id}`}>
                    <div className="row">
                        <div className="col s12 offset-m1 m10">
                            <div className="card-content center">
                                <p>{post.text}</p>
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

export { TextPost };
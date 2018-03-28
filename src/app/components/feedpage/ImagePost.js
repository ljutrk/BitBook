import React, { Fragment } from "react";
import { Link, HashRouter } from "react-router-dom";
import { post } from './post.css';

const ImagePost = ({ post }) => {
    return (
        <div className="row">
            <div className="col s12 offset-m2 m8">
                <div className="card">
                    <div className="card-image">
                        <img src="https://lorempixel.com/1000/1000/nature/" />
                        <div className="card-action">
                            <Link to="/">{post.type} post</Link>
                            <Link to="/" className="right">15 Comments</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export { ImagePost };
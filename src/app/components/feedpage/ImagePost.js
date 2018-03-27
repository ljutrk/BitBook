import React from "react";
import { Link, HashRouter } from "react-router-dom";
import { post } from './post.css';

const ImagePost = () => {
    return (
        <div class="row">
            <div class="col s12 offset-m3 m6">
                <div class="card">
                    <div class="card-image">
                        <img src="https://lorempixel.com/1000/1000/nature/" />
                        <div class="card-action">
                            <HashRouter>
                                <React.Fragment>
                                    <Link to="/">Image Post</Link>
                                    <Link to="/" className="right">15 Comments</Link>
                                </React.Fragment>
                            </HashRouter>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export { ImagePost };
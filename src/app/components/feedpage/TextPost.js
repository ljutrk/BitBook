import React from "react";
import { Link, HashRouter } from "react-router-dom";
import { post } from './post.css';

const TextPost = () => {
    return (
        <div class="row">
            <div class="col s12 offset-m3 m6">
                <div class="card">
                    <div class="card-content center">
                        <p>I am a very simple card. I am good at containing small bits of information.
                        I am convenient because I require little markup to use effectively.</p>
                    </div>
                    <div class="card-action">
                        <HashRouter>
                            <React.Fragment>
                                <Link to="/">Text post</Link>
                                <Link to="/" className="right">15 Comments</Link>
                            </React.Fragment>
                        </HashRouter>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { TextPost };
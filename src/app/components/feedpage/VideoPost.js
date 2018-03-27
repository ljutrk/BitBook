import React from 'react';
import { Link, HashRouter } from "react-router-dom";
import { post } from './post.css';

const VideoPost = () => {
    return (
        <div className="row">
            <div className="col s12 offset-m3 m6">
                <div className="card">
                    <div className="card-content white-text">
                        <video className="responsive-video" controls>
                            <source src="movie.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <div className="card-action">
                        <HashRouter>
                            <React.Fragment>
                                <Link to="/">Video Post</Link>
                                <Link to="/" className="right">15 Comments</Link>
                            </React.Fragment>
                        </HashRouter>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { VideoPost };
import React, { Fragment, Component } from "react";
import { Link, HashRouter } from "react-router-dom";
import { post } from './post.css';
import { postService } from '../../../services/PostService'


class ImagePost extends Component {
    constructor(props) {
        super(props)
    }

    renderFooter = () => {
        const { post } = this.props
        return (
            <div className="card-action container">
                <span>{post.type} post</span>
                <Link to="/" className="right">{(post.commentsNum === 0) ? "No " : post.commentsNum} Comments</Link>
            </div>
        )
    }

    clickHandler = (event) => {

        this.props.fetchMeStuff()
        postService.deletePost(this.props.post.id)
            .then(res => {
                this.props.fetchMeStuff()
            })

    }

    render() {

        const { post, hasFooter = true } = this.props
        return (
            < Fragment >
                <div className="card">
                    <div className="row">
                        <div className="col s12">
                            <a onClick={this.clickHandler} className="right waves-effect waves-light btn #1e88e5 blue darken-1" > X</a>
                            <Link to={`/post/image/${post.id}`}>
                                <div className="card-image">
                                    <img src={post.imageUrl} />
                                </div>
                            </Link>
                        </div>
                    </div>
                    {(hasFooter) ? (this.renderFooter()) : null}
                </div>
            </Fragment >
        )
    }
}


export { ImagePost };
import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";
import DeleteButton from '../../partials/DeleteButton';

class ImagePost extends Component {

    renderFooter = () => {
        const { post } = this.props
        return (
            <div className="card-action container">
                <span>{post.type} post</span>
                <Link to="/" className="right">{(post.commentsNum === 0) ? "No " : post.commentsNum} Comments</Link>
            </div>
        );
    }

    render() {

        const { post, hasFooter = true, onDeleteButtonClick } = this.props

        return (
            < Fragment >
                <div className="card">
                    <div className="row">
                        <div className="col s12">
                            <DeleteButton onButtonClick={onDeleteButtonClick} post={post} />
                            <Link to={`/post/image/${post.id}`}>
                                <div className="card-image">
                                    <img src={post.imageUrl} alt="imagePost" />
                                </div>
                            </Link>
                        </div>
                    </div>
                    {(hasFooter) ? (this.renderFooter()) : null}
                </div>
            </Fragment >
        );
    }
}

export { ImagePost };
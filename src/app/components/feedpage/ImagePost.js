import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";
import DeleteButton from '../../partials/DeleteButton';
import M from "materialize-css";
import { commentService } from "../../../services/CommentService";

class ImagePost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: []
        }
    }

    fetchDropdownComments = () => {
        return commentService.getComments(this.props.post.id)
            .then(response => {
                this.setState({
                    comments: response
                })
            })
    }

    expandOnClick = () => {
        const elem = this.imgCommentsDropdown;
        M.Collapsible.init(elem);
        this.fetchDropdownComments()

    }
    renderFooter = () => {
        const { post } = this.props
        const { comments } = this.state

        return (
            <div className="card-action">
                <ul ref={ul => this.imgCommentsDropdown = ul} className="listing-comments collapsible" onClick={this.expandOnClick} >
                    <li>
                        <div className="collapsible-header">{(post.commentsNum === 0) ? "No " : post.commentsNum} comments</div>
                        {comments.map((comment) => {
                            return <div key={comment.id} className="collapsible-body">
                                <span className="dropdown-comment-user-name">{comment.authorName}:</span>
                                <span>{comment.body}</span>
                            </div>
                        })}
                    </li>
                </ul>
            </div>
        );
    }

    render() {

        const { post, hasFooter = true, fetchMeStuff } = this.props

        return (
            < Fragment >
                <div className="card">
                    <div className="row">
                        <div className="col s12">
                            <DeleteButton fetchMeStuff={fetchMeStuff} post={post} />
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
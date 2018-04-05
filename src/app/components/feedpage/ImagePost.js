import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";
import DeleteButton from '../../partials/DeleteButton';
import M from "materialize-css";
import { commentService } from "../../../services/CommentService";
import { PostComment } from "../../../entities/PostComment";

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
        const instance = M.Collapsible.init(elem);
        this.fetchDropdownComments()

    }
    renderFooter = () => {
        const { post } = this.props
        const { comments } = this.state

        return (
            <div className="card-action">
                <ul ref={ul => this.imgCommentsDropdown = ul} className="listing-comments collapsible" onClick={this.expandOnClick} >
                    <li>
                        <div className="collapsible-header">{(post.commentsNum === 0) ? "No " : post.commentsNum} Comments</div>
                        {comments.map((comment, key) => {
                            return <div key={key} className="collapsible-body"><span>{comment.body}</span></div>
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
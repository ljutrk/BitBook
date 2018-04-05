import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";
import DeleteButton from '../../partials/DeleteButton';
import M from "materialize-css";
import { commentService } from "../../../services/CommentService";

class TextPost extends Component {
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
        const elem = this.textCommentsDropdown;
        const instance = M.Collapsible.init(elem);
        this.fetchDropdownComments()
    }

    renderFooter = () => {

        const { post } = this.props;
        return (
            <div className="card-action">
                <ul ref={ul => this.textCommentsDropdown = ul} className="listing-comments collapsible" onClick={this.expandOnClick} >
                    <li>
                        <div className="collapsible-header">{(post.commentsNum === 0) ? "No " : post.commentsNum} Comments</div>
                        <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                    </li>
                </ul>
            </div>
        );
    }

    render() {

        const { post, hasFooter = true, onDeleteButtonClick } = this.props;

        return (
            <Fragment>
                <div className="card">
                    <div className="row">
                        <div className="col s12">
                            <DeleteButton onButtonClick={onDeleteButtonClick} post={post} fetchMeStuff={this.props.fetchMeStuff} />
                            <Link to={`/post/text/${post.id}`}>
                                <div className="card-content center">
                                    <p>{post.text}</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                    {(hasFooter) ? (this.renderFooter()) : null}
                </div>
            </Fragment>
        );
    }
}

export { TextPost };
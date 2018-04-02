import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";
import { post } from './post.css';
import { Comment } from "../postDetailsPage/Comment";
import DeleteButton from '../../partials/DeleteButton';


// const TextPost = ({ post, hasFooter = true, fetchMeStuff }) => {
class TextPost extends Component {
    constructor(props) {
        super(props);
    }
    renderFooter = () => {
        const { post } = this.props;
        return (
            <div className="card-action container">
                <span>{post.type} post</span>
                <Link to="/" className="right">{(post.commentsNum === 0) ? "No " : post.commentsNum} Comments</Link>
            </div>
        )
    }

    // clickHandler = (event) => {
    //     this.props.fetchMeStuff()
    //     postService.deletePost(this.props.post.id)
    //         .then(res => {
    //             this.props.fetchMeStuff()
    //         })

    // }

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
        )



    }
}

export { TextPost };
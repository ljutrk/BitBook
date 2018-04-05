import React, { Fragment, Component } from 'react';
import { Link } from "react-router-dom";
import DeleteButton from '../../partials/DeleteButton';
import M from "materialize-css";
import { commentService } from "../../../services/CommentService";

class VideoPost extends Component {
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
        const elem = this.videoCommentsDropdown;
        const instance = M.Collapsible.init(elem);
        this.fetchDropdownComments()

    }

    ifEmbededVideo = (url) => {
        const toReplace = "watch?v=";
        const replaceWith = "embed/"
        if (url.includes(toReplace)) {
            return url.replace(toReplace, replaceWith)
        } else {
            return url;
        }
    }

    renderFooter = () => {
        const { post } = this.props;
        return (
            <div className="card-action">
                <ul ref={ul => this.videoCommentsDropdown = ul} className="listing-comments collapsible" onClick={this.expandOnClick} >
                    <li>
                        <div className="collapsible-header">{(post.commentsNum === 0) ? "No " : post.commentsNum} Comments</div>
                        <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                    </li>
                </ul>
            </div>
        );
    }

    render() {

        const { post, hasFooter = true, fetchMeStuff } = this.props;

        return (
            <Fragment>
                <div className="card">
                    <div className="row">
                        <div className="col s12">
                            <DeleteButton fetchMeStuff={fetchMeStuff} post={post} />
                            <Link to={`/post/video/${post.id}`}>
                                <div className="card-content white-text">
                                    <div className="video-container">
                                        <iframe title={post.id} width="853" height="480" src={this.ifEmbededVideo(post.videoUrl)} frameBorder="0" allowFullScreen></iframe>
                                    </div>
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

export { VideoPost };
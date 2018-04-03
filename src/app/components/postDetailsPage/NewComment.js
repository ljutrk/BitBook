import React from "react";
import { commentService } from "../../../services/CommentService";
import './newComment.css'

class NewComment extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            textValue: ""
        }
    }

    getInputValue = event => {

        this.setState({ textValue: event.target.value });
    }

    triggerCreateNewComment = () => {

        if (!this.state.textValue) {
            return;
        }

        const { postId, fetchComments } = this.props;
        const value = this.state.textValue;

        commentService.createNewComment(value, postId)
            .then(() => {
                this.setState({ textValue: "" });
                fetchComments()
            });
    }

    render() {

        return (
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <textarea id="textarea1" className="materialize-textarea col s11" onChange={this.getInputValue} value={this.state.textValue} placeholder="Add your comment..."></textarea>
                        <a className={`${(!this.state.textValue) ? `btn col s1 #2196f3 blue disabled` : "btn col s1 #2196f3 blue"}`} id="button-send" onClick={this.triggerCreateNewComment}>Send</a>
                    </div>
                </form>
            </div>
        );
    }
}

export { NewComment }
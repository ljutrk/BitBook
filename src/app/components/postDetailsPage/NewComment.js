import React from "react";
import { newComment } from "./newComment.css";
import { postNewComment } from "../../../services/apiService";

class NewComment extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            textValue: "",
            isTextInputEmpty: true,
            isCommentSent: false
        }
    }

    errorMessage = () => {
        return <p className="invalid-comment"> Please enter valid comment! </p>
    }

    getInputValue = event => {
        this.setState({ textValue: event.target.value });
        this.setState({ isTextInputEmpty: false });

        if (event.target.value.length === 0) {
            this.setState({ isTextInputEmpty: true });
        }
    }

    createNewComment = () => {
        const { postId, fetchComments } = this.props;
        if (!this.state.isTextInputEmpty) {
            const value = this.state.textValue;
            postNewComment(value, postId)
                .then(response => {
                    this.setState({
                        isCommentSent: true
                    });
                }).then(() => {
                    fetchComments()
                });
        }
        document.querySelector("#textarea1").value = "";
    }

    render() {

        return (
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <textarea id="textarea1" className="materialize-textarea col s11" onChange={this.getInputValue} placeholder="Add your comment..."></textarea>
                        <a className="btn col s1 #2196f3 blue" id="button-send" onClick={this.createNewComment}>Send</a>
                    </div>
                </form>
            </div>
        )
    }
}

export { NewComment }
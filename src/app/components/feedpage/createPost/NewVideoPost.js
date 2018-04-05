import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { button, videoURL } from '../../../../shared/constants';
import { postService } from '../../../../services/PostService';

class NewVideoPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: "",
            isVideoURLInputValid: false,
            isError: false
        }
    }

    videoURLInputHandler = (event) => {

        if ((event.target.value.includes(videoURL.watch) || event.target.value.includes(videoURL.embed) || event.target.value.includes(videoURL.shared))) {
            this.setState({ isVideoURLInputValid: true, isError: false });
        } else {
            this.setState({ isVideoURLInputValid: false, isError: true });
        }

        this.setState({ inputValue: event.target.value });

        if (event.target.value.length === 0) {
            this.setState({ isVideoURLInputValid: false, isError: false });
        }
    }

    createNewPost = (event) => {

        if (this.state.isVideoURLInputValid) {
            postService.createNewVideoPost(this.state.inputValue)
                .then(res => {
                    this.props.fetchMeStuff()
                });
        }
        this.resetCreateNewPostForm();
    }

    errorMessage = () => {

        return <p className="error"> Please enter valid YouTube link! </p>
    }

    resetCreateNewPostForm = () => {
        this.setState({ inputValue: "", isTextInputEmpty: true, isError: false });
    }

    render() {

        return (
            <div id="video" className="modal">
                <div className="modal-content">
                    <div onClick={this.resetCreateNewPostForm} className="modal-action modal-close waves-effect waves-green btn-flat right">X</div>
                    <h4>New Video</h4>
                    <div className="input-field col s12">
                        <input onChange={this.videoURLInputHandler} value={this.state.inputValue} type="text" placeholder="Please enter YouTube link" />
                        {this.state.isError ? this.errorMessage() : ""}
                    </div>
                </div>
                <div className="modal-footer">
                    <Link to="/" onClick={this.createNewPost} className={this.state.isVideoURLInputValid ? button.active : button.disabled}>POST</Link>
                </div>
            </div>
        );
    }
}

export { NewVideoPost };
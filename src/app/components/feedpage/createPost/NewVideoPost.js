import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { createNewVideoPost } from '../../../../services/apiService';
import { button, videoURL } from '../../../../shared/constants';

class NewVideoPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videoURL: "",
            isVideoURLInputValid: false,
            isError: false
        }
    }

    videoURLInputHandler = (event) => {

        if ((event.target.value.includes(videoURL.watch) || event.target.value.includes(videoURL.embed) || event.target.value.includes(videoURL.shared))) {
            this.setState({ isVideoURLInputValid: true });
            this.setState({ isError: false });
        } else {
            this.setState({ isError: true });
            this.setState({ isVideoURLInputValid: false });
        }

        this.setState({ videoURL: event.target.value });

        if (event.target.value.length === 0) {
            this.setState({ isVideoURLInputValid: false });
            this.setState({ isError: false });
        }
    }

    createNewPost = (event) => {

        if (this.state.isVideoURLInputValid) {

            createNewVideoPost(this.state.videoURL)
                .then(res => {
                    this.props.fetchMeStuff()
                });
        }
    }

    errorMessage = () => {

        return <p className="error"> Please enter valid YouTube link! </p>
    }

    render() {

        return (
            <div id="video" className="modal">
                <div className="modal-content">
                    <Link to="/" className="modal-action modal-close waves-effect waves-green btn-flat right">X</Link>
                    <h4>New Video</h4>
                    <div className="input-field col s12">
                        <input onChange={this.videoURLInputHandler} value={this.state.videoURL} type="text" placeholder="Please enter YouTube link" />
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
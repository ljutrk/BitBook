import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { createNewVideoPost } from '../../../../services/apiService';
import { button } from '../../../../shared/constants';

class NewVideoPost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            videoURL: "",
            isVideoURLInputValid: false,
            isYoutube: false
        }
    }

    videoURLInputHandler = (event) => {
        this.setState({ videoURL: event.target.value });

        this.setState({ isVideoURLInputValid: true })
        if (event.target.value.length === 0) {
            this.setState({ isVideoURLInputValid: false })
        }
        if (this.videoURL.includes("youtube")) {
            this.setState({ isYoutube: true });

        }


    }

    createNewPost = () => {
        if (this.state.isYoutube) {
            createNewVideoPost(this.state.videoURL)
        }

        this.setState({ isYoutube: true });
    }

    render() {
        return (
            <div id="video" className="modal">
                <div className="modal-content">
                    <Link to="/" className="modal-action modal-close waves-effect waves-green btn-flat right">X</Link>
                    <h4>New Video</h4>
                    <input onChange={this.videoURLInputHandler} value={this.state.videoURL} type='text' placeholder='Write your video URL here' />
                </div>
                <div className="modal-footer">
                    <Link to="/" onClick={this.createNewPost} className={this.state.isVideoURLInputValid ? button.active : button.disabled}>POST</Link>
                </div>
            </div>
        );
    }
}

export { NewVideoPost };
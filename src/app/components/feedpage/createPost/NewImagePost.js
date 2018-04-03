import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { button } from '../../../../shared/constants';
import { postService } from '../../../../services/PostService';

class NewImagePost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgURL: "",
            isImageURLInputValid: false,
            isError: false
        }
    }

    imgURLInputHandler = (event) => {

        if (event.target.value.includes(".jpg") || event.target.value.includes(".jpeg") || event.target.value.includes(".png") || event.target.value.includes(".gif") || event.target.value.includes(".svg")) {
            this.setState({ isImageURLInputValid: true });
            this.setState({ isError: false });
        } else {
            this.setState({ isError: true });
            this.setState({ isImageURLInputValid: false });
        }

        this.setState({ imgURL: event.target.value });

        if (event.target.value.length === 0) {
            this.setState({ isImageURLInputValid: false });
            this.setState({ isError: false });
        }
    }

    createNewPost = () => {

        if (this.state.isImageURLInputValid) {
            postService.createNewImagePost(this.state.imgURL)
                .then(res => {
                    this.props.fetchMeStuff()
                });
        }
    }

    errorMessage = () => {

        return <p className="error"> Please enter valid image link! </p>
    }

    render() {

        return (
            <div id="image" className="modal">
                <div className="modal-content">
                    <Link to="/" className="modal-action modal-close waves-effect waves-green btn-flat right">X</Link>
                    <h4>New Image</h4>
                    <input onChange={this.imgURLInputHandler} value={this.state.imgURL} type='text' placeholder='Write your image URL here' />
                    {this.state.isError ? this.errorMessage() : ""}
                </div>
                <div className="modal-footer">
                    <Link to="/" onClick={this.createNewPost} className={this.state.isImageURLInputValid ? button.active : button.disabled}>POST</Link>
                </div>
            </div>
        );
    }
}

export { NewImagePost };
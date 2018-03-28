import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { createNewImagePost } from '../../../../services/apiService';
import { button } from '../../../../shared/constants';

class NewImagePost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imgURL: "",
            isImgURLInputEmpty: true
        }
    }

    imgURLInputHandler = (event) => {
        this.setState({ imgURL: event.target.value });
        this.setState({ isImgURLInputEmpty: false });
        if (event.target.value.length === 0) {
            this.setState({ isImgURLInputEmpty: true });

        }
    }

    createNewPost = () => {
        createNewImagePost(this.state.imgURL)
            .then(response => console.log(response))


    }

    render() {
        return (
            <div id="image" className="modal">
                <div className="modal-content">
                    <Link to="/" className="modal-action modal-close waves-effect waves-green btn-flat right">X</Link>
                    <h4>New Image</h4>
                    <input onChange={this.imgURLInputHandler} value={this.state.imgURL} type='text' placeholder='Write your image URL here' />
                </div>
                <div className="modal-footer">
                    <Link to="/" onClick={this.createNewPost} className={this.state.isImgURLInputEmpty ? button.disabled : button.active}>POST</Link>
                </div>
            </div>
        );
    }
}

export { NewImagePost };
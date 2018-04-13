import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { button } from '../../../../shared/constants';
import { postService } from '../../../../services/PostService';

class NewTextPost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: "",
            isTextInputEmpty: true
        }
    }

    textInputHandler = (event) => {

        this.setState({ inputValue: event.target.value, isTextInputEmpty: false });

        if (event.target.value.length === 0) {
            this.setState({ isTextInputEmpty: true });
        }
    }

    createPost = () => {
        if (!this.state.isTextInputEmpty) {
            postService.createNewTextPost(this.state.inputValue)
                .then(res => {
                    this.props.fetchMeStuff();
                });
        }
    }
    
    resetCreateNewPostForm = () => {
        this.setState({ inputValue: "", isTextInputEmpty: true });
    }

    render() {

        return (
            <div id="text" className="modal">
                <div className="modal-content">
                    <div onClick={this.resetCreateNewPostForm} className="modal-action modal-close waves-effect waves-green btn-flat right">X</div>
                    <h4>New Post</h4>
                    <input onChange={this.textInputHandler} value={this.state.inputValue} type='text' placeholder='Write your text post here' />
                </div>
                <div className="modal-footer">
                    <Link to="/" onClick={this.createPost} className={this.state.isTextInputEmpty ? button.disabled : button.active}>POST</Link>
                </div>
            </div>
        );
    }
}

export { NewTextPost };
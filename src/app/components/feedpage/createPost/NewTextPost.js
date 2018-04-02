import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { button } from '../../../../shared/constants';
import { postService } from '../../../../services/PostService';

class NewTextPost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            textValue: "",
            isTextInputEmpty: true
        }
    }

    textInputHandler = (event) => {

        this.setState({
            textValue: event.target.value,
            isTextInputEmpty: false
        });

        if (event.target.value.length === 0) {
            this.setState({ isTextInputEmpty: true });
        }
    }

    createPost = () => {
        if (!this.state.isTextInputEmpty) {
            postService.createNewTextPost(this.state.textValue)
                .then(res => {
                    this.props.fetchMeStuff();
                });
        }
    }

    render() {
        // console.log(this.props.postType);

        return (
            <div id="text" className="modal">
                <div className="modal-content">
                    <Link to="/" className="modal-action modal-close waves-effect waves-green btn-flat right">X</Link>
                    <h4>New Post</h4>
                    <input onChange={this.textInputHandler} value={this.state.textValue} type='text' placeholder='Write your text post here' />
                    {this.state.isError ? this.errorMessage() : ""}
                </div>
                <div className="modal-footer">
                    <Link to="/" onClick={this.createPost} className={this.state.isTextInputEmpty ? button.disabled : button.active}>POST</Link>
                </div>
            </div>
        );
    }
}

export { NewTextPost };
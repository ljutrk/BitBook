// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { createNewTextPost, createNewImagePost, createNewVideoPost } from '../../../../services/apiService';
// import { button, videoURL } from '../../../../shared/constants';

// class NewPost extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             inputValue: "",
//             isVideoURLInputValid: false,
//             isImageURLInputValid: false,
//             isError: false
//         }
//     }

//     inputHandler = (event) => {
//         this.setState({ inputValue: event.target.value });

//         if (this.validate(this.props.postType, event)) {
//             this.setState({ isError: true });
//         }
//     }

//     validate = (postType, event) => {
//         console.log(postType);

//         if (postType === "image") {
//             if (event.target.value.includes(".jpg") || event.target.value.includes(".jpeg") || event.target.value.includes(".png") || event.target.value.includes(".gif") || event.target.value.includes(".svg")) {
//                 this.setState({ isImageURLInputValid: true, isError: false });
//             } else {
//                 this.setState({ isImageURLInputValid: false, isError: true });
//             }

//         } else if (postType === "video") {
//             if ((event.target.value.includes(videoURL.watch) || event.target.value.includes(videoURL.embed) || event.target.value.includes(videoURL.shared))) {
//                 this.setState({ isVideoURLInputValid: true, isError: false });
//             } else {
//                 this.setState({ isVideoURLInputValid: false, isError: true });
//             }
//         }
//     }

//     createNewPost = () => {
//         this.triggerCreatePostRequest()
//     }

//     triggerCreatePostRequest = () => {
//         if (this.props.postType === "text") {
//             createNewTextPost(this.state.inputValue)
//                 .then(res => {
//                     this.props.fetchMeStuff();
//                 });

//         } else if (this.props.postType === "image") {
//             createNewImagePost(this.state.inputValue)
//                 .then(res => {
//                     this.props.fetchMeStuff();
//                 });

//         } else if (this.props.postType === "video") {
//             createNewVideoPost(this.state.inputValue)
//                 .then(res => {
//                     this.props.fetchMeStuff();
//                 });
//         }
//     }

//     placeholder = () => {
//         const { postType } = this.props;
//         const textPlaceholder = `Write your text post here`
//         const imagePlaceholder = 'Write your image URL here'
//         const videoPlaceholder = `Please enter YouTube link`

//         if (postType === "text") {
//             return textPlaceholder;
//         } else if (postType === "image") {
//             return imagePlaceholder;
//         } else if (postType === "video") {
//             return videoPlaceholder;
//         }
//     }

//     errorMessage = () => {
//         const { postType } = this.props;

//         if (postType === "image") {
//             return <p className="error"> Please enter valid image url! </p>
//         } else if (postType === "video") {
//             return <p className="error"> Please enter valid YouTube link! </p>
//         }
//     }

//     isPostButtonClickable = () => {
//         const { postType } = this.props;
//         if (postType === "text") {
//             return this.state.inputValue === "" ? button.disabled : button.active;
//         } else if (postType === "image") {
//             return this.state.isImageURLInputValid ? button.active : button.disabled;
//         } else if (postType === "video") {
//             return this.state.isVideoURLInputValid ? button.active : button.disabled;
//         }
//     }

//     render() {
//         const { postType } = this.props

//         return (
//             <div id="newPost" className="modal">
//                 <div className="modal-content">
//                     <Link to="/" className="modal-action modal-close waves-effect waves-green btn-flat right">X</Link>
//                     <h4>New {postType} Post</h4>
//                     <input onChange={this.inputHandler} value={this.state.inputValue} type='text' placeholder={this.placeholder()} />
//                     {this.state.isError ? this.errorMessage() : ""}
//                 </div>
//                 <div className="modal-footer">
//                     <Link to="/" onClick={this.createNewPost} className={this.isPostButtonClickable()}>POST</Link>
//                 </div>
//             </div>
//         );
//     }
// }

// export { NewPost };
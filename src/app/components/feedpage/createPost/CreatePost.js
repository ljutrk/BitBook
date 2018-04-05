import React, { Fragment } from 'react';
import M from 'materialize-css';
import { NewTextPost } from './NewTextPost';
import { NewImagePost } from './NewImagePost';
import { NewVideoPost } from './NewVideoPost';

class CreatePost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            postType: ""
        }
    }

    componentDidMount() {

        const elem = document.querySelector('.fixed-action-btn');
        M.FloatingActionButton.init(elem, {
            hoverEnabled: false
        });

    }

    modalInitialization = (event) => {

        const postType = event.target.id;
        this.setState({ postType })
        const Modal = document.querySelector(`#${postType}`);
        const ModalInstance = M.Modal.init(Modal, {
            dismissible: false
        });

        ModalInstance.open();
    }

    render() {

        return (
            <Fragment>
                <NewTextPost fetchMeStuff={this.props.fetchMeStuff} postType={this.state.postType} />
                <NewImagePost fetchMeStuff={this.props.fetchMeStuff} postType={this.state.postType} />
                <NewVideoPost fetchMeStuff={this.props.fetchMeStuff} postType={this.state.postType} />
                <div className="fixed-action-btn">
                    <a className="btn-floating btn-large blue">
                        <i className="large material-icons">add</i>
                    </a>
                    <ul>
                        <li><a className="btn-floating blue" onClick={this.modalInitialization}><i id="text" className="material-icons">short_text</i></a></li>
                        <li><a className="btn-floating green" onClick={this.modalInitialization}><i id="image" className="material-icons">image</i></a></li>
                        <li><a className="btn-floating red" onClick={this.modalInitialization}><i id="video" className="material-icons">videocam</i></a></li>
                    </ul>
                </div>
            </Fragment>
        );
    };
}

export { CreatePost };
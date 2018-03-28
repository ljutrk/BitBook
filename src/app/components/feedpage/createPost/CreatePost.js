import React, { Fragment } from 'react';
import M from 'materialize-css';
import { NewTextPost } from './NewTextPost';
import { NewImagePost } from './NewImagePost';
import { NewVideoPost } from './NewVideoPost';

class CreatePost extends React.Component {

    componentDidMount() {
        const elem = document.querySelector('.fixed-action-btn');
        M.FloatingActionButton.init(elem, {
            hoverEnabled: false
        });

    }

    textModalInitialization = (event) => {
        console.log(event.target.id);
        const textModal = document.querySelector(`#${event.target.id}`);
        const textModalInstance = M.Modal.init(textModal);
        textModalInstance.open()
    }

    imageModalInitialization = (event) => {
        console.log(event.target.id);

        const imageModal = document.querySelector(`#${event.target.id}`);
        const imageModalInstance = M.Modal.init(imageModal);
        imageModalInstance.open()
    }


    videoModalInitialization = (event) => {
        console.log(event.target.id);

        const videoModal = document.querySelector(`#${event.target.id}`);
        const videoModalInstance = M.Modal.init(videoModal);
        videoModalInstance.open()
    }

    render() {
        return (
            <Fragment>
                <NewTextPost />
                <NewImagePost />
                <NewVideoPost />
                <div className="fixed-action-btn">
                    <a className="btn-floating btn-large red">
                        <i className="large material-icons">add</i>
                    </a>
                    <ul>
                        <li><a className="btn-floating blue" onClick={this.textModalInitialization}><i id="text" className="material-icons">short_text</i></a></li>
                        <li><a className="btn-floating green" onClick={this.imageModalInitialization}><i id="image" className="material-icons">image</i></a></li>
                        <li><a className="btn-floating red" onClick={this.videoModalInitialization}><i id="video" className="material-icons">videocam</i></a></li>
                    </ul>
                </div>
            </Fragment>
        );
    };
}

export { CreatePost };
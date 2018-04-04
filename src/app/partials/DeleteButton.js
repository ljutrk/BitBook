import React from 'react';
import { postService } from '../../services/PostService';
import { withRouter } from 'react-router-dom';

const DeleteButton = (props) => {

    const clickHandler = () => {
        postService.deletePost(props.post.id)
            .then(res => {
                if (props.history.location.pathname === "/") {
                    props.fetchMeStuff()
                }
                props.history.push("/")
            })

    }
    return <div onClick={clickHandler} className="right waves-effect waves-light btn btn delete-post">X</div>
};

export default withRouter(DeleteButton);
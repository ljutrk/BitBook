import React from "react";
import { newComment } from "./newComment.css";

const NewComment = () => {

    // clickHandler = () => {

    // }

    return (
        <div className="row">
            <form className="col s12">
                <div className="row">
                    <textarea id="textarea1" className="materialize-textarea  col s11" placeholder="Add your comment..."></textarea>
                    <a className="btn col s1 #2196f3 blue" id="button-send" >Send</a>
                </div>
            </form>
        </div>
    )
}

export { NewComment }
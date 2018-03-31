import React, { Component } from 'react';
import { postService } from '../../services/PostService';
import { Link, withRouter } from 'react-router-dom';

const DeleteButton = (props) => {

    const clickHandler = (event) => {
        props.onButtonClick()
    }

    // const deleteReturn = props.location.pathname === "/" ? <Link to="/" onClick={clickHandler} className="right waves-effect waves-light btn #1e88e5 blue darken-1">X</Link> : ""

    // return deleteReturn
    return <div onClick={clickHandler} className="right waves-effect waves-light btn #1e88e5 blue darken-1">X</div>
};

export default DeleteButton;
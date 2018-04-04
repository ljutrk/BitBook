import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css";
import { isImageValid } from "../../../shared/utils";
import { imagePlaceholder } from "../../../shared/constants";
import { profileService } from "../../../services/ProfileService";

class UpdateProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.profile.name,
            text: props.profile.about,
            img: props.profile.avatarUrl
        }
    }


    initProfileModal = () => {
        const elem = document.querySelector('#profileModal');
        const instance = M.Modal.init(elem, {
            dismissible: false
        });
        instance.open();
    }

    getProfileTextInput = (e) => {
        this.setState({
            text: e.target.value
        })
    }
    getProfileImgInput = (e) => {
        this.setState({
            img: e.target.value
        })
    }

    getProfileNameInput = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    setChanges = () => {
        const name = this.state.name;
        const text = this.state.text;
        const img = this.state.img;
        const { updateProfile } = this.props;
        if (text && img && name) {
            updateProfile(text, img, name)
        }
    }

    fetchCurrentProfile = () => {
        return profileService.fetchProfile()
            .then(response => {
                this.setState({
                    name: response.name,
                    text: response.about,
                    img: response.avatarUrl
                })
            })
    }

    isUpdateValid = () => {
        if (this.isInputNameValid() || this.isInputTextValid()) {
            return true
        }
        return false
    }

    isInputNameValid = () => {
        const name = this.state.name;
        if (!name || name.length > 30) {
            return true
        }
        return false
    }

    isInputTextValid = () => {
        const text = this.state.text;
        if (!text) {
            return true
        }
        return false
    }

    render() {
        const { updateProfile } = this.props;
        return (
            <Fragment>
                <a className="waves-effect waves-light btn modal-trigger dropdown-filter" onClick={this.initProfileModal}>Edit profile</a>
                <div id="profileModal" className="modal modal-fixed-footer">
                    <div className="modal-content">
                        <h4>Update profile</h4>
                        <div className="row">
                            <div className="col s12 m4">
                                <img src={(this.state.img) ? this.state.img : imagePlaceholder} alt="profile-photo" id="uploadImg" />
                            </div>
                            <div className="col s12 m8">
                                <h6>Name</h6>
                                <input type="text" onChange={this.getProfileNameInput} value={this.state.name} placeholder="Full Name" />
                                {this.isInputNameValid()
                                    ? (<div className="error">
                                        <span className="left">Max character: 30</span>
                                        <span className="right">{this.state.name.length}/30</span>
                                    </div>)
                                    : ""}
                                <h6 className="add-photo">Add Your Photo</h6>
                                <input type="text" onChange={this.getProfileImgInput} value={this.state.img} placeholder="photo url" />
                            </div>
                        </div>
                        <div className="col s12">
                            <input type="text" onChange={this.getProfileTextInput} value={this.state.text} placeholder="User description" />
                            {this.isInputTextValid()
                                ? <p className="error">Add description</p>
                                : ""}
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button className="btn modal-action modal-close waves-effect" onClick={this.fetchCurrentProfile} >Close</button>
                        <button className={`${(this.isUpdateValid())
                            ? "btn modal-action modal-close waves-effect disabled"
                            : "btn modal-action modal-close waves-effect"}`} onClick={this.setChanges}>Update</button>
                    </div>
                </div>
            </Fragment>
        )
    }

}

export { UpdateProfile };
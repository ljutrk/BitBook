import React from "react";
import { profilePage } from "./profilePage.css";
import { profileService } from "../../../services/ProfileService";

class ProfilePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: null
        }
    }


    componentDidMount() {
        profileService.fetchProfile()
            .then(response => {
                this.setState({ profile: response })
            })
    }

    isImageValid = (profile) => {
        if (profile.includes("jpg")) {
            return profile;
        } if (profile.includes("jpeg")) {
            return profile;
        } if (profile.includes("png")) {
            return profile;
        } if (profile.includes("gif")) {
            return profile;
        } if (profile.includes("svg")) {
            return profile;
        }
        return "http://via.placeholder.com/150x150";
    }

    render() {
        const profile = this.state.profile;
        if (!this.state.profile) {
            return <h1>...</h1>
        }
        return (

            <div className="row">
                <div className="col s12">
                    <div className="card profile">
                        <div className="card-image">
                            <img src={this.isImageValid(profile.avatarUrl)} alt="profile-img" className="profile-img" />
                        </div>
                        <div className="card-content profile-text">
                            <h3 className="card-title profile-title">{profile.Name}</h3>
                            <p>{profile.about}</p>
                            <div className="row">
                                <div className="col s12 m6 right-align">
                                    <div className="profile-btn-holder">
                                        <div className="profile-btn">
                                            <div className="profile-counter-holder">
                                                <span id="profile-profile-btn-counter">{profile.postsCount}</span>
                                            </div>
                                            <span className="profile-btn-text"> posts</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col s12 m6 left-align">
                                    <div className="profile-btn-holder">
                                        <div className="profile-btn">
                                            <div className="profile-counter-holder">
                                                <span id="profile-profile-btn-counter">{profile.commentsCount}</span>
                                            </div>
                                            <span className="profile-btn-text"> comments</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export { ProfilePage }
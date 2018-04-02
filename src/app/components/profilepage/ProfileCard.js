import React from "react";
import { isImageValid } from "../../../shared/utils";

const ProfileCard = (props) => {
    const { profile } = props;
    return (
        <div className="row">
            <div className="col s12">
                <div className="card profile">
                    <div className="card-image">
                        <img src={isImageValid(profile.avatarUrl)} alt="profile-img" className="profile-img" />
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

export { ProfileCard };
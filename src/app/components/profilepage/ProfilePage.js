import React from "react";
import { profilePage } from "./profilePage.css";

const ProfilePage = () => {
    return (

        <div className="row">
            <div className="col s12">
                <div className="card profile">
                    <div className="card-image">
                        <img src="https://images.onlinelabels.com/images/clip-art/dagobert83/dagobert83_female_user_icon.png" className="profile-img" />
                    </div>
                    <div className="card-content profile-text">
                        <h3 className="card-title profile-title">Card Title</h3>
                        <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                        <div className="row">
                            <div className="col s4 col m4 offset-m1 ">
                                <div className="profile-counter">
                                    <span classname="profile-inner-counter">c</span>
                                </div>
                            </div>
                            <div className="col s4 offset-s4 col m4 offset-m2">
                                <div className="profile-counter">
                                    <span classname="profile-inner-counter">c</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { ProfilePage }
import React from "react";
import { userService } from "../../../services/UserService";

class UserProfilePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null
        }
    }

    componentDidMount() {
        const userId = this.props.match.params.id;
        userService.fetchUser(userId)
            .then(response => this.setState({
                user: response
            }))

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
        const { user } = this.state;
        if (!user) {
            return <h1>...</h1>
        }
        return (

            <div className="row">
                <div className="col s12">
                    <div className="card profile">
                        <div className="card-image">
                            <img src={this.isImageValid(user.avatarUrl)} alt="profile-img" className="profile-img" />
                        </div>
                        <div className="card-content profile-text">
                            <h3 className="card-title profile-title">{user.Name}</h3>
                            <p>{user.about}</p>
                            <div className="row">
                                <div className="col s12 m6 right-align">
                                    <div className="profile-btn-holder">
                                        <div className="profile-btn">
                                            <div className="profile-counter-holder">
                                                <span id="profile-profile-btn-counter">{user.postsCount}</span>
                                            </div>
                                            <span className="profile-btn-text"> posts</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col s12 m6 left-align">
                                    <div className="profile-btn-holder">
                                        <div className="profile-btn">
                                            <div className="profile-counter-holder">
                                                <span id="profile-profile-btn-counter">{user.commentsCount}</span>
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


export { UserProfilePage };


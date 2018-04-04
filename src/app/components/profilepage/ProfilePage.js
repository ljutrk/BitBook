import React, { Fragment } from "react";
import { profileService } from "../../../services/ProfileService";
import { ProfileCard } from "./ProfileCard";
import { UpdateProfile } from "./UpdateProfile";
import { myFetchPUT } from "../../../services/apiService";
import './profilePage.css';


class ProfilePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: null
        }
    }

    updateProfilePage = () => {
        return profileService.fetchProfile()
            .then(response => {
                this.setState({ profile: response })
            });
    }

    componentDidMount() {
        this.updateProfilePage()
    }

    updateProfile = (text, image, name) => {
        const { profile } = this.state;
        return myFetchPUT(text, image, name, profile.email, profile.aboutShort)
            .then(response => {
                this.updateProfilePage()
            })
    }

    render() {
        const { profile } = this.state;
        return (
            <Fragment>
                {(!profile) ? <h1>...</h1> :
                    (
                        <Fragment>
                            <UpdateProfile profile={profile} updateProfile={this.updateProfile} />
                            <ProfileCard profile={profile} />
                        </Fragment>
                    )}
                {/* {(!profile) ? <h1>...</h1> : < ProfileCard profile={profile} />} */}
            </Fragment>
        );
    }
}

export { ProfilePage }
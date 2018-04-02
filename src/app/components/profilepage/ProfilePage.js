import React, { Fragment } from "react";
import { profilePage } from "./profilePage.css";
import { profileService } from "../../../services/ProfileService";
import { ProfileCard } from "./ProfileCard";
import { UpdateProfile } from "./UpdateProfile";
import { myFetchPUT } from "../../../services/apiService";


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

    updateProfile = (text, image, name) => {
        const { profile } = this.state;
        return myFetchPUT(text, image, name, profile.email, profile.aboutShort)
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
            </Fragment>

        )

    }
}
export { ProfilePage }
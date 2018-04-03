import React, { Fragment } from "react";
import { ProfileCard } from "./ProfileCard";
import { userService } from "../../../services/UserService";

class UserProfilePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: null
        }
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        userService.fetchUser(id)
            .then(response => {
                this.setState({ profile: response })
            });
    }

    render() {
        const { profile } = this.state;
        return (
            <Fragment>
                {(!profile) ? <h1>...</h1> : < ProfileCard profile={profile} />}
            </Fragment>
        );
    }
}
export { UserProfilePage };
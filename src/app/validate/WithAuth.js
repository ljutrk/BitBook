import React, { Component } from "react";
import { userService } from "../../service/UserService";

export default Component =>
    class Auth extends Component {
        componentDidMount = () => {
            if (!userService.isAuthenticated()) this.props.history.push("/");
        };

        render() {
            return <Component {...this.props} />;
        }
    };

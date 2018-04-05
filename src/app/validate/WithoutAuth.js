import React, { Component } from "react";
import { isAuthenticated } from '../../services/AuthenticationService';

export default ComposedComponent =>
    class Auth extends Component {
        componentDidMount = () => {
            if (isAuthenticated()) this.props.history.push("/");
        };

        render() {
            return <ComposedComponent {...this.props} />;
        }
    };

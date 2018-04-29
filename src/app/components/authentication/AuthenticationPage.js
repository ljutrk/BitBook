import React, { Fragment } from 'react';
import M from 'materialize-css';
import { LoginItem } from './LoginItem';
import { RegisterItem } from './RegisterItem';
import { LoginDescriptionItem } from './LoginDescriptionItem';
import { login, register } from '../../../services/AuthenticationService';
import { RegisterDescriptionItem } from './RegisterDescriptionItem';
import { withRouter } from "react-router-dom";
import { isAuthenticated, logout } from '../../../shared/utils';


class AuthenticationPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: true
        }
    }

    componentDidMount() {
        const tab = document.querySelector('.tabs')
        M.Tabs.init(tab);
    }

    loginHandler = (inputUser) => {
        login(inputUser)
            .then(() => {
                if (isAuthenticated() !== "undefined") {
                    this.props.history.push("/");
                } else {
                    logout();
                }
            })
    }

    registerHandler = (inputUser) => {
        register(inputUser)
        this.props.history.push("/login")
    }

    loginClick = () => {
        this.setState({ login: true })

    }

    registerClick = () => {
        this.setState({ login: false })
    }

    render() {

        return (
            <Fragment>
                <div className="row searchMargin">
                    {this.state.login ? <LoginDescriptionItem /> : <RegisterDescriptionItem />}
                    <div className="col s12 m6">
                        <div className="card">
                            <div className="card-content">
                                <div className="row">
                                    <div className="col s12">
                                        <ul className="tabs">
                                            <li className="tab"><a onClick={this.loginClick} className="active" href="#test1">Login</a></li>
                                            <li className="tab"><a onClick={this.registerClick} href="#test2">Register</a></li>
                                        </ul>
                                    </div>
                                    <div id="test1" className="col s12"><LoginItem loginHandler={this.loginHandler} /></div>
                                    <div id="test2" className="col s12"><RegisterItem registerHandler={this.registerHandler} /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default withRouter(AuthenticationPage);
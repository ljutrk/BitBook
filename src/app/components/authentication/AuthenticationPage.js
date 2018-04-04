import React, { Fragment } from 'react';
import M from 'materialize-css';
import { LoginItem } from './LoginItem';
import { RegisterItem } from './RegisterItem';
import { LoginDescriptionItem } from './LoginDescriptionItem';
import { userService } from '../../../services/UserService';
import { login } from '../../../services/AuthenticationService';

class AuthenticationPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount() {

        userService.fetchUsers()
            .then(users => {
                this.setState({ users });
            });

        const tab = document.querySelector('.tabs')
        M.Tabs.init(tab);
    }

    loginHandler = (inputUser) => {
        login(inputUser)
        // console.log(this.state.users);

    }



    render() {

        return (
            <Fragment>
                <div class="row searchMargin">
                    <LoginDescriptionItem />
                    <div class="col s12 m6">
                        <div class="card">
                            <div class="card-content">
                                <div class="row">
                                    <div class="col s12">
                                        <ul class="tabs">
                                            <li class="tab"><a class="active" href="#test1">Login</a></li>
                                            <li class="tab"><a href="#test2">Register</a></li>
                                        </ul>
                                    </div>
                                    <div id="test1" class="col s12"><LoginItem loginHandler={this.loginHandler} /></div>
                                    <div id="test2" class="col s12"><RegisterItem /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export { AuthenticationPage };
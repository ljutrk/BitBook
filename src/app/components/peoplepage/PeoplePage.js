import React, { Component, Fragment } from 'react';
import { PeoplePageItem } from './PeoplePageItem';
import { userService } from '../../../services/UserService';
import "./peoplePage.css";
import { Loader } from "../../partials/Loader";
class PeoplePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            searchValue: "",
            filteredUsers: [],
            pageReady: false
        }
    }

    componentDidMount() {
        userService.fetchUsers()
            .then(users => {
                this.setState({ users });
                this.setState({ filteredUsers: users });
                this.setState({ pageReady: true });
            });

    }

    searchHandler = (event) => {
        const searchedUsers = this.state.users.filter(user => (user.name).toLowerCase().includes((event.target.value).toLowerCase()));
        this.setState({ searchValue: event.target.value });
        this.setState({ filteredUsers: searchedUsers });
    }

    render() {

        if (!this.state.pageReady) {
            return <Loader />
        }

        return (
            <Fragment>
                <div className="row searchMargin">
                    <nav className="#42a5f5 white lighten-1 hoverable">
                        <div className="nav-wrapper">
                            <div className="input-field">
                                <input onChange={this.searchHandler} value={this.state.searchValue} id="search" type="search" placeholder="Search" required />
                                <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                                <i className="material-icons">close</i>
                            </div>
                        </div>
                    </nav>
                </div>
                {this.state.filteredUsers.length !== 0 ? this.state.filteredUsers.map(user => <PeoplePageItem user={user} key={user.id} />) : <h1>No users!</h1>}
            </Fragment>
        );
    }
}

export { PeoplePage };
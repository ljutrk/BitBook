import React, { Component, Fragment } from 'react';
import { PeoplePageItem } from './PeoplePageItem';
import { userService } from '../../../services/UserService';
import "./peoplePage.css";
class PeoplePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            searchValue: "",
            filteredUsers: []
        }
    }

    componentDidMount() {
        userService.fetchUsers()
            .then(users => {
                this.setState({ users });
                this.setState({ filteredUsers: users });
            });

    }

    searchHandler = (event) => {
        const searchedUsers = this.state.users.filter(user => (user.name).toLowerCase().includes((event.target.value).toLowerCase()));
        this.setState({ searchValue: event.target.value });
        this.setState({ filteredUsers: searchedUsers });
    }

    render() {
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
                {this.state.filteredUsers.map(user => <PeoplePageItem user={user} key={user.id} />)}

            </Fragment>
        );
    }
}

export { PeoplePage };
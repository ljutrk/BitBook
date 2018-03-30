import React, { Component, Fragment } from 'react';
import { PeoplePageItem } from './PeoplePageItem';


class PeoplePage extends Component {
    render() {
        return (
            <Fragment>
                <div className="row searchMargin">
                    <nav className="#42a5f5 blue lighten-1 hoverable">
                        <div className="nav-wrapper">
                            <div className="input-field">
                                <input id="search" type="search" placeholder="Search" required />
                                <label className="label-icon" for="search"><i className="material-icons">search</i></label>
                                <i className="material-icons">close</i>
                            </div>

                        </div>
                    </nav>
                </div>
                <PeoplePageItem />

            </Fragment>
        );
    }
}

export { PeoplePage };
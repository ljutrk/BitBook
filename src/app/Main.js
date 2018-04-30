import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { FeedPage } from './components/feedpage/FeedPage';
import { PeoplePage } from './components/peoplepage/PeoplePage';
import { ProfilePage } from './components/profilepage/ProfilePage';
import { PostDetailsPage } from "../app/components/postDetailsPage/PostDetailsPage";
import { UserProfilePage } from "./components/profilepage/UserProfilePage";
import { isAuthenticated } from '../shared/utils';
import AuthenticationPage from './components/authentication/AuthenticationPage';

class Main extends Component {
    render() {
        if (!isAuthenticated()) {
            return (
                <main className="container-main">
                    <AuthenticationPage />
                </main>)
        }
        return (
            <main className="container-main">
                <Switch>
                    {/* <Route exact path='/login' component={AuthenticationPage} /> */}
                    <Route path='/post/:type/:id' component={PostDetailsPage} />
                    <Route path='/users/:id' component={UserProfilePage} />
                    <Route path='/people' component={PeoplePage} />
                    <Route path='/profile' component={ProfilePage} />
                    <Route path='/' component={FeedPage} />
                </Switch>
            </main>
        );
    }
}

export { Main };
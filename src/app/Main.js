import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { FeedPage } from './components/feedpage/FeedPage';
import { PeoplePage } from './components/peoplepage/PeoplePage';
import { ProfilePage } from './components/profilepage/ProfilePage';
import { PostDetailsPage } from "../app/components/postDetailsPage/PostDetailsPage";
import { UserProfilePage } from "./components/profilepage/UserProfilePage";
import AuthenticationPage from './components/authentication/AuthenticationPage';
import WithoutAuth from './validate/WithoutAuth';
import WithAuth from './validate/WithAuth';

class Main extends Component {

    render() {
        return (
            <main className="container-main">
                <Switch>
                    <Route exact path='/login' component={WithoutAuth(AuthenticationPage)} />
                    <Route path='/post/:type/:id' component={WithAuth(PostDetailsPage)} />
                    <Route path='/users/:id' component={WithAuth(UserProfilePage)} />
                    <Route path='/people' component={WithAuth(PeoplePage)} />
                    <Route path='/profile' component={WithAuth(ProfilePage)} />
                    <Route path='/' component={WithAuth(FeedPage)} />
                </Switch>
            </main>
        );
    }
}

export { Main };
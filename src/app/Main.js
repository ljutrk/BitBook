import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { FeedPage } from './components/feedpage/FeedPage';
import { PeoplePage } from './components/peoplepage/PeoplePage';
import { ProfilePage } from './components/profilepage/ProfilePage';
import { PostDetailsPage } from "../app/components/postDetailsPage/PostDetailsPage";
import { UserProfilePage } from "../app/components/profilepage/UserProfilePage";

class Main extends Component {

    render() {
        return (
            <main className="container-main">
                <Switch>
                    <Route path='/post/:type/:id' component={PostDetailsPage} />
                    <Route path='/people/:id' component={UserProfilePage} />
                    <Route path='/people' component={PeoplePage} />
                    <Route path='/profile' component={ProfilePage} />
                    <Route path='/' component={FeedPage} />
                </Switch>
            </main>
        );
    }
}

export { Main };
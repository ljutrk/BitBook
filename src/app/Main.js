import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { FeedPage } from './components/feedpage/FeedPage';
import { PeoplePage } from './components/peoplepage/PeoplePage';
import { ProfilePage } from './components/profilepage/ProfilePage';
import { PostDetailsPage } from "../app/components/postDetailsPage/PostDetailsPage";

class Main extends Component {

    render() {
        return (
            <main className="container">
                <Switch>
                    <Route exact path='/' component={FeedPage} />
                    <Route exact path='/people' component={PeoplePage} />
                    <Route exact path='/profile' component={ProfilePage} />
                    <Route path='/texts/:id' component={PostDetailsPage} />
                    <Route path='/images/:id' component={PostDetailsPage} />
                    <Route path='/videos/:id' component={PostDetailsPage} />
                </Switch>
            </main>
        );
    }
}

export { Main };
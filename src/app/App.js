import React, { Component } from 'react';
import './App.css';
import { FeedPage } from './components/feedpage/FeedPage';

class App extends Component {
  render() {
    return (
      <div className="container">
        <FeedPage />
      </div>
    );
  }
}

export default App;

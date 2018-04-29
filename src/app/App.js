import React, { Component, Fragment } from 'react';
import './App.css';
import Header from './partials/Header';
import { Footer } from './partials/Footer';
import { Main } from './Main';
import { Authenticate } from './validate/Authenticate';

class App extends Component {
  render() {
    return (
      <Fragment >
        <Header />
        <Authenticate />
        <Footer />
      </Fragment >
    );
  }
}

export default App;

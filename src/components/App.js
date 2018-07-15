import React, { Component } from 'react';
import logo from './../logo.svg';
import './../App.css';
import PropTypes from 'prop-types'
import MarketPage from '../containers/marketContainer';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <MarketPage />
      </div>
    );
  }
}

export default App;

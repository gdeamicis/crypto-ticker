import React, { Component } from 'react';
import logo from './../logo.svg';
import './../App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MarketPage from '../containers/marketContainer';
import LiquidityPage from '../containers/liquidityContainer';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
            <Link to={`/`}>
              Market Overview
          </Link>
            <Link to={`/liquidity`}>
              Liquidity
          </Link>
          </header>
          <div>
            <Route path="/" component={MarketPage} />
            <Route path="/liquidity" component={LiquidityPage} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

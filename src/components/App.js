import React, { Component } from 'react';
import logo from './../logo.svg';
import './../App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MarketPage from '../containers/marketContainer';
import LiquidityPage from '../containers/liquidityContainer';
import { getTickerData } from '../actions/marketActions';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const linkStyles = {
  color: 'lightskyblue',
  textDecoration: 'none',
  margin: '0px 10px',
  float: 'left'
}

class App extends Component {

  state = {
    coinNumber: '100',
  };

  componentDidMount() {
    console.log('this.props: ', this.props);
    this.props.store.dispatch(getTickerData(this.state.coinNumber));
  }

  handleChange = event => {
    this.setState({ coinNumber: event.target.value });
    this.props.store.dispatch(getTickerData(event.target.value));
  };

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Crypto-ticker</h1>
            <Link
              to={`/`}
              style={linkStyles}>
              Market Overview
          </Link>
            <Link
              to={`/liquidity`}
              style={linkStyles}
            >
              Liquidity
          </Link>
            <Select
              value={this.state.coinNumber}
              onChange={this.handleChange}
              style={{
                float: 'right',
                color: 'lightskyblue',
                margin: '0px 10px',
              }}
            >
              <MenuItem value='10'>10</MenuItem>
              <MenuItem value='50'>50</MenuItem>
              <MenuItem value='100'>100</MenuItem>
            </Select>
          </header>
          <div>
            <Route exact path="/" component={MarketPage} />
            <Route path="/liquidity" component={LiquidityPage} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

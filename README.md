# Crypto Ticker

React-redux webapp to show crypto assets data from `coinmarketcap`

## Requirements

Node version: v6.11.0

React version: ^16.4.1
 - React router dom: ^4.3.1
 
Redux version: ^4.0.0
 - React redux: ^5.0.7
 - Redux thunk: ^2.3.0
 
React easy chart: ^1.0.0
 
## Install

1. Clone the git repo - `git clone https://github.com/gdeamicis/crypto-ticker.git`
2. `cd crypto-ticker` and run `npm install`
3. run `npm start` to start up the webapp

## Endpoints

`/`: Market overview page

`/liquidity`: Liquidity page

## Improvements

- Implement pagination on market table

- Get all coins from coinmarketcap through pagination

## Trade-offs

- Chart tooltip implemented outside the chart to increased visibility

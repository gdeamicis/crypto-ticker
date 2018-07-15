import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { getTickerData } from '../actions/marketActions';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

class MarketPage extends Component {

    componentDidMount() {
        this.props.dispatch(getTickerData());
    }

    render() {
        return (
            <div>
                <h2>Market Overview</h2>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell numeric>Rank</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Price change (24h)</TableCell>
                            <TableCell>Market Cap</TableCell>
                            <TableCell>Volume (24h)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.data.map(coin => {
                            return (
                                <TableRow key={coin.id}>
                                    <TableCell numeric>
                                        {coin.rank}
                                    </TableCell>
                                    <TableCell>{coin.name}</TableCell>
                                    <TableCell>${coin.quotes.USD.price.toLocaleString('en')}</TableCell>
                                    <TableCell>{coin.quotes.USD.percent_change_24h}%</TableCell>
                                    <TableCell>${parseFloat(coin.quotes.USD.market_cap).toLocaleString('en')}</TableCell>
                                    <TableCell>${parseFloat(coin.quotes.USD.volume_24h).toLocaleString('en')}</TableCell>
                                </TableRow>
                            );
                        })}

                    </TableBody>
                </Table>
            </div>
        );
    }
}

MarketPage.propTypes = {
    dispatch: PropTypes.func.isRequired,
    data: PropTypes.array
}

export default MarketPage;
import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { ScatterplotChart } from 'react-easy-chart';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class LiquidityPage extends Component {
    constructor(props) {
        super(props);

        this.mouseOverHandler = this.mouseOverHandler.bind(this);
        this.mouseMoveHandler = this.mouseMoveHandler.bind(this);
        this.handleResize = this.handleResize.bind(this);

        this.state = {
            showToolTip: false,
            tooltipName: '',
            tooltipMarketCap: '',
            tooltipVolume: '',
            tooltipPriceChange: '',
            windowWidth: 400,
            componentWidth: 1000
        };
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    handleResize() {
        this.setState({
            windowWidth: window.innerWidth - 100,
            componentWidth: this.refs.component.offsetWidth
        });
    }

    mouseOverHandler(d, e) {
        this.setState({
            showToolTip: true,
            tooltipName: d.type,
            tooltipMarketCap: d.x,
            tooltipVolume: d.y,
            tooltipPriceChange: d.z
        });
    }

    mouseMoveHandler(e) {
        if (this.state.showToolTip) {
            this.setState({ top: `${e.y - 10}px`, left: `${e.x + 10}px` });
        }
    }

    createTooltip() {
        return (
            <div>
                <Paper elevation={2}>
                    <Typography variant="headline" component="h3">
                        {this.state.showToolTip ? this.state.tooltipName : 'Hover over a coin to see its data'}
                    </Typography>
                        <Typography component="p">
                            Market Cap: ${ this.state.showToolTip ? this.state.tooltipMarketCap.toLocaleString('en') : '-' }
                        </Typography>
                        <Typography component="p">
                            Volume: ${ this.state.showToolTip ? this.state.tooltipVolume.toLocaleString('en') : '-'}
                        </Typography>
                        <Typography component="p">
                            Price change (24h): ${ this.state.showToolTip ? this.state.tooltipPriceChange.toLocaleString('en') : '-' }
                        </Typography>
                </Paper>
            </div>
        );
    }

    render() {
        const data = this.props.data.map(coin => {
            return {
                type: coin.name,
                x: coin.quotes.USD.market_cap,
                y: coin.quotes.USD.volume_24h,
                z: coin.quotes.USD.price * coin.quotes.USD.percent_change_24h / (100 + coin.quotes.USD.percent_change_24h)
            }

        })
        return (
            <div>
                <h2>Liquidity</h2>
                {this.createTooltip()}
                <div ref="component">
                    <ScatterplotChart
                        data={data}
                        axes
                        axisLabels={{ x: 'Market Cap', y: 'Volume' }}
                        grid
                        verticalGrid
                        mouseOverHandler={this.mouseOverHandler}
                        mouseOutHandler={this.mouseOutHandler}
                        mouseMoveHandler={this.mouseMoveHandler}
                        width={this.state.componentWidth}
                        height={this.state.componentWidth / 2.5}
                    />
                </div>

            </div>
        );
    }
}

LiquidityPage.propTypes = {
    data: PropTypes.array
}

export default LiquidityPage;
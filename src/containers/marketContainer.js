import { connect } from 'react-redux'
import MarketPage from '../components/MarketPage';

function mapStateToProps(state) {
    return state.marketReducer;
  }

export default connect(
  mapStateToProps
)(MarketPage);
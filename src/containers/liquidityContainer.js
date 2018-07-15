import { connect } from 'react-redux'
import LiquidityPage from '../components/LiquidityPage';

function mapStateToProps(state) {
    return state.marketReducer;
  }

export default connect(
  mapStateToProps
)(LiquidityPage);
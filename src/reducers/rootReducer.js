import { combineReducers } from 'redux';
import marketReducer from './marketReducer';
import liquidityReducer from './liquidityReducer';

export default combineReducers({
    marketReducer,
    liquidityReducer
})
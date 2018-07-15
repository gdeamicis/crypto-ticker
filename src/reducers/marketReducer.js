import {
    FETCHING_DATA,
    FETCHING_SUCCESSFULL,
    FETCHING_ERROR
} from '../actions/marketActions';

const initialState = {
    isFetching: false,
    data: []
}

const marketReducer = (state = initialState, action) => {

    switch (action.type) {
        case FETCHING_DATA:
            return Object.assign({}, state, {
                isFetching: true
            });
        case FETCHING_SUCCESSFULL:
            return Object.assign({}, state, {
                isFetching: false,
                data: action.data
            });
        case FETCHING_ERROR:
            return Object.assign({}, state, {
                isFetching: false
            });
        default:
            return state;
    }
}

export default marketReducer;
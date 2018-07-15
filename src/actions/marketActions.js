import fetch from 'cross-fetch';

export const FETCHING_DATA = 'FETCHING_DATA';
export const FETCHING_SUCCESSFULL = 'FETCHING_SUCCESSFULL';
export const FETCHING_ERROR = 'FETCHING_ERROR';

export function fetchData() {
    console.log('fetchData');
    return {
        type: FETCHING_DATA
    }
}

export function fetchSuccess(json) {
    console.log('fetchSuccess');
    console.log(json);
    return {
        type: FETCHING_SUCCESSFULL,
        data: json.data
    }
}

export function fetchFailed() {
    console.log('fetchFailed');
    return {
        type: FETCHING_ERROR
    }
}

export function getTickerData(number) {
    console.log('getTickerData');

    return dispatch => {
        console.log('dispatch(fetchData)');
        dispatch(fetchData());

        return fetch(`https://api.coinmarketcap.com/v2/ticker/?limit=${number}&structure=array&sort=rank`)
            .then(response => response.json(),
                error => dispatch(fetchFailed()))
            .then(json => dispatch(fetchSuccess(json)))
    }
}

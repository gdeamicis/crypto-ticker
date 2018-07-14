import React from 'react';
import './index.css';
import App from './components/App';
import rootReducer from './reducers/rootReducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render } from 'react-dom';

const store = createStore(rootReducer);

render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById('root')
)

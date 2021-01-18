import {applyMiddleware,compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers/index';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    reducers, 
    composeEnhancer(applyMiddleware(thunk))
    );
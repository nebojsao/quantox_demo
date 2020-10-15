import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { rootReducer } from './reducers/rootReducer';

export const initStore = () => {
    let store;
    if (process.env.NODE_ENV === 'production') {
        store = createStore(rootReducer, applyMiddleware(thunk));
    } else {
        const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
        store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk, createLogger())));
    }
    return store;
};

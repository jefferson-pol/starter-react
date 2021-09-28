import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import createRootReducer from './rootReducer';

export const history = createBrowserHistory();

export default function configureStore( preoladedState){
    const middleware = routerMiddleware(history);
    const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
    const enhacer = composeEnhancers(
        applyMiddleware(middleware,thunk)
    );

    const store= createStore(
        createRootReducer(history),
        preoladedState,
        enhacer
    )
    return store;
}

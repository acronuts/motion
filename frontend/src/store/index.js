import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import { authReducer } from './reducers/authReducer';
import thunk from 'redux-thunk'
import { postReducer } from './reducers/postReducer'
import { friendReducer } from './reducers/friendReducer'

const rootReducer = combineReducers({
    authReducer, 
    postReducer,
    friendReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)));



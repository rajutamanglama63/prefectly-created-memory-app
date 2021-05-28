import {createStore, combineReducers, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { memoriesReducers } from './reducers/memoriesReducers';

const middleware = [thunk];

const reducers = combineReducers({
    memories : memoriesReducers
});

const store = createStore(reducers, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
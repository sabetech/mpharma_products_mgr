import {createStore, applyMiddleware} from 'redux';
import reducer from './reducers/reducer';
import thunk from "redux-thunk";


//initial state goes here
const initialState = {};
export const store = createStore(reducer, initialState, applyMiddleware(thunk));


import {createStore, compose, combineReducers} from 'redux';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

import todo from './addTodo';

const reducer = combineReducers({
  todo
});
const store = createStore(reducer, composeEnhancers());

store.subscribe(() => store.getState());

export {
  store
}

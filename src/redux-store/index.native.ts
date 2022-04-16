import { applyMiddleware, compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';

import rootReducerObj from './Reducers/rootReducer';

const init = () =>
  createStore(
    rootReducerObj,
    compose(composeWithDevTools(applyMiddleware(thunk))),
  );

const store = init();

export default store;

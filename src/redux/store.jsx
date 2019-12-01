// external modules
import { createStore, applyMiddleware, compose } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';

import { channels } from './data';
import reducer from './ducks';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = composeEnhancers(applyMiddleware(reduxPromise, logger));

// State
const initialState = {
  channels,
  selectedChannel: channels[0],
  currentUser: prompt("What is your username?") || `anonymous${Math.floor(10 + (Math.random() * 90))}`,
};

// store
export const store = createStore(
  reducer,
  initialState,
  middlewares
);

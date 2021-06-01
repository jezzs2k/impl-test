import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk from 'redux-thunk';

import {repoReducer, githubUserReducer, stargazerReducer} from './Reducers';

const rootReducer = combineReducers({
  githubRepo: repoReducer,
  githubUser: githubUserReducer,
  stargazer: stargazerReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  {},
  composeEnhancers(applyMiddleware(thunk)),
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

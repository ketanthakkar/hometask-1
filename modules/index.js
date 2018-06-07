import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import {
  usersReduces,
  movieReducer,
  usersSaga
} from './users';

function* rootSaga() {
  yield all([
    usersSaga(),
  ]);
}

const rootReducer = combineReducers({
  users: usersReduces,
  movies: movieReducer,
});

export {
  rootReducer,
  rootSaga,
};

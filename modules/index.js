import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import {
  usersReduces,
  movieReducer,
  movieByIdReducer,
  movieByGenre,
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
  movieById: movieByIdReducer,
  movieByGenre: movieByGenre,
});

export {
  rootReducer,
  rootSaga,
};

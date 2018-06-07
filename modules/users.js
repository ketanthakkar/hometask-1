import { call, put, all, takeLatest } from 'redux-saga/effects';

// Actions
const FETCH_USERS = 'users/FETCH';
const FETCH_USER_BY_ID = 'users/FETCH_BY_ID';
const UPDATE = 'users/UPDATE';
const UPDATE_CURRENT_USER = 'users/UPDATE_CURRENT_USER';
const GET_DEFAULT_MOVIE = 'GET_DEFAULT_MOVIE';

// Action Creators
export const fetchDefaultMovie = () => ({
  type:GET_DEFAULT_MOVIE,
})

export const fetchUsers = () => ({
  type: FETCH_USERS,
});
export const fetchUserById = userId => ({
  type: FETCH_USER_BY_ID,
  payload: userId,
});

export const updateUsers = users => ({
  type: UPDATE,
  payload: users,
});

export const updateCurrentUser = user => ({
  type: UPDATE_CURRENT_USER,
  payload: user,
});

// Sagas
export function* fetchDefaultMovieAsync() {
  const response = yield call(fetch, 'http://react-cdp-api.herokuapp.com/movies');
  const movies = yield response.json();
  // yield put(fetchDefaultMovie())
  return movies;
}
export function* watchFetchDefaultMovie() {
  yield takeLatest(GET_DEFAULT_MOVIE, fetchDefaultMovieAsync)
}

export function* fetchUsersAsync() {
  const response = yield call(fetch, 'http://jsonplaceholder.typicode.com/users');
  const users = yield response.json();
  yield put(updateUsers(users));
}
export function* watchFetchUsers() {
  yield takeLatest(FETCH_USERS, fetchUsersAsync);
}

export function* fetchUserByIdAsync(action) {
  const response = yield call(fetch, `http://jsonplaceholder.typicode.com/users/${action.payload}`);
  const user = yield response.json();

  yield put(updateCurrentUser(user));
}
export function* watchFetchUserById() {
  yield takeLatest(FETCH_USER_BY_ID, fetchUserByIdAsync);
}

// Users Saga
export function* usersSaga() {
  yield all([
    watchFetchUsers(),
    watchFetchUserById(),
    watchFetchDefaultMovie(),    
  ]);
}

// Initial state
const INITIAL_STATE = {
  loading: false,
  items: [],
};

// Reducer
export const usersReduces = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        loading: true,
      };
    case UPDATE:
      return {
        ...state,
        loading: false,
        items: action.payload,
      };
    case UPDATE_CURRENT_USER:
      return {
        ...state,
        loading: false,
        current: action.payload,
      };
    default:
      return state;
  }
};

export const movieReducer = (state = {data:[],}, action = {}) => {
  switch (action.type) {
    case GET_DEFAULT_MOVIE:
      return {
        ...state,
        movie: action.payload,
      }
      break;
    default:
      return state;
  }
}

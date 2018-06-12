import { call, put, all, takeLatest } from 'redux-saga/effects';

// Actions
const FETCH_USERS = 'users/FETCH';
const FETCH_USER_BY_ID = 'users/FETCH_BY_ID';
const UPDATE = 'users/UPDATE';
const UPDATE_CURRENT_USER = 'users/UPDATE_CURRENT_USER';
const GET_DEFAULT_MOVIE = 'GET_DEFAULT_MOVIE';
const GET_MOVIE = 'GET_MOVIE';
const GET_MOVIE_BY_ID = 'GET_MOVIE_BY_ID';
const GET_FILM = 'GET_FILM';

// Action Creators
export const fetchDefaultMovie = params => ({
  type:GET_DEFAULT_MOVIE,
  payload: params,
})

export const getMovie = (movie) => ({
  type:GET_MOVIE,
  payload: movie,
})

export const movieById = id => ({
  type: GET_MOVIE_BY_ID,
  payload: id
})

export const getMovieById = movie => ({
  type:GET_FILM,
  payload: movie,
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
export function* fetchMovieByIdAsync(action) {
  const response = yield call(fetch, `http://react-cdp-api.herokuapp.com/movies${action.payload}`);
  const movies = yield response.json();

  yield put(getMovieById(movies));
}
export function* watchMovieById() {
  yield takeLatest(GET_MOVIE_BY_ID, fetchMovieByIdAsync);
}
export function* fetchDefaultMovieAsync(action) {
  const response = yield call(fetch, `http://react-cdp-api.herokuapp.com/movies${action.payload}`);
  const movies = yield response.json();
  yield put(getMovie(movies))

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

// Users Sagas
export function* usersSaga() {
  yield all([
    watchFetchUsers(),
    watchFetchUserById(),
    watchFetchDefaultMovie(),   
    watchMovieById(), 
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

export const movieReducer = (state = {data:[],}, action) => {
  switch (action.type) {
    case GET_DEFAULT_MOVIE:
      return {
        ...state,
        movie: action.payload,
      }
      break;
    case GET_MOVIE:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state;
  }
}

export const movieByIdReducer = (state = {},action) => {
  switch (action.type) {
    case GET_MOVIE_BY_ID:
      return {
        ...state, 
        movie:action.payload,
      }
      break;
    case GET_FILM:
      return {
        ...state,
        ...action.payload,
      }
      break;
    default:
      return state;
  }
}

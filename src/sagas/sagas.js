import 'regenerator-runtime/runtime';
import {
  takeEvery, put, call, delay,
} from 'redux-saga/effects';
import * as API from '../services/api';
import {
  BOOKLIST_REQUESTED,
  BOOKLIST_SUCCEEDED,
  LOGIN_REQUESTED,
  LOGIN_SUCCEEDED,
  NEW_BOOK_POST_REQUESTED,
  NEW_BOOK_POST_SUCCEEDED,
} from '../actions/actionTypes';

const jwtDecode = require('jwt-decode');

function* getBookList() {
  try {
    yield delay(100);
    const url = `${process.env.FOB_SERVER}/nospoiler`;
    const data = yield call(API.getData, url);
    data.reverse();
    yield put({
      type: BOOKLIST_SUCCEEDED,
      payload: data,
    });
  } catch (error) {
    console.log(error); //eslint-disable-line
  }
}

function* postNewBook(action) {
  try {
    yield delay(100);
    const url = `${process.env.FOB_SERVER}/nospoiler`;
    const response = yield call(API.postData, url, action.payload);
    console.log('response: ', response);
    yield put({
      type: NEW_BOOK_POST_SUCCEEDED,
      payload: 'nothing',
    });
  } catch (error) {
    console.log(error); //eslint-disable-line
  }
}

function* sendLoginCreds(action) {
  try {
    yield delay(100);
    const url = `${process.env.FOB_SERVER}/authentication`;
    const data = yield call(API.sendLogin, url, action.payload);
    const decodedToken = jwtDecode(data.accessToken);
    localStorage.setItem('jwtToken', data.accessToken);
    localStorage.setItem('username', decodedToken.username);
    yield put({
      type: LOGIN_SUCCEEDED,
      payload: decodedToken,
    });
  } catch (error) {
    console.log(error); //eslint-disable-line
  }
}

export default function* rootSaga() {
  yield takeEvery(BOOKLIST_REQUESTED, getBookList);
  yield takeEvery(LOGIN_REQUESTED, sendLoginCreds);
  yield takeEvery(NEW_BOOK_POST_REQUESTED, postNewBook);
}

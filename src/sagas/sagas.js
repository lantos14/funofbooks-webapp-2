import 'regenerator-runtime/runtime';
import {
  takeEvery, put, call, delay,
} from 'redux-saga/effects';
import * as API from '../services/api';
import { BOOKLIST_REQUESTED, BOOKLIST_SUCCEEDED, LOGIN_REQUESTED } from '../actions/actionTypes';

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

function* sendLoginCreds(action) {
  try {
    yield delay(100);
    const url = `${process.env.FOB_SERVER}/authentication`;
    const data = yield call(API.sendLogin, url, action.payload);
    console.log('data: ', data);
  } catch (error) {
    console.log(error); //eslint-disable-line
  }
}

export default function* rootSaga() {
  yield takeEvery(BOOKLIST_REQUESTED, getBookList);
  yield takeEvery(LOGIN_REQUESTED, sendLoginCreds);
}

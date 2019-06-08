import 'regenerator-runtime/runtime';
import {
  takeEvery, put, call, delay,
} from 'redux-saga/effects';
import * as API from '../services/api';
import mockResponse from '../store/mockResponse';

function* getBookList() {
  try {
    yield delay(100);
    const url = `${process.env.FOB_SERVER}/nospoiler`;
    // const data = yield call(API.getData, url);
    // data.reverse();
    yield put({
      type: 'BOOKLIST_SUCCEEDED',
      // payload: data,
      payload: mockResponse.data.reverse(),
    });
  } catch (error) {
    console.log(error); //eslint-disable-line
  }
}

export default function* rootSaga() {
  yield takeEvery('BOOKLIST_REQUESTED', getBookList);
}

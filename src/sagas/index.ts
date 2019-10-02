import { all, fork } from '@redux-saga/core/effects';
import { watchSearch } from './spotify';
import { watchAdd, watchGet } from './top-100';

const rootSaga = function*() {
  yield all([fork(watchSearch)]);
  yield all([fork(watchAdd)]);
  yield all([fork(watchGet)]);
};

export default rootSaga;

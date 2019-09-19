import { all, fork } from '@redux-saga/core/effects';
import { watchSearch } from './spotify';

const rootSaga = function*() {
  yield all([fork(watchSearch)]);
};

export default rootSaga;

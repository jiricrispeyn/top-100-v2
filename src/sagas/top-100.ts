import { AnyAction } from 'redux';
import { SagaIterator } from 'redux-saga';
import { call, takeLatest } from 'redux-saga/effects';

import actions from '../actions';
import { apiCall } from './utils';

export const get = function*(action: AnyAction): SagaIterator {
  console.log({ action });
};

export const watchGet = function*(): SagaIterator {
  yield takeLatest(actions.top100.uiActionTypes.GET, get);
};

export const add = function*(action: AnyAction): SagaIterator {
  console.log({ action });
};

export const watchAdd = function*(): SagaIterator {
  yield takeLatest(actions.top100.uiActionTypes.ADD, add);
};

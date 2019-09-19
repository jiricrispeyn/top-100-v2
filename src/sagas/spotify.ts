import { AnyAction } from 'redux';
import { SagaIterator } from 'redux-saga';
import { takeLatest } from 'redux-saga/effects';

import actions from '../actions';
// import { apiCall } from './utils';

export const search = function*(action: AnyAction): SagaIterator {
  const { query, type } = action.payload;

  console.log({ query, type });
};

export const watchSearch = function*(): SagaIterator {
  yield takeLatest(actions.spotify.uiActionTypes.SEARCH, search);
};

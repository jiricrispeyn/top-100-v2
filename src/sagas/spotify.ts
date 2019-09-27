import { AnyAction } from 'redux';
import { SagaIterator } from 'redux-saga';
import { call, takeLatest } from 'redux-saga/effects';

import actions from '../actions';
import { apiCall } from './utils';
import { search as searchFn } from '../api/queries';

export const searchApiCall = apiCall.bind(
  null,
  actions.spotify.apiActions.search,
  searchFn
);

export const search = function*(action: AnyAction): SagaIterator {
  const { query, type } = action.payload;

  console.log({ query, type });

  yield call(searchApiCall, { query, type });
};

export const watchSearch = function*(): SagaIterator {
  yield takeLatest(actions.spotify.uiActionTypes.SEARCH, search);
};

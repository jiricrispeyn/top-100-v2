import { put, call } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { ApiActions } from '../actions/utils';

export const apiCall = function*(
  apiAction: ApiActions,
  apiFn: any,
  args: object
): SagaIterator {
  const requestAction = apiAction.request(args);

  yield put(requestAction);

  try {
    const response = yield call(apiFn, args);

    yield put(apiAction.success(args, response));

    return { response };
  } catch (error) {
    const { name, message } = error;

    yield put(apiAction.failure(args, { name, message }));

    return { error };
  }
};

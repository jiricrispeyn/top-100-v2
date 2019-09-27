import { combineReducers, AnyAction } from 'redux';

import actions from '../actions';

const initialSearchState = {
  status: 'empty',
  data: [],
  error: null,
};

export const search = (state = initialSearchState, action: AnyAction) => {
  switch (action.type) {
    case actions.spotify.apiActionTypes.SEARCH.REQUEST: {
      return {
        status: 'loading',
        data: [],
        error: null,
      };
    }
    case actions.spotify.apiActionTypes.SEARCH.SUCCESS: {
      const { response } = action.payload;

      return {
        status: 'initialized',
        data: response,
        error: null,
      };
    }
    case actions.spotify.apiActionTypes.SEARCH.FAILURE: {
      const { error } = action.payload;

      return {
        status: 'failed',
        data: [],
        error,
      };
    }
    case actions.spotify.apiActionTypes.SEARCH.CACHED: {
      return state;
    }
    default:
      return state;
  }
};

export default combineReducers({ search });

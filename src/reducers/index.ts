import { combineReducers } from 'redux';

import spotify from './spotify';

const rootReducer = combineReducers({
  spotify,
});

export default rootReducer;

export interface AppState {}

import { AnyAction } from 'redux';
import {
  createUiActionType,
  createUiAction,
  createApiActionTypes,
  createApiActions,
  ApiActionTypes,
} from './utils';

interface SpotifyActionTypes {
  SEARCH: string;
}

interface SpotifyApiActionTypes {
  SEARCH: ApiActionTypes;
}

export const uiActionTypes: SpotifyActionTypes = {
  SEARCH: createUiActionType('SPOTIFY/SEARCH'),
};

export const uiActions = {
  search: (query: string, type: string): AnyAction =>
    createUiAction(uiActionTypes.SEARCH, { query, type }),
};

export const apiActionTypes: SpotifyApiActionTypes = {
  SEARCH: createApiActionTypes('SPOTIFY/SEARCH'),
};

export const apiActions = {
  search: createApiActions(apiActionTypes.SEARCH),
};

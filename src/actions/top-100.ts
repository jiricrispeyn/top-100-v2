import { AnyAction } from 'redux';
import {
  createUiActionType,
  createUiAction,
  createApiActionTypes,
  createApiActions,
  ApiActionTypes,
} from './utils';

interface SpotifyActionTypes {
  ADD: string;
}

interface SpotifyApiActionTypes {
  ADD: ApiActionTypes;
}

export const uiActionTypes: SpotifyActionTypes = {
  ADD: createUiActionType('TOP_100/ADD'),
};

export const uiActions = {
  add: (list: any[]): AnyAction => createUiAction(uiActionTypes.ADD, { list }),
};

export const apiActionTypes: SpotifyApiActionTypes = {
  ADD: createApiActionTypes('TOP_100/ADD'),
};

export const apiActions = {
  add: createApiActions(apiActionTypes.ADD),
};

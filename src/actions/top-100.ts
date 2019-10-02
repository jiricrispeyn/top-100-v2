import { AnyAction } from 'redux';
import {
  createUiActionType,
  createUiAction,
  createApiActionTypes,
  createApiActions,
  ApiActionTypes,
} from './utils';

interface Top100ActionTypes {
  ADD: string;
  GET: string;
}

interface Top100ApiActionTypes {
  ADD: ApiActionTypes;
  GET: ApiActionTypes;
}

export const uiActionTypes: Top100ActionTypes = {
  ADD: createUiActionType('TOP_100/ADD'),
  GET: createUiActionType('TOP_100/GET'),
};

export const uiActions = {
  add: (list: any[]): AnyAction => createUiAction(uiActionTypes.ADD, { list }),
  get: (): AnyAction => createUiAction(uiActionTypes.GET, {}),
};

export const apiActionTypes: Top100ApiActionTypes = {
  ADD: createApiActionTypes('TOP_100/ADD'),
  GET: createApiActionTypes('TOP_100/GET'),
};

export const apiActions = {
  add: createApiActions(apiActionTypes.ADD),
  get: createApiActions(apiActionTypes.GET),
};

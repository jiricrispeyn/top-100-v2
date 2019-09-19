import { AnyAction } from 'redux';
import { createUiActionType, createUiAction } from './utils';

interface PermissionActionTypes {
  SEARCH: string;
}

export const uiActionTypes: PermissionActionTypes = {
  SEARCH: createUiActionType('SPOTIFY/SEARCH'),
};

export const uiActions = {
  search: (query: string, type: string): AnyAction =>
    createUiAction(uiActionTypes.SEARCH, { query, type }),
};

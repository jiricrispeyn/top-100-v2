import { AnyAction } from 'redux';

export interface ApiActionTypes {
  REQUEST: string;
  SUCCESS: string;
  CACHED: string;
  FAILURE: string;
}

export interface ApiActions {
  request: (request: object) => AnyAction;
  success: (request: object, response: object) => AnyAction;
  cached: (request: object, response: object) => AnyAction;
  failure: (request: object, error: object) => AnyAction;
}

const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const CACHED = 'CACHED';
const FAILURE = 'FAILURE';

function createAction(type: string, payload: object = {}): AnyAction {
  return { type, payload };
}

export const createUiActionType = (type: string): string => `AAQ/UI/${type}`;

export const createUiAction = (type: string, payload?: object): AnyAction =>
  createAction(type, payload);

export const createApiActionTypes = (type: string): ApiActionTypes => {
  const apiActionType = `AAQ/API/${type}`;

  return {
    REQUEST: `${apiActionType}_${REQUEST}`,
    SUCCESS: `${apiActionType}_${SUCCESS}`,
    FAILURE: `${apiActionType}_${FAILURE}`,
    CACHED: `${apiActionType}_${CACHED}`,
  };
};

export const createApiActions = (actionTypes: ApiActionTypes): ApiActions => ({
  request: (request): AnyAction =>
    createAction(actionTypes.REQUEST, { request }),
  success: (request, response): AnyAction =>
    createAction(actionTypes.SUCCESS, { request, response }),
  cached: (request, response): AnyAction =>
    createAction(actionTypes.CACHED, { request, response }),
  failure: (request, error): AnyAction =>
    createAction(actionTypes.FAILURE, { request, error }),
});

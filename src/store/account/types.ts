import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';
import { IAccountData, IRootState } from '../../types';
import { AccountActions } from './actions';

type TAccountRequestAction = {
  type: typeof AccountActions.ACCOUNT_REQUEST;
}
type TAccountRequestSuccessAction = {
  type: typeof AccountActions.ACCOUNT_REQUEST_SUCCESS;
  account: IAccountData,
}
type TAccountRequestErrorAction = {
  type: typeof AccountActions.ACCOUNT_REQUEST_ERROR;
  error: string,
}

interface IAccountRequestAction {
  type: AccountActions.ACCOUNT_REQUEST;
}

interface IAccountRequestSuccessAction {
  type: AccountActions.ACCOUNT_REQUEST_SUCCESS;
  account: IAccountData,
}

interface IAccountRequestErrorAction {
  type: AccountActions.ACCOUNT_REQUEST_ERROR;
  error: string,
}

interface IActions {
  ACCOUNT_REQUEST: IAccountRequestAction,
  ACCOUNT_REQUEST_SUCCESS: IAccountRequestSuccessAction,
  ACCOUNT_REQUEST_ERROR: IAccountRequestErrorAction,
}

type TActions = IActions[keyof IActions];
type TThunkAction = ThunkAction<void, IRootState, unknown, Action<string>>;

export {
  TAccountRequestErrorAction,
  TAccountRequestSuccessAction,
  TAccountRequestAction,
  IAccountRequestAction,
  IAccountRequestSuccessAction,
  IAccountRequestErrorAction,
  IActions,
  TActions,
  TThunkAction,
};

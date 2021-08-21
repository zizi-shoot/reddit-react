import { IUser } from '../../types';
import { UserAction } from './actions';

type TUserRequestAction = {
  type: typeof UserAction.REQUEST,
  name: string,
}
type TUserRequestSuccessAction = {
  type: typeof UserAction.REQUEST_SUCCESS,
  name: string,
  user: IUser,
}
type TUserRequestErrorAction = {
  type: typeof UserAction.REQUEST_ERROR,
  name: string,
  error: string,
}

interface IUserRequestAction {
  type: UserAction.REQUEST,
  name: string,
}

interface IUserRequestSuccessAction {
  type: UserAction.REQUEST_SUCCESS,
  name: string,
  user: IUser,
}

interface IUserRequestErrorAction {
  type: UserAction.REQUEST_ERROR,
  name: string,
  error: string,
}

interface IUserActions {
  REQUEST: IUserRequestAction,
  REQUEST_SUCCESS: IUserRequestSuccessAction,
  REQUEST_ERROR: IUserRequestErrorAction,
}

type TUserActions = IUserActions[keyof IUserActions];

export {
  TUserRequestAction,
  TUserRequestSuccessAction,
  TUserRequestErrorAction,
  IUserRequestAction,
  IUserRequestSuccessAction,
  IUserRequestErrorAction,
  TUserActions,
};

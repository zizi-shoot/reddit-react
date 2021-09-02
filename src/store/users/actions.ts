import { ActionCreator } from 'redux';
import axios from 'axios';
import { TUserRequestAction, TUserRequestErrorAction, TUserRequestSuccessAction } from './types';
import { IUser } from '../../types';
import { TThunkAction } from '../types';

enum UserAction {
  REQUEST = 'USER_REQUEST',
  REQUEST_SUCCESS = 'USER_REQUEST_SUCCESS',
  REQUEST_ERROR = 'USER_REQUEST_ERROR',
}

const userRequest: ActionCreator<TUserRequestAction> = (name: string) => ({
  type: UserAction.REQUEST,
  name,
});
const userRequestSuccess: ActionCreator<TUserRequestSuccessAction> = (name: string, user: IUser) => ({
  type: UserAction.REQUEST_SUCCESS,
  name,
  user,
});
const userRequestError: ActionCreator<TUserRequestErrorAction> = (name: string, error: string) => ({
  type: UserAction.REQUEST_ERROR,
  name,
  error,
});

const userRequestAsync = (username: string): TThunkAction => async (dispatch, getState) => {
  if (getState().token.value === 'undefined' || !getState().token.value) return;
  try {
    dispatch(userRequest(username));

    const { data: { data: { icon_img: avatar } } } = await axios.get(
      `https://oauth.reddit.com/user/${username}/about?raw_json=1`,
      { headers: { Authorization: `bearer ${getState().token.value}` } },
    );

    dispatch(userRequestSuccess(username, { name: username, avatar }));
  } catch (error) {
    dispatch(userRequestError(username, String(error)));
  }
};

export { UserAction, userRequestAsync };

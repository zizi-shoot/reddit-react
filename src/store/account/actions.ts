import { ActionCreator } from 'redux';
import axios from 'axios';
import { IAccountData } from '../../types';
import { TAccountRequestAction, TAccountRequestErrorAction, TAccountRequestSuccessAction } from './types';
import { TThunkAction } from '../types';

enum AccountAction {
  REQUEST = 'ACCOUNT_REQUEST',
  REQUEST_SUCCESS = 'ACCOUNT_REQUEST_SUCCESS',
  REQUEST_ERROR = 'ACCOUNT_REQUEST_ERROR',
}

const accountRequest: ActionCreator<TAccountRequestAction> = () => ({
  type: AccountAction.REQUEST,
});
const accountRequestSuccess: ActionCreator<TAccountRequestSuccessAction> = (account: IAccountData) => ({
  type: AccountAction.REQUEST_SUCCESS,
  account,
});
const accountRequestError: ActionCreator<TAccountRequestErrorAction> = (error: string) => ({
  type: AccountAction.REQUEST_ERROR,
  error,
});

const accountRequestAsync = (): TThunkAction => async (dispatch, getState) => {
  if (getState().token.value === 'undefined' || !getState().token.value) return;
  try {
    dispatch(accountRequest());
    const { data } = await axios.get(
      'https://oauth.reddit.com/api/v1/me?raw_json=1',
      { headers: { Authorization: `bearer ${getState().token.value}` } },
    );
    dispatch(accountRequestSuccess({ name: data.name, avatar: data.icon_img }));
  } catch (error) {
    dispatch(accountRequestError(String(error)));
  }
};

export {
  AccountAction,
  accountRequestAsync,
};

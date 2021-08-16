import { ActionCreator } from 'redux';
import axios from 'axios';
import { IAccountData } from '../../types';
import { TAccountRequestAction, TAccountRequestErrorAction, TAccountRequestSuccessAction, TThunkAction } from './types';

enum AccountActions {
  ACCOUNT_REQUEST = 'ACCOUNT_REQUEST',
  ACCOUNT_REQUEST_SUCCESS = 'ACCOUNT_REQUEST_SUCCESS',
  ACCOUNT_REQUEST_ERROR = 'ACCOUNT_REQUEST_ERROR',
}

const accountRequest: ActionCreator<TAccountRequestAction> = () => ({
  type: AccountActions.ACCOUNT_REQUEST,
});
const accountRequestSuccess: ActionCreator<TAccountRequestSuccessAction> = (account: IAccountData) => ({
  type: AccountActions.ACCOUNT_REQUEST_SUCCESS,
  account,
});
const accountRequestError: ActionCreator<TAccountRequestErrorAction> = (error: string) => ({
  type: AccountActions.ACCOUNT_REQUEST_ERROR,
  error,
});

const accountRequestAsync = (): TThunkAction => (dispatch, getState) => {
  dispatch(accountRequest());
  axios
    .get(
      'https://oauth.reddit.com/api/v1/me?raw_json=1',
      { headers: { Authorization: `bearer ${getState().token}` } },
    )
    .then((resp) => {
      const { data } = resp;
      dispatch(accountRequestSuccess({ name: data.name, avatar: data.icon_img }));
    })
    .catch((error) => {
      console.log(error);
      dispatch(accountRequestError(error));
    });
};

export {
  AccountActions,
  accountRequest,
  accountRequestSuccess,
  accountRequestError,
  accountRequestAsync,
};

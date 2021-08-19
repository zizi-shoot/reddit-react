import { ActionCreator } from 'redux';
import { TTokenAction } from './types';
import { TThunkAction } from '../types';

enum TokenAction {
  SAVE_TOKEN = 'SAVE_TOKEN',
}

const setToken: ActionCreator<TTokenAction> = (token: string) => ({
  type: TokenAction.SAVE_TOKEN,
  token,
});

const saveToken = (): TThunkAction => (dispatch) => {
  const token = localStorage.getItem('token') || window.__token__;
  dispatch(setToken(token));
  if (token) {
    localStorage.setItem('token', token);
  }
};

export { TokenAction, saveToken };

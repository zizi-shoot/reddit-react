import { ActionCreator, AnyAction } from 'redux';
import { IAccountData, IPost, IUser } from '../types';

enum ActionType {
  UPDATE_COMMENT = 'UPDATE_COMMENT',
  SET_TOKEN = 'SET_TOKEN',
  SET_POSTS = 'SET_POSTS',
  SET_ACCOUNT_DATA = 'SET_ACCOUNT_DATA',
  SET_USER = 'SET_USER',
}

const updateComment: ActionCreator<AnyAction> = (text: string) => ({
  type: ActionType.UPDATE_COMMENT,
  text,
});
const setToken: ActionCreator<AnyAction> = (token: string) => ({
  type: ActionType.SET_TOKEN,
  token,
});
const setPosts: ActionCreator<AnyAction> = (posts: IPost[]) => ({
  type: ActionType.SET_POSTS,
  posts,
});
const setAccountData: ActionCreator<AnyAction> = (account: IAccountData) => ({
  type: ActionType.SET_ACCOUNT_DATA,
  account,
});
const setUser: ActionCreator<AnyAction> = (user: IUser) => ({
  type: ActionType.SET_USER,
  user,
});

export {
  ActionType,
  setUser,
  setAccountData,
  setPosts,
  setToken,
  updateComment,
};

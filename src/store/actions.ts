import { ActionCreator, AnyAction } from 'redux';
import { IUser } from '../types';

enum ActionType {
  UPDATE_COMMENT = 'UPDATE_COMMENT',
  SET_USER = 'SET_USER',
}

const updateComment: ActionCreator<AnyAction> = (text: string) => ({
  type: ActionType.UPDATE_COMMENT,
  text,
});
const setUser: ActionCreator<AnyAction> = (user: IUser) => ({
  type: ActionType.SET_USER,
  user,
});

export {
  ActionType,
  setUser,
  updateComment,
};

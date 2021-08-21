import { Reducer } from 'redux';
import { IUser } from '../../types';
import { TUserActions } from './types';
import { UserAction } from './actions';

const userState: IUser = {
  avatar: '',
  error: '',
  loading: false,
  name: '',
};

const usersReducer: Reducer<IUser, TUserActions> = (state = userState, action) => {
  switch (action.type) {
    case UserAction.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UserAction.REQUEST_SUCCESS:
      return {
        ...state,
        name: action.user.name,
        avatar: action.user.avatar,
        loading: false,
      };
    case UserAction.REQUEST_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default:
      return state;
  }
};

export { usersReducer };

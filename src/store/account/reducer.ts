import { Reducer } from 'redux';
import { AccountAction } from './actions';
import { TAccountActions } from './types';
import { IAccountData } from '../../types';

export const accountState: IAccountData = {
  avatar: '',
  name: '',
  loading: false,
  error: '',
};

const accountReducer: Reducer<IAccountData, TAccountActions> = (state = accountState, action) => {
  switch (action.type) {
    case AccountAction.REQUEST:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case AccountAction.REQUEST_SUCCESS:
      return {
        ...state,
        name: action.account.name,
        avatar: action.account.avatar,
        loading: false,
      };
    case AccountAction.REQUEST_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default:
      return state;
  }
};

export { accountReducer };

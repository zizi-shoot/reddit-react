import { Reducer } from 'redux';
import { AccountActions } from './actions';
import { TActions } from './types';
import { IAccountData } from '../../types';

const accountState: IAccountData = {
  avatar: '',
  name: '',
  loading: false,
  error: '',
};

const accountReducer: Reducer<IAccountData, TActions> = (state: IAccountData = accountState, action) => {
  switch (action.type) {
    case AccountActions.ACCOUNT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case AccountActions.ACCOUNT_REQUEST_SUCCESS:
      return {
        ...state,
        name: action.account.name,
        avatar: action.account.avatar,
        loading: false,
      };
    case AccountActions.ACCOUNT_REQUEST_ERROR:
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

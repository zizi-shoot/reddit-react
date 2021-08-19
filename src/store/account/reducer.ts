import { Reducer } from 'redux';
import { AccountAction } from './actions';
import { TActions } from './types';
import { IAccountData } from '../../types';

const accountState: IAccountData = {
  avatar: '',
  name: '',
  loading: false,
  error: '',
};

const accountReducer: Reducer<IAccountData, TActions> = (state = accountState, action) => {
  switch (action.type) {
    case AccountAction.REQUEST:
      return {
        ...state,
        loading: true,
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

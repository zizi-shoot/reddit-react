import { Reducer } from 'redux';
import { IToken, ITokenAction } from './types';
import { TokenAction } from './actions';

export const tokenState: IToken = {
  value: '',
};

const tokenReducer: Reducer<IToken, ITokenAction> = (state: IToken = tokenState, action) => {
  switch (action.type) {
    case TokenAction.SAVE_TOKEN:
      return {
        ...state,
        value: action.token,
      };
    default:
      return state;
  }
};

export { tokenReducer };

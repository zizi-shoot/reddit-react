import { Reducer } from 'redux';
import { IRootState } from '../types';
import { ActionType } from './actions';
import { AccountAction } from './account/actions';
import { accountReducer } from './account/reducer';
import { TokenAction } from './token/actions';
import { tokenReducer } from './token/reducer';
import { ITokenAction } from './token/types';
import { PostsAction } from './posts/actions';
import { postsReducer } from './posts/reducer';

const initialState: IRootState = {
  token: {
    value: '',
  },
  account: {
    avatar: '',
    name: '',
    loading: false,
    error: '',
  },
  comment: '',
  entities: {
    posts: {
      byId: {},
      allIds: [],
      loading: false,
      error: '',
    },
    users: {},
  },
};

const rootReducer: Reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.UPDATE_COMMENT:
      return {
        ...state,
        comment: action.text,
      };
    case PostsAction.REQUEST:
    case PostsAction.REQUEST_SUCCESS:
    case PostsAction.REQUEST_ERROR:
      return {
        ...state,
        entities: {
          ...state.entities,
          posts: postsReducer(state.entities.posts, action),
        },
      };
    case ActionType.SET_USER:
      return {
        ...state,
        entities: {
          ...state.entities,
          users: {
            ...state.entities.users,
            [action.user.name]: action.user,
          },
        },
      };
    case AccountAction.REQUEST:
    case AccountAction.REQUEST_SUCCESS:
    case AccountAction.REQUEST_ERROR:
      return {
        ...state,
        account: accountReducer(state.account, action),
      };
    case TokenAction.SAVE_TOKEN:
      return {
        ...state,
        token: tokenReducer(state.token, <ITokenAction>action),
      };
    default:
      return state;
  }
};

export { rootReducer };

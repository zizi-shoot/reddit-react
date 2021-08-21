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
import { UserAction } from './users/actions';
import { usersReducer } from './users/reducer';
import { TUserActions } from './users/types';

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
    case TokenAction.SAVE_TOKEN:
      return {
        ...state,
        token: tokenReducer(state.token, <ITokenAction>action),
      };
    case AccountAction.REQUEST:
    case AccountAction.REQUEST_SUCCESS:
    case AccountAction.REQUEST_ERROR:
      return {
        ...state,
        account: accountReducer(state.account, action),
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
    case UserAction.REQUEST:
    case UserAction.REQUEST_SUCCESS:
    case UserAction.REQUEST_ERROR:
      return {
        ...state,
        entities: {
          ...state.entities,
          users: {
            ...state.entities.users,
            [action.name]: usersReducer(state.entities.users[action.name], <TUserActions>action),
          },
        },
      };
    case ActionType.UPDATE_COMMENT:
      return {
        ...state,
        comment: action.text,
      };
    default:
      return state;
  }
};

export { rootReducer };

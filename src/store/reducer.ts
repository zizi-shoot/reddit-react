import { Reducer } from 'redux';
import { IPost, IRootState } from '../types';
import { ActionType } from './actions';
import { AccountActions } from './account/actions';
import { accountReducer } from './account/reducer';

const initialState: IRootState = {
  token: '',
  account: {
    avatar: '',
    name: '',
    loading: false,
    error: '',
  },
  comment: '',
  entities: {
    posts: {},
    users: {},
  },
  posts: [],
};

const rootReducer: Reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.UPDATE_COMMENT:
      return {
        ...state,
        comment: action.text,
      };
    case ActionType.SET_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    case ActionType.SET_POSTS:
      return {
        ...state,
        posts: action.posts.map((post: IPost) => post.id),
        entities: {
          ...state.entities,
          posts: Object.fromEntries(action.posts.map((post: IPost) => [post.id, post])),
        },
      };
    case ActionType.SET_ACCOUNT_DATA:
      return {
        ...state,
        account: action.account,
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
    case AccountActions.ACCOUNT_REQUEST:
    case AccountActions.ACCOUNT_REQUEST_SUCCESS:
    case AccountActions.ACCOUNT_REQUEST_ERROR:
      return {
        ...state,
        account: accountReducer(state.account, action),
      };
    default:
      return state;
  }
};

export { rootReducer };

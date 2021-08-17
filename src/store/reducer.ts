import { Reducer } from 'redux';
import { IPost, IRootState } from '../types';
import { ActionType } from './actions';
import { AccountAction } from './account/actions';
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
    default:
      return state;
  }
};

export { rootReducer };

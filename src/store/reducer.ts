import { Reducer } from 'redux';
import { IPost, IRootState } from '../types';
import { ActionType } from './actions';

const initialState: IRootState = {
  token: '',
  account: {
    avatar: '',
    name: '',
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
    default:
      return state;
  }
};

export { rootReducer };

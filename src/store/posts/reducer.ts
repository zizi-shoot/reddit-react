import { Reducer } from 'redux';
import { IPost, IPostsData } from '../../types';
import { TPostsActions } from './types';
import { PostsAction } from './actions';

export const postsState: IPostsData = {
  byId: {},
  allIds: [],
  after: '',
  loading: false,
  error: '',
  requestCount: 0,
};

const postsReducer: Reducer<IPostsData, TPostsActions> = (state = postsState, action) => {
  switch (action.type) {
    case PostsAction.REQUEST:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case PostsAction.REQUEST_SUCCESS:
      return {
        ...state,
        byId: {
          ...state.byId,
          ...Object.fromEntries(action.posts.map((post: IPost) => [post.id, post])),
        },
        allIds: [
          ...state.allIds,
          ...action.posts.map((post: IPost) => post.id),
        ],
        after: action.after,
        loading: false,
      };
    case PostsAction.REQUEST_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    case PostsAction.REQUEST_INCREMENT:
      return {
        ...state,
        requestCount: state.requestCount + 1,
      };
    case PostsAction.REQUEST_RESET:
      return {
        ...state,
        requestCount: 0,
      };
    default:
      return state;
  }
};

export { postsReducer };

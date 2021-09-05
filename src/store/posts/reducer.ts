import { Reducer } from 'redux';
import { IPost, IPostsData } from '../../types';
import { TPostsActions } from './types';
import { PostsAction } from './actions';

const postsState: IPostsData = {
  byId: {},
  allIds: [],
  after: '',
  loading: false,
  error: '',
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
    default:
      return state;
  }
};

export { postsReducer };

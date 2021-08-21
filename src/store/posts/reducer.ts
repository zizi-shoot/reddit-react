import { Reducer } from 'redux';
import { IPost, IPostsData } from '../../types';
import { TPostsActions } from './types';
import { PostsAction } from './actions';

const postsState: IPostsData = {
  byId: {},
  allIds: [],
  loading: false,
  error: '',
};

const postsReducer: Reducer<IPostsData, TPostsActions> = (state = postsState, action) => {
  switch (action.type) {
    case PostsAction.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case PostsAction.REQUEST_SUCCESS:
      return {
        ...state,
        byId: Object.fromEntries(action.posts.map((post: IPost) => [post.id, post])),
        allIds: action.posts.map((post: IPost) => post.id),
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

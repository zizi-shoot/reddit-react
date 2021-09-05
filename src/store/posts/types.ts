import { PostsAction } from './actions';
import { IPost } from '../../types';

type TPostsRequestAction = {
  type: typeof PostsAction.REQUEST,
}
type TPostsRequestSuccessAction = {
  type: typeof PostsAction.REQUEST_SUCCESS,
}
type TPostsRequestErrorAction = {
  type: typeof PostsAction.REQUEST_ERROR,
}

interface IPostsRequestAction {
  type: PostsAction.REQUEST,
}

interface IPostsRequestSuccessAction {
  type: PostsAction.REQUEST_SUCCESS,
  posts: IPost[],
  after: string,
}

interface IPostsRequestErrorAction {
  type: PostsAction.REQUEST_ERROR,
  error: string
}

interface IActions {
  REQUEST: IPostsRequestAction,
  REQUEST_SUCCESS: IPostsRequestSuccessAction,
  REQUEST_ERROR: IPostsRequestErrorAction,
}

type TPostsActions = IActions[keyof IActions];

interface IResolutionItems {
  [N: string]: string | number;
}

interface IPostAPI {
  [N: string]: any;
}

export {
  TPostsRequestAction,
  TPostsRequestSuccessAction,
  TPostsRequestErrorAction,
  IPostsRequestAction,
  IPostsRequestSuccessAction,
  IPostsRequestErrorAction,
  TPostsActions,
  IPostAPI,
  IResolutionItems,
};

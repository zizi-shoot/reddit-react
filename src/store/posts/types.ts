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

type TPostsRequestIncrementAction = {
  type: typeof PostsAction.REQUEST_INCREMENT,
}

type TPostsRequestResetAction = {
  type: typeof PostsAction.REQUEST_RESET,
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

interface IPostsRequestIncrementAction {
  type: PostsAction.REQUEST_INCREMENT,
}

interface IPostsRequestResetAction {
  type: PostsAction.REQUEST_RESET,
}

interface IActions {
  REQUEST: IPostsRequestAction,
  REQUEST_SUCCESS: IPostsRequestSuccessAction,
  REQUEST_ERROR: IPostsRequestErrorAction,
  REQUEST_INCREMENT: IPostsRequestIncrementAction,
  REQUEST_RESET: IPostsRequestResetAction,
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
  TPostsRequestIncrementAction,
  TPostsRequestResetAction,
  IPostsRequestAction,
  IPostsRequestSuccessAction,
  IPostsRequestErrorAction,
  IPostsRequestIncrementAction,
  IPostsRequestResetAction,
  TPostsActions,
  IPostAPI,
  IResolutionItems,
};

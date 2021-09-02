import { ActionCreator } from 'redux';
import axios from 'axios';
import { IPostAPI, IResolutionItems, TPostsRequestAction, TPostsRequestErrorAction, TPostsRequestSuccessAction } from './types';
import { IPost } from '../../types';
import { TThunkAction } from '../types';

enum PostsAction {
  REQUEST = 'POSTS_REQUEST',
  REQUEST_SUCCESS = 'POSTS_REQUEST_SUCCESS',
  REQUEST_ERROR = 'POSTS_REQUEST_ERROR',
}

const postsRequest: ActionCreator<TPostsRequestAction> = () => ({
  type: PostsAction.REQUEST,
});
const postsRequestSuccess: ActionCreator<TPostsRequestSuccessAction> = (posts: IPost[]) => ({
  type: PostsAction.REQUEST_SUCCESS,
  posts,
});
const postsRequestError: ActionCreator<TPostsRequestErrorAction> = (error: string) => ({
  type: PostsAction.REQUEST_ERROR,
  error,
});

const postsRequestAsync = (): TThunkAction => async (dispatch, getState) => {
  if (getState().token.value === 'undefined' || !getState().token.value) return;

  try {
    dispatch(postsRequest());

    const { data: { data: { children: postsData } } } = await axios.get(
      'https://oauth.reddit.com/best?raw_json=1',
      { headers: { Authorization: `bearer ${getState().token.value}` } },
    );
    dispatch(postsRequestSuccess(postsData.map(({ data: post }: IPostAPI) => {
      const { id, author, title, created_utc: createdUtc, score } = post;
      const imgPreview = post.preview?.images[0].resolutions.map((item: IResolutionItems) => item.url);

      return { id, author, title, createdUtc, score, imgPreview };
    })));
  } catch (error) {
    dispatch(postsRequestError(String(error)));
  }
};

export {
  PostsAction,
  postsRequestAsync,
};

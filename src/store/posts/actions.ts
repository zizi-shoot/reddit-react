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
const postsRequestSuccess: ActionCreator<TPostsRequestSuccessAction> = (after: string, posts: IPost[]) => ({
  type: PostsAction.REQUEST_SUCCESS,
  after,
  posts,
});
const postsRequestError: ActionCreator<TPostsRequestErrorAction> = (error: string) => ({
  type: PostsAction.REQUEST_ERROR,
  error,
});

const postsRequestAsync = (): TThunkAction => async (dispatch, getState) => {
  if (getState().token.value === 'undefined' || !getState().token.value) return;
  const nextAfter = getState().entities.posts.after;

  try {
    dispatch(postsRequest());

    const { data: { data: { after, children: postsData } } } = await axios.get(
      'https://oauth.reddit.com/best?raw_json=1',
      {
        headers: { Authorization: `bearer ${getState().token.value}` },
        params: {
          limit: 10,
          after: nextAfter,
        },
      },
    );
    dispatch(postsRequestSuccess(after, postsData.map(({ data: post }: IPostAPI) => {
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

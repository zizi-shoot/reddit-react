import { ActionCreator, AnyAction, Reducer } from 'redux';
import { IPostsData } from './shared/Content/CardsListContainer';

// Typings
type RootState = {
  commentText: string,
  userToken: string,
  userData: IUserData,
  posts: IPostsData[],
  authorsAvatars: IAuthorsAvatars,
}

interface IAuthorsAvatars {
  [N: string]: string;
}

interface IAuthorAvatar {
  author: string,
}

export interface IUserData {
  name?: string,
  iconImg?: string,
}

// Actions
enum Action {
  UPDATE_COMMENT = 'UPDATE_COMMENT',
  SET_TOKEN = 'SET_TOKEN',
  SET_POSTS = 'SET_POSTS',
  SET_USER_DATA = 'SET_USER_DATA',
  SET_AUTHOR_AVATAR = 'SET_AUTHOR_AVATAR',
}

const updateComment: ActionCreator<AnyAction> = (text: string) => ({
  type: Action.UPDATE_COMMENT,
  text,
});

const setToken: ActionCreator<AnyAction> = (token: string) => ({
  type: Action.SET_TOKEN,
  token,
});

const setPosts: ActionCreator<AnyAction> = (posts: IPostsData[]) => ({
  type: Action.SET_POSTS,
  posts,
});

const setUserData: ActionCreator<AnyAction> = (userData: IUserData) => ({
  type: Action.SET_USER_DATA,
  userData,
});

const setAuthorAvatar: ActionCreator<AnyAction> = (avatar: IAuthorAvatar) => ({
  type: Action.SET_AUTHOR_AVATAR,
  avatar,
});

// Root
const initialState: RootState = {
  commentText: '',
  userToken: '',
  userData: {},
  posts: [],
  authorsAvatars: {},
};
const rootReducer: Reducer = (state = initialState, action) => {
  switch (action.type) {
    case Action.UPDATE_COMMENT:
      return {
        ...state,
        commentText: action.text,
      };
    case Action.SET_TOKEN:
      return {
        ...state,
        userToken: action.token,
      };
    case Action.SET_POSTS:
      return {
        ...state,
        posts: action.posts,
      };
    case Action.SET_USER_DATA:
      return {
        ...state,
        userData: action.userData,
      };
    case Action.SET_AUTHOR_AVATAR:
      return {
        ...state,
        authorsAvatars: {
          ...state.authorsAvatars,
          ...action.avatar,
        },
      };
    default:
      return state;
  }
};

export { RootState, rootReducer, updateComment, setToken, setPosts, setUserData, setAuthorAvatar };

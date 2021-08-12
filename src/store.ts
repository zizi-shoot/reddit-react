import { Action, ActionCreator, AnyAction, Reducer } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { IPostsData } from './shared/Content/CardsListContainer';

// Typings
// interface IRootState {
//   commentText: string,
//   userToken: string,
//   userData: IUserData,
//   posts: IPostsData[],
//   authorsAvatars: IAuthorsAvatars,
// }

interface IAuthorAvatar {
  avatar: string,
}

interface IRootState {
  token: string;
  account: {
    name: string;
    avatar: string;
  };
  comment: string;
  entities: {
    posts: {
      [N: string]: {
        id: string;
        author: string;
        title: string;
        createdUtc: number;
        score: number;
        imgPreview: string[];
      }
    };
    users: {
      [N: string]: {
        name: string;
        avatar: string;
      },
    };
  };
  posts: string[];
}

interface IUserData {
  name?: string,
  iconImg?: string,
}

type TThunkAction = ThunkAction<void, IRootState, unknown, Action<string>>;

// Actions
enum ActionType {
  UPDATE_COMMENT = 'UPDATE_COMMENT',
  SET_TOKEN = 'SET_TOKEN',
  SET_POSTS = 'SET_POSTS',
  SET_USER_DATA = 'SET_USER_DATA',
  SET_AUTHOR_AVATAR = 'SET_AUTHOR_AVATAR',
}

const updateComment: ActionCreator<AnyAction> = (text: string) => ({
  type: ActionType.UPDATE_COMMENT,
  text,
});

const setToken: ActionCreator<AnyAction> = (token: string) => ({
  type: ActionType.SET_TOKEN,
  token,
});

const setPosts: ActionCreator<AnyAction> = (posts: IPostsData[]) => ({
  type: ActionType.SET_POSTS,
  posts,
});

const setUserData: ActionCreator<AnyAction> = (userData: IUserData) => ({
  type: ActionType.SET_USER_DATA,
  userData,
});

const setAuthorAvatar: ActionCreator<AnyAction> = (avatar: IAuthorAvatar) => ({
  type: ActionType.SET_AUTHOR_AVATAR,
  avatar,
});

// Root

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

// const initialState: IRootState = {
//   commentText: '',
//   userToken: '',
//   userData: {},
//   posts: [],
//   authorsAvatars: {},
// };

const rootReducer: Reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.UPDATE_COMMENT:
      return {
        ...state,
        commentText: action.text,
      };
    case ActionType.SET_TOKEN:
      return {
        ...state,
        userToken: action.token,
      };
    case ActionType.SET_POSTS:
      return {
        ...state,
        posts: action.posts,
      };
    case ActionType.SET_USER_DATA:
      return {
        ...state,
        userData: action.userData,
      };
    case ActionType.SET_AUTHOR_AVATAR:
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

export {
  IRootState,
  IUserData,
  TThunkAction,
  rootReducer,
  updateComment,
  setToken,
  setPosts,
  setUserData,
  setAuthorAvatar,
};

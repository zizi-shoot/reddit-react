import { IToken } from './store/token/types';

interface IUser {
  name: string,
  avatar: string,
  loading: boolean,
  error: string,
}

interface IUsers {
  [N: string]: IUser,
}

interface IAccountData {
  name: string,
  avatar: string,
  loading: boolean,
  error: string,
}

type TImgPreview = Array<string> | undefined;

interface IPost {
  id: string;
  author: string;
  title: string;
  createdUtc: number;
  score: number;
  imgPreview: TImgPreview;
}

interface IPostsData {
  byId: {
    [N: string]: IPost,
  },
  allIds: string[],
  after: string,
  loading: boolean,
  error: string,
  requestCount: number,
}

interface IRootState {
  token: IToken;
  account: IAccountData;
  comment: string;
  entities: {
    posts: IPostsData,
    users: IUsers,
  };
}

export {
  IRootState,
  IPostsData,
  IPost,
  IAccountData,
  IUsers,
  IUser,
};

interface IUser {
  name: string,
  avatar: string,
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
  [N: string]: IPost,
}

interface IRootState {
  token: string;
  account: IAccountData;
  comment: string;
  entities: {
    posts: IPostsData,
    users: IUsers,
  };
  posts: string[];
}

export {
  IRootState,
  IPostsData,
  IPost,
  IAccountData,
  IUsers,
  IUser,
};

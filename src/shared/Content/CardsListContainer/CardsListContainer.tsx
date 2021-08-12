import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import { IRootState, setPosts } from '../../../store';
import { CardsList } from '../CardsList';

type TImgPreview = Array<string> | undefined;

export interface IPostsData {
  id: string,
  author: string,
  title: string,
  imgPreview: TImgPreview,
  createdUtc: string,
  score: number,
}

export interface IResolutionItems {
  [N: string]: string | number;
}

export interface IPost {
  [N: string]: any;
}

export function CardsListContainer() {
  const token = useSelector<IRootState, string>((state) => state.userToken);
  const posts = useSelector<IRootState, IPostsData[]>((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!token) return;
    axios
      .get(
        'https://oauth.reddit.com/best?raw_json=1',
        { headers: { Authorization: `bearer ${token}` } },
      )
      .then((resp) => {
        const postsData = resp.data.data.children;

        dispatch(setPosts(postsData.map(({ data: post }: IPost) => {
          const { id, author, title, created_utc: createdUtc, score } = post;
          const imgPreview = post.preview?.images[0].resolutions
            .map((item: IResolutionItems) => item.url);
          return {
            id,
            author,
            title,
            createdUtc,
            score,
            imgPreview,
          };
        })));
      })
      .catch(console.log);
  }, [token]);

  return (
    <CardsList posts={posts} />
  );
}

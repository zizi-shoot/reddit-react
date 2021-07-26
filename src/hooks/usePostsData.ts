import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { tokenContext } from '../shared/context';

export type TImgPreview = Array<string> | undefined;

interface IPostsData {
  id: string,
  author: string,
  title: string,
  imgPreview: TImgPreview,
  createdUtc: string,
  score: number,
}

interface IResolutionItems {
  [N: string]: string | number;
}

interface IPost {
  [N: string]: any;
}

export function usePostsData() {
  const [data, setData] = useState<IPostsData[]>([]);
  const token = useContext(tokenContext);

  useEffect(() => {
    axios
      .get(
        'https://oauth.reddit.com/best?raw_json=1',
        { headers: { Authorization: `bearer ${token}` } },
      )
      .then((resp) => {
        const postsData = resp.data.data.children;

        setData(postsData.map(({ data: post }: IPost) => {
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
        }));
      })
      .catch(console.log);
  }, [token]);

  return [data];
}

import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { tokenContext } from '../shared/context';

interface IPostsData {
  id: string,
  author: string,
  title: string,
  imgPreview?: any,
  created: string,
  score: number,
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

        setData(postsData.map((
          {
            data:
              {
                id,
                author,
                title,
                created,
                score,
                preview: imgPreview = '',
              },
          }: any,
        ) => ({
          id,
          author,
          title,
          imgPreview,
          created,
          score,
        })));
      })
      .catch(console.log);
  }, [token]);

  return [data];
}

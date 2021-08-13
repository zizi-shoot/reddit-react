import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import { CardsList } from '../CardsList';
import { IPostsData, IRootState } from '../../../types';
import { setPosts } from '../../../store/actions';

interface IResolutionItems {
  [N: string]: string | number;
}

interface IPostAPI {
  [N: string]: any;
}

export function CardsListContainer() {
  const token = useSelector<IRootState, string>((state) => state.token);
  const postsEntities = useSelector<IRootState, IPostsData>((state) => state.entities.posts);
  const postsOrder = useSelector<IRootState, string[]>((state) => state.posts);
  const posts = postsOrder?.map((item) => postsEntities[item]);

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
        dispatch(setPosts(postsData.map(({ data: post }: IPostAPI) => {
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

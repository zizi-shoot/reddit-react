import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { CardsList } from '../CardsList';
import { IPostsData, IRootState } from '../../../types';
import { postsRequestAsync } from '../../../store/posts/actions';

export function CardsListContainer() {
  const postsEntities = useSelector<IRootState, IPostsData['byId']>((state) => state.entities.posts.byId);
  const postsOrder = useSelector<IRootState, string[]>((state) => state.entities.posts.allIds);
  const posts = postsOrder?.map((item) => postsEntities[item]);
  const isLoading = useSelector<IRootState, boolean>((state) => state.entities.posts.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postsRequestAsync());
  }, []);

  return (
    <CardsList posts={posts} isLoading={isLoading} />
  );
}

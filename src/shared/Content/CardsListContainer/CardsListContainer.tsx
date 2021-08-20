import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { CardsList } from '../CardsList';
import { IPostsData, IRootState } from '../../../types';
import { IToken } from '../../../store/token/types';
import { postsRequestAsync } from '../../../store/posts/actions';

export function CardsListContainer() {
  const token = useSelector<IRootState, IToken>((state) => state.token);
  const postsEntities = useSelector<IRootState, IPostsData['byId']>((state) => state.entities.posts.byId);
  const postsOrder = useSelector<IRootState, string[]>((state) => state.entities.posts.allIds);
  const posts = postsOrder?.map((item) => postsEntities[item]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postsRequestAsync());
  }, [token]);

  return (
    <CardsList posts={posts} />
  );
}

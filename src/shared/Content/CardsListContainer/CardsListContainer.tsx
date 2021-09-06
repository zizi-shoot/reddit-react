import { useDispatch, useSelector } from 'react-redux';
import { IPostsData, IRootState } from '../../../types';
import { postsRequestAsync } from '../../../store/posts/actions';
import { CardsList } from '../CardsList';

export function CardsListContainer() {
  const {
    byId: postsData,
    allIds: postsOrder,
    error: errorLoading,
    requestCount,
  } = useSelector<IRootState, IPostsData>((state) => state.entities.posts);
  const posts = postsOrder?.map((item) => postsData[item]);
  const isLoading = useSelector<IRootState, boolean>((state) => state.entities.posts.loading);
  const dispatch = useDispatch();
  const token = useSelector<IRootState>((state) => state.token.value);

  function intersectHandler() {
    if (!token || token === 'undefined') return;
    dispatch(postsRequestAsync());
  }

  return (
    <>
      {token === 'undefined' || !token
        ? (
          <p style={{ padding: 40, fontSize: 18, textAlign: 'center' }}>
            Авторизуйтесь, чтобы загрузить посты
          </p>
        )
        : (
          <CardsList
            posts={posts}
            isLoading={isLoading}
            errorLoading={errorLoading}
            loadData={intersectHandler}
            count={requestCount}
          />
        )}
    </>
  );
}

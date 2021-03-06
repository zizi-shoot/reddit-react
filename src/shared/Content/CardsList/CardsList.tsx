import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Card } from './Card';
import { Controls } from './Card/Controls';
import { MenuButton } from './Card/MenuButton';
import { ImgPreview } from './Card/ImgPreview';
import { KarmaCounter } from './Card/KarmaCounter';
import styles from './cardslist.scss';
import { TextContentContainer } from '../TextContentContainer';
import { IPost, IRootState } from '../../../types';
import { EIcons, Icon } from '../../Icon';

interface IProps {
  posts: IPost[],
  isLoading: boolean,
  errorLoading: string,
  loadData: () => void,
  count: number,
}

export function CardsList(props: IProps) {
  const {
    posts,
    isLoading = false,
    errorLoading = '',
    loadData,
    count,
  } = props;
  const bottomOfList = useRef<HTMLDivElement>(null);
  const token = useSelector<IRootState>((state) => state.token.value);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && count !== 3) {
        loadData();
      }
    }, { rootMargin: '10px' });

    if (bottomOfList.current) {
      observer.observe(bottomOfList.current);
    }

    return () => {
      if (bottomOfList.current) {
        observer.unobserve(bottomOfList.current);
      }
    };
  }, [token, count]);

  return (
    <>
      <ul className={styles.container}>
        {!posts.length && !isLoading && !errorLoading && (
          <p style={{ padding: 40, fontSize: 18, textAlign: 'center' }}>
            Нет ни одного поста :(
          </p>
        )}
        {posts.map(({
          id,
          author,
          title,
          imgPreview,
          createdUtc,
          score,
        }) => (
          <Card key={id}>
            <TextContentContainer
              id={id}
              username={author}
              title={title}
              createdAt={createdUtc}
              extraClass={styles.textContent}
            />
            <ImgPreview imgPreview={imgPreview} />
            <MenuButton />
            <Controls>
              <KarmaCounter karma={score} />
            </Controls>
          </Card>
        ))}
        <div ref={bottomOfList} />
        {isLoading
        && (
          <div className={styles.downloadContainer}>
            <Icon name={EIcons.download} size={100} extraClass={styles.downloadIcon} />
          </div>
        )}
        {errorLoading
        && (
          <p style={{ padding: 40, fontSize: 18, textAlign: 'center', color: '#f00' }}>
            Ошибка получения данных (
            {errorLoading}
            )
          </p>
        )}
      </ul>
      {count === 3
      && (
        <button
          type="button"
          onClick={loadData}
          className={styles.downloadBtn}
        >
          Показать ещё
        </button>
      )}
    </>
  );
}

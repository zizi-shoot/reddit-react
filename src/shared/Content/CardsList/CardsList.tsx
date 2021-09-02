import React from 'react';
import { Card } from './Card';
import { Controls } from './Card/Controls';
import { MenuButton } from './Card/MenuButton';
import { ImgPreview } from './Card/ImgPreview';
import { KarmaCounter } from './Card/KarmaCounter';
import styles from './cardslist.scss';
import { TextContentContainer } from '../TextContentContainer';
import { IPost } from '../../../types';
import { EIcons, Icon } from '../../Icon';

interface IProps {
  posts: IPost[],
  isLoading: boolean,
  errorLoading: string
}

export function CardsList({ posts, isLoading = false, errorLoading = '' }: IProps) {
  return (
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
  );
}

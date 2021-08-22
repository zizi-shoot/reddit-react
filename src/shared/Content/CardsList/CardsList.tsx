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
}

export function CardsList({ posts, isLoading = false }: IProps) {
  return (
    isLoading
      ? (
        <div className={styles.downloadContainer}>
          <Icon name={EIcons.download} size={100} extraClass={styles.downloadIcon} />
        </div>
      )
      : (
        <ul className={styles.container}>
          <>
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
          </>
        </ul>
      )
  );
}

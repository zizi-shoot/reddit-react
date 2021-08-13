import React from 'react';
import { Card } from './Card';
import { Controls } from './Card/Controls';
import { MenuButton } from './Card/MenuButton';
import { ImgPreview } from './Card/ImgPreview';
import { KarmaCounter } from './Card/KarmaCounter';
import styles from './cardslist.scss';
import { TextContentContainer } from '../TextContentContainer';
import { IPost } from '../../../types';

interface IProps {
  posts: IPost[],
}

export function CardsList({ posts }: IProps) {
  return (
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
  );
}

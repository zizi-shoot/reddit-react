import React, { useContext } from 'react';
import { Card } from './Card';
import { Controls } from './Card/Controls';
import { MenuButton } from './Card/MenuButton';
import { ImgPreview } from './Card/ImgPreview';
import { TextContent } from '../TextContent';
import { postsContext } from '../../context';
import { KarmaCounter } from './Card/KarmaCounter';
import styles from './cardslist.scss';

export function CardsList() {
  const data = useContext(postsContext);

  return (
    <ul className={styles.container}>
      <>
        {data.map(({
          id,
          author,
          title,
          imgPreview,
          createdUtc,
          score,
        }) => (
          <Card key={id}>
            <TextContent
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

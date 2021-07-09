import React, { useContext } from 'react';
import { Card } from './Card';
import { Controls } from './Card/Controls';
import { MenuButton } from './Card/MenuButton';
import { ImgPreview } from './Card/ImgPreview';
import { TextContent } from './Card/TextContent';
import { postsContext } from '../../context';
import { KarmaCounter } from './Card/KarmaCounter';

export function CardsList() {
  const data = useContext(postsContext);

  return (
    <ul className="cards">
      <>
        {data.map(({
          id,
          author,
          title,
          imgPreview,
          created,
          score,
        }) => (
          <Card key={id}>
            <TextContent
              username={author}
              title={title}
              createdAt={created}
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

import React from 'react';
import { Card } from './Card';
import { Controls } from './Card/Controls';
import { MenuButton } from './Card/MenuButton';
import { ImgPreview } from './Card/ImgPreview';
import { TextContent } from './Card/TextContent';
import avatar1 from '../../img/avatar1.png';
import avatar2 from '../../img/avatar2.png';
import avatar3 from '../../img/avatar3.png';
import imgPreview1 from '../../img/img-preview1.jpg';
import imgPreview2 from '../../img/img-preview2.jpg';
import imgPreview3 from '../../img/img-preview3.jpg';

export function CardsList() {
  return (
    <ul className="cards">
      <Card>
        <TextContent
          avatar={avatar1}
          username="Дмитрий Гришин"
          title="Реализация намеченных плановых заданий"
          createdAt="4 часа назад"
        />
        <ImgPreview imgPreview={imgPreview1} />
        <MenuButton />
        <Controls />
      </Card>
      <Card>
        <TextContent
          avatar={avatar2}
          username="Владимир Петров"
          title="Следует отметить, что новая модель организационной..."
          createdAt="5 часов назад"
        />
        <ImgPreview imgPreview={imgPreview2} />
        <MenuButton />
        <Controls />
      </Card>
      <Card>
        <TextContent
          avatar={avatar3}
          username="Ирина Зверева"
          title="С учётом сложившейся международной обстановки"
          createdAt="6 часов назад"
        />
        <ImgPreview imgPreview={imgPreview3} />
        <MenuButton />
        <Controls />
      </Card>
    </ul>
  );
}

import React, { useState } from 'react';
import { merge } from '../../../../../utils/js/merge';
import { GenericList } from '../../../../GenericList/GenericList';
import { generateId } from '../../../../../utils/react/generateRandomIndex';
import { CommentsIcon, ComplainIcon, HideIcon, SaveIcon, ShareIcon } from '../../../../Icons';

const ITEMS = [
  { As: 'li' as const, className: 'menu__item menu__item--desktop', text: 'Комментарии', icon: CommentsIcon() },
  { As: 'li' as const, className: 'menu__item menu__item--desktop', text: 'Поделиться', icon: ShareIcon() },
  { As: 'li' as const, className: 'menu__item', text: 'Скрыть', icon: HideIcon() },
  { As: 'li' as const, className: 'menu__item menu__item--desktop', text: 'Сохранить', icon: SaveIcon() },
  { As: 'li' as const, className: 'menu__item', text: 'Пожаловаться', icon: ComplainIcon() },
].map(generateId);

export function Menu() {
  // const handleItemClick = (id: string) => console.log(id);
  const [items] = useState(ITEMS);

  return (
    <div className="card__menu menu">
      <ul>
        <GenericList list={items.map(merge({}))} />
      </ul>
      <button className="menu__close-btn" type="button">Закрыть</button>
    </div>
  );
}

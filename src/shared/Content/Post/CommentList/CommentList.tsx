import React, { useState } from 'react';
import { GenericList } from '../../../GenericList/GenericList';
import { merge } from '../../../../utils/js/merge';
import { generateId } from '../../../../utils/react/generateRandomIndex';

const ITEMS = [
  {
    As: 'li' as const,
    className: 'comments__item',
    text: 'Комментарии',
  },
  {
    As: 'li' as const,
    className: 'comments__item',
    text: 'Поделиться',
  },
  {
    As: 'li' as const,
    className: 'comments__item',
    text: 'Скрыть',
  },
  {
    As: 'li' as const,
    className: 'comments__item',
    text: 'Сохранить',
  },
  {
    As: 'li' as const,
    className: 'comments__item',
    text: 'Пожаловаться',
  },
].map(generateId);

export function CommentList() {
  const [items] = useState(ITEMS);

  return (
    <ul className="post__comment-list comments">
      <GenericList list={items.map(merge({}))} />
    </ul>
  );
}

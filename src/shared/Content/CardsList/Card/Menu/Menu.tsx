import React, { useState } from 'react';
import { merge } from '../../../../../utils/js/merge';
import { GenericList } from '../../../../GenericList/GenericList';
import { generateId } from '../../../../../utils/react/generateRandomIndex';
import { EIcons, Icon } from '../../../../Icon';
import styles from './menu.scss';
import classNames from 'classnames';

const ITEMS = [
  {
    As: 'li' as const,
    className: classNames(styles.item, styles['item--desktop']),
    text: 'Комментарии',
    icon: Icon({ name: EIcons.comments, size: 14, mobileSize: 12 }),
  },
  {
    As: 'li' as const,
    className: classNames(styles.item, styles['item--desktop']),
    text: 'Поделиться',
    icon: Icon({ name: EIcons.share, size: 14, mobileSize: 12 }),
  },
  {
    As: 'li' as const,
    className: styles.item,
    text: 'Скрыть',
    icon: Icon({ name: EIcons.hide, size: 14, mobileSize: 12 }),
  },
  {
    As: 'li' as const,
    className: classNames(styles.item, styles['item--desktop']),
    text: 'Сохранить',
    icon: Icon({ name: EIcons.save, size: 14, mobileSize: 12 }),
  },
  {
    As: 'li' as const,
    className: styles.item,
    text: 'Пожаловаться',
    icon: Icon({ name: EIcons.complain, size: 16, mobileSize: 14 }),
  },
].map(generateId);

export function Menu() {
  // const handleItemClick = (id: string) => console.log(id);
  const [items] = useState(ITEMS);

  return (
    <div className={styles.container}>
      <ul>
        <GenericList list={items.map(merge({}))} />
      </ul>
      <button className={styles.closeBtn} type="button">Закрыть</button>
    </div>
  );
}

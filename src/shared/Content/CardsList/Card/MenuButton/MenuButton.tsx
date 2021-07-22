import React from 'react';
import classNames from 'classnames';
import { Dropdown } from '../../../../Dropdown';
import { Menu } from '../../../Menu';
import { EIcons, Icon } from '../../../../Icon';
import styles from './menubutton.scss';
import { generateId } from '../../../../../utils/react/generateRandomIndex';

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

export function MenuButton() {
  return (
    <div className={styles.container}>
      <Dropdown
        button={(
          <button type="button" className={styles.btn}>
            <Icon name={EIcons.menu} size={20} />
          </button>
        )}
      >
        <Menu items={ITEMS} />
      </Dropdown>
    </div>
  );
}

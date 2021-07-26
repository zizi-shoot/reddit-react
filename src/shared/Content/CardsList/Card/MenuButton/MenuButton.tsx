import React, { useRef } from 'react';
import classNames from 'classnames';
import { Dropdown } from '../../../../Dropdown';
import { Menu } from '../../../Menu';
import { EIcons, Icon } from '../../../../Icon';
import styles from './menubutton.scss';
import menuStyles from '../../../Menu/menu.scss';
import { generateId } from '../../../../../utils/react/generateRandomIndex';

const ITEMS = [
  {
    As: 'li' as const,
    className: classNames(menuStyles.item, menuStyles['item--desktop']),
    text: 'Комментарии',
    icon: Icon({ name: EIcons.comments, size: 14, mobileSize: 12 }),
  },
  {
    As: 'li' as const,
    className: classNames(menuStyles.item, menuStyles['item--desktop']),
    text: 'Поделиться',
    icon: Icon({ name: EIcons.share, size: 14, mobileSize: 12 }),
  },
  {
    As: 'li' as const,
    className: menuStyles.item,
    text: 'Скрыть',
    icon: Icon({ name: EIcons.hide, size: 14, mobileSize: 12 }),
  },
  {
    As: 'li' as const,
    className: classNames(menuStyles.item, menuStyles['item--desktop']),
    text: 'Сохранить',
    icon: Icon({ name: EIcons.save, size: 14, mobileSize: 12 }),
  },
  {
    As: 'li' as const,
    className: menuStyles.item,
    text: 'Пожаловаться',
    icon: Icon({ name: EIcons.complain, size: 16, mobileSize: 14 }),
  },
].map(generateId);

export function MenuButton() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div className={styles.container} ref={ref}>
      <Dropdown
        button={(
          <button type="button" className={styles.btn}>
            <Icon name={EIcons.menu} size={20} />
          </button>
        )}
        parentRef={ref}
      >
        <Menu items={ITEMS} />
      </Dropdown>
    </div>
  );
}

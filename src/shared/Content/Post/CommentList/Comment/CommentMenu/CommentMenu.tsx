import React, { useContext } from 'react';
import styles from './commentmenu.scss';
import { EIcons, Icon } from '../../../../../Icon';
import { focusContext } from '../../../../../context';

export function CommentMenu() {
  const { onClick } = useContext(focusContext);

  function handleClick() {
    onClick(true);
  }

  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <button type="button" onClick={handleClick}>
          <Icon name={EIcons.comments} size={14} mobileSize={12} />
          Ответить
        </button>
      </li>
      <li className={styles.item}>
        <button type="button">
          <Icon name={EIcons.share} size={14} mobileSize={12} />
          Поделиться
        </button>
      </li>
      <li className={styles.item}>
        <button type="button">
          <Icon name={EIcons.complain} size={16} mobileSize={14} />
          Пожаловаться
        </button>
      </li>
    </ul>
  );
}

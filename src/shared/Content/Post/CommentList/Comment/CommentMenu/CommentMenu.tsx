import React, { useContext } from 'react';
import styles from './commentmenu.scss';
import { EIcons, Icon } from '../../../../../Icon';
import { commentContext, focusContext } from '../../../../../context';

interface ICommentMenuProps {
  author: string,
}

export function CommentMenu({ author }: ICommentMenuProps) {
  const { onClick } = useContext(focusContext);
  const { onChange } = useContext(commentContext);

  function handleClick() {
    onChange(`${author}, `);
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

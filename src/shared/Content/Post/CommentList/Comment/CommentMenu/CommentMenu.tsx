import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import styles from './commentmenu.scss';
import { EIcons, Icon } from '../../../../../Icon';
import { focusContext } from '../../../../../context';
import { updateComment } from '../../../../../../store';

interface ICommentMenuProps {
  author: string,
}

export function CommentMenu({ author }: ICommentMenuProps) {
  const dispatch = useDispatch();
  const { onClick } = useContext(focusContext);

  function handleClick() {
    dispatch(updateComment(`${author}, `));
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

import React from 'react';
import { useDispatch } from 'react-redux';
import styles from './commentmenu.scss';
import { EIcons, Icon } from '../../../../../Icon';
import { updateComment } from '../../../../../../store/actions';

interface ICommentMenuProps {
  author: string,
}

export function CommentMenu({ author }: ICommentMenuProps) {
  const dispatch = useDispatch();

  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <button type="button" onClick={() => dispatch(updateComment(`${author}, `))}>
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

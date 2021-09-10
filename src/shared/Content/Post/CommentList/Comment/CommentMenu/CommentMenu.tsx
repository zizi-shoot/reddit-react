import React from 'react';
import { useSetRecoilState } from 'recoil';
import styles from './commentmenu.scss';
import { EIcons, Icon } from '../../../../../Icon';
import { commentState } from '../../../../../../App';

interface ICommentMenuProps {
  author: string,
}

export function CommentMenu({ author }: ICommentMenuProps) {
  const setCommentValue = useSetRecoilState(commentState);

  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <button type="button" onClick={() => setCommentValue(`${author}, `)}>
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

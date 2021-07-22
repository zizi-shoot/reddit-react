import React from 'react';
import classNames from 'classnames';
import { merge } from '../../../utils/js/merge';
import { GenericList, IItem } from '../../GenericList/GenericList';
import styles from './menu.scss';

interface IMenuProps {
  items: IItem[],
  extraClass?: string,
}

export function Menu({ items, extraClass }: IMenuProps) {
  const classes = classNames(styles.container, extraClass);
  return (
    <div className={classes}>
      <ul>
        <GenericList list={items.map(merge({}))} />
      </ul>
      <button className={styles.closeBtn} type="button">Закрыть</button>
    </div>
  );
}

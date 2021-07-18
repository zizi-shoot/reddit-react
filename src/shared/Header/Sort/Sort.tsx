import React from 'react';
import classNames from 'classnames';
import styles from './sort.scss';

interface ISortProps {
  extraClass?: string;
}

export function Sort({ extraClass }: ISortProps) {
  const classes = classNames(extraClass, styles.container);
  return (
    <div className={classes}>
      sorting dropdown
    </div>
  );
}

import React from 'react';
import classNames from 'classnames';
import styles from './title.scss';

interface ITitleProps {
  extraClass?: string;
}

export function Title({extraClass}: ITitleProps) {
  const classes = classNames(extraClass, styles.container);
  return (
    <h1 className={classes}>Header</h1>
  );
}

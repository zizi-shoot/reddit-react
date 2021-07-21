import React, { ReactNode } from 'react';
import styles from './comment.scss';

interface ICommentProps {
  children?: ReactNode;
}

export function Comment({ children }: ICommentProps) {
  return (
    <li className={styles.container}>
      {children}
    </li>
  );
}

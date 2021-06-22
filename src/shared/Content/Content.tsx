import React from 'react';
import styles from './content.scss';

interface IContentProps {
  children?: React.ReactNode;
}

export const Content = ({ children }: IContentProps) => (
  <main className={styles.content}>
    {children}
  </main>
);

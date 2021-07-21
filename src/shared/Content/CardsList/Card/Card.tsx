import React, { ReactNode } from 'react';
import styles from './card.scss';

interface ICardProps {
  children?: ReactNode;
}

export function Card({ children }: ICardProps) {
  return (
    <li className={styles.card}>
      {children}
    </li>
  );
}

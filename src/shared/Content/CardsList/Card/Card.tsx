import React from 'react';
import styles from './card.scss';

interface ICardProps {
  children?: React.ReactNode;
}

export function Card({ children }: ICardProps) {
  return (
    <li className={styles.card}>
      {children}
    </li>
  );
}

import React from 'react';
import styles from './card.scss';

interface ICardProps {
  children?: React.ReactNode;
}

export const Card = ({ children }: ICardProps) => (
  <li className={styles.card}>
    {children}
  </li>
);

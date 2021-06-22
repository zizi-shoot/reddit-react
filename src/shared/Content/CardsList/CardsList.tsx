import React from 'react';
import styles from './cardslist.scss';

interface ICardListProps {
  children?: React.ReactNode;
}

export const CardsList = ({ children }: ICardListProps) => (
  <ul className={styles.cardsList}>
    {children}
  </ul>
);

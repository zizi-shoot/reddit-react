import React from 'react';

interface ICardListProps {
  children?: React.ReactNode;
}

export const CardsList = ({ children }: ICardListProps) => (
  <ul className="cards">
    {children}
  </ul>
);

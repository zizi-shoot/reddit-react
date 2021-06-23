import React from 'react';

interface ICardListProps {
  children?: React.ReactNode;
}

export function CardsList({ children }: ICardListProps) {
  return (
    <ul className="cards">
      {children}
    </ul>
  );
}

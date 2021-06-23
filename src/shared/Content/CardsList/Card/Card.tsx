import React from 'react';

interface ICardProps {
  children?: React.ReactNode;
}

export function Card({ children }: ICardProps) {
  return (
    <li className="card">
      {children}
    </li>
  );
}

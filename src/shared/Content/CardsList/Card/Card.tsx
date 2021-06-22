import React from 'react';

interface ICardProps {
  children?: React.ReactNode;
}

export const Card = ({ children }: ICardProps) => (
  <li className="card">
    {children}
  </li>
);

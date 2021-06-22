import React from 'react';

interface IContentProps {
  children?: React.ReactNode;
}

export const Content = ({ children }: IContentProps) => (
  <main className="content">
    {children}
  </main>
);

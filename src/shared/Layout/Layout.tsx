import React from 'react';

interface ILayoutProps {
  children?: React.ReactNode;
}

export const Layout = ({ children }: ILayoutProps) => (
  <div className="container">
    {children}
  </div>
);

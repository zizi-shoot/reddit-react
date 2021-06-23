import React from 'react';
import { Search } from './Search';
import { Title } from './Title';
import { Sort } from './Sort';

export function Header() {
  return (
    <header className="header">
      <Search />
      <Title />
      <Sort />
    </header>
  );
}

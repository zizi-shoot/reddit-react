import React from 'react';
import { Search } from './Search';
import { Title } from './Title';
import { Sort } from './Sort';
import { Account } from './Account';

export function Header() {
  return (
    <header className="header">
      <div className="header__wrapper">
        <Account />
        <Search />
      </div>
      <Title />
      <Sort />
    </header>
  );
}

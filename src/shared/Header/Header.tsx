import React from 'react';
import { Search } from './Search';
import { Title } from './Title';
import { Sort } from './Sort';

export const Header = () => (
  <header className="header">
    <Search />
    <Title />
    <Sort />
  </header>
);

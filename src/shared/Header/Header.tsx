import React from 'react';
import styles from './header.scss';
import { Search } from './Search';
import { Title } from './Title';
import { Sort } from './Sort';

export const Header = () => (
  <header className={styles.header}>
    <Search />
    <Title />
    <Sort />
  </header>
);

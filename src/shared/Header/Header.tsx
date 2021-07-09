import React from 'react';

import { Search } from './Search';
import { Title } from './Title';
import { Sort } from './Sort';
import { Account } from './Account';
import { useUserData } from '../../hooks/useUserData';

export function Header() {
  const [data] = useUserData();

  return (
    <header className="header">
      <div className="header__wrapper">
        <Account avatarSrc={data.iconImg} username={data.name} />
        <Search />
      </div>
      <Title />
      <Sort />
    </header>
  );
}

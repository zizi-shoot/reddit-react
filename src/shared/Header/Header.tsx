import React from 'react';

import { Search } from './Search';
import { Title } from './Title';
import { Sort } from './Sort';
import { Account } from './Account';
import { useUserData } from '../../hooks/useUserData';

interface IHeaderProps {
  token: string;
}

export function Header({ token }: IHeaderProps) {
  const [data] = useUserData(token);

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

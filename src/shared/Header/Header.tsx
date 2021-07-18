import React from 'react';
import styles from './header.scss';

import { Search } from './Search';
import { Title } from './Title';
import { Sort } from './Sort';
import { Account } from './Account';
import { useUserData } from '../../hooks/useUserData';

export function Header() {
  const [data] = useUserData();

  return (
    <header className={styles.container}>
      <div className={styles.wrapper}>
        <Account avatarSrc={data.iconImg} username={data.name} extraClass={styles.account} />
        <Search />
      </div>
      <Title extraClass={styles.title} />
      <Sort extraClass={styles.sort} />
    </header>
  );
}

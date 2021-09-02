import React from 'react';
import styles from './header.scss';
import { Search } from './Search';
import { Title } from './Title';
import { Sort } from './Sort';
import { Account } from './Account';
import { useAccountData } from '../../hooks/useAccountData';

export function Header() {
  const { accountData } = useAccountData();

  return (
    <header className={styles.container}>
      <div className={styles.wrapper}>
        <Account
          avatarSrc={accountData.avatar}
          username={accountData.name}
          loading={accountData.loading}
          extraClass={styles.account}
        />
        <Search />
      </div>
      <Title extraClass={styles.title} />
      <Sort extraClass={styles.sort} />
    </header>
  );
}

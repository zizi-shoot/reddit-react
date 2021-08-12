import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import styles from './header.scss';
import { Search } from './Search';
import { Title } from './Title';
import { Sort } from './Sort';
import { Account } from './Account';
import { IRootState, IUserData, setUserData } from '../../store';

export function Header() {
  const token = useSelector<IRootState, string>((state) => state.userToken);
  const userData = useSelector<IRootState, IUserData>((state) => state.userData);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!token) return;
    axios
      .get(
        'https://oauth.reddit.com/api/v1/me?raw_json=1',
        { headers: { Authorization: `bearer ${token}` } },
      )
      .then((resp) => {
        const { data } = resp;
        dispatch(setUserData({ name: data.name, iconImg: data.icon_img }));
      })
      .catch(console.log);
  }, [token]);

  return (
    <header className={styles.container}>
      <div className={styles.wrapper}>
        <Account
          avatarSrc={userData.iconImg}
          username={userData.name}
          extraClass={styles.account}
        />
        <Search />
      </div>
      <Title extraClass={styles.title} />
      <Sort extraClass={styles.sort} />
    </header>
  );
}

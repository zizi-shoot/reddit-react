import React from 'react';
import classNames from 'classnames';
import styles from './account.scss';
import { EIcons, Icon } from '../../Icon';
import { EColor, Text } from '../../Text';

interface IAccountProps {
  avatarSrc?: string,
  username?: string,
  loading?: boolean,
  extraClass?: string,
}

export function Account({ avatarSrc, username, loading, extraClass }: IAccountProps) {
  const classes = classNames(extraClass, styles.container);
  const SERVER = process.env.SERVER || 'http://localhost';

  function onClick() {
    localStorage.removeItem('token');
  }

  return (
    <a
      href={`https://www.reddit.com/api/v1/authorize?client_id=${process.env.CLIENT_ID}&response_type=code&state=random_string&redirect_uri=${SERVER}/auth&duration=permanent&scope=read submit identity`}
      className={classes}
      onClick={onClick}
    >
      {
        avatarSrc
          ? (<span className={styles.avatar}><img src={avatarSrc} alt="user avatar" /></span>)
          : (<Icon name={EIcons.anon} size={50} mobileSize={30} extraClass={styles.icon} />)
      }
      <span className={styles.name}>
        {loading ? (
          <Text size={20} color={username ? EColor.black : EColor.grey99}>Загрузка...</Text>
        ) : (
          <Text size={20} color={username ? EColor.black : EColor.grey99}>{username || 'Аноним'}</Text>
        )}
      </span>
    </a>
  );
}

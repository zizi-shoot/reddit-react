import React from 'react';
import classNames from 'classnames';
import styles from './account.scss';
import { EIcons, Icon } from '../../Icon';
import { EColor, Text } from '../../Text';

interface IAccountProps {
  avatarSrc?: string;
  username?: string;
  extraClass?: string;
}

export function Account({ avatarSrc, username, extraClass }: IAccountProps) {
  const classes = classNames(extraClass, styles.container);

  function onClick() {
    localStorage.removeItem('token');
  }

  return (
    <a
      href={`https://www.reddit.com/api/v1/authorize?client_id=${process.env.CLIENT_ID}&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity`}
      className={classes}
      onClick={onClick}
    >
      {
        avatarSrc
          ? (<span className={styles.avatar}><img src={avatarSrc} alt="user avatar" /></span>)
          : (<Icon name={EIcons.anon} size={50} mobileSize={30} extraClass={styles.icon} />)
      }
      <span className={styles.name}>
        <Text size={20} color={username ? EColor.black : EColor.grey99}>
          {username || 'Аноним'}
        </Text>
      </span>
    </a>
  );
}

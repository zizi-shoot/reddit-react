import React from 'react';
import { EIcons, Icon } from '../../Icon';
import { EColor, Text } from '../../Text';

interface IAccountProps {
  avatarSrc?: string;
  username?: string;
}

export function Account({ avatarSrc, username }: IAccountProps) {
  return (
    <a
      href={`https://www.reddit.com/api/v1/authorize?client_id=${process.env.CLIENT_ID}&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity`}
      className="header__account account"
    >
      {
        avatarSrc
          ? (<img src={avatarSrc} alt="user avatar" className="account__avatar" />)
          : (<Icon name={EIcons.anon} size={50} mobileSize={30} />)
      }
      <span className="account__name">
        <Text size={20} color={username ? EColor.black : EColor.grey99}>
          {username || 'Аноним'}
        </Text>
      </span>
    </a>
  );
}

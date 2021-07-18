import React, { ReactNode } from 'react';
import styles from './icon.scss';
import classNames from 'classnames';
import { AnonIcon, CommentsIcon, ComplainIcon, HideIcon, KarmaDownIcon, KarmaUpIcon, MenuIcon, SaveIcon, ShareIcon } from '../Icons';

export enum EIcons {
  comments,
  complain,
  hide,
  menu,
  save,
  share,
  karmaUp,
  karmaDown,
  anon,
}

type TSizes = 12 | 14 | 16 | 20 | 30 | 50;

interface IIconProps {
  name: EIcons,
  size: TSizes,
  mobileSize?: TSizes;
  tabletSize?: TSizes;
  desktopSize?: TSizes;
  extraClass?: string;
}

function setIconComponent(name: EIcons): ReactNode {
  // eslint-disable-next-line default-case
  switch (name) {
    case EIcons.comments:
      return <CommentsIcon />;
    case EIcons.complain:
      return <ComplainIcon />;
    case EIcons.hide:
      return <HideIcon />;
    case EIcons.menu:
      return <MenuIcon />;
    case EIcons.save:
      return <SaveIcon />;
    case EIcons.share:
      return <ShareIcon />;
    case EIcons.karmaUp:
      return <KarmaUpIcon />;
    case EIcons.karmaDown:
      return <KarmaDownIcon />;
    case EIcons.anon:
      return <AnonIcon />;
    default:
      return <></>;
  }
}

export function Icon(props: IIconProps) {
  const {
    name,
    size,
    mobileSize,
    tabletSize,
    desktopSize,
    extraClass,
  } = props;

  const classes = classNames(
    extraClass,
    styles.container,
    styles[`s${size}`],
    { [styles[`m${mobileSize}`]]: mobileSize },
    { [styles[`t${tabletSize}`]]: tabletSize },
    { [styles[`d${desktopSize}`]]: desktopSize },
  );

  return (
    <span className={classes}>{setIconComponent(name)}</span>
  );
}

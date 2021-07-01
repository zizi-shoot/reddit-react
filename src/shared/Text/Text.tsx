import React, { ReactNode } from 'react';
import classNames from 'classnames';

type TSizes = 28 | 20 | 16 | 14 | 12 | 10;

export enum EColor {
  black = 'black',
  white = 'white',
  orange = 'orange',
  green = 'green',
  greyF3 = 'greyF3',
  greyF4 = 'greyF4',
  greyD9 = 'greyD9',
  greyC4 = 'greyC4',
  grey66 = 'grey66',
  grey99 = 'grey99',
  greyEC = 'greyEC',
}

interface ITextProps {
  As?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'div';
  children?: ReactNode;
  size: TSizes;
  mobileSize?: TSizes;
  tabletSize?: TSizes;
  desktopSize?: TSizes;
  color?: EColor;
}

export function Text(props: ITextProps) {
  const {
    As = 'span',
    color = EColor.black,
    children,
    size,
    mobileSize,
    tabletSize,
    desktopSize,
  } = props;

  const classes = classNames(
    `s${size}`,
    color,
    { [`m${mobileSize}`]: mobileSize },
    { [`t${tabletSize}`]: tabletSize },
    { [`d${desktopSize}`]: desktopSize },
  );
  return (
    <As className={classes}>
      {children}
    </As>
  );
}

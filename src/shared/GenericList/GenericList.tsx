import React, { ReactNode } from 'react';
import { noop } from '../../utils/js/noop';

export interface IItem {
  id: string,
  text?: string,
  onClick?: () => void,
  className?: string
  As?: 'a' | 'li' | 'button' | 'div';
  href?: string,
  icon?: ReactNode,
}

interface IGenericListProps {
  list: IItem[];
}

export function GenericList({ list }: IGenericListProps) {
  return (
    <>
      {list.map(({
        As = 'div',
        text,
        onClick = noop,
        className,
        id,
        href,
        icon,
      }) => (
        <As
          className={className}
          onClick={onClick}
          key={id}
          href={href}
        >
          <button type="button">
            {icon}
            {text}
          </button>
        </As>
      ))}
    </>
  );
}

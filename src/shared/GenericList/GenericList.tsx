import React, { ReactNode } from 'react';
import { noop } from '../../utils/js/noop';

interface IItem {
  id: string,
  text: string,
  onClick?: (id: string) => void,
  className?: string
  As?: 'a' | 'li' | 'button' | 'div';
  href?: string,
  icon?: ReactNode,
  component?: ReactNode,
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
        component
      }) => (
        <As
          className={className}
          onClick={() => onClick(id)}
          key={id}
          href={href}
        >
          {icon}
          {text}
          {component}
        </As>
      ))}
    </>
  );
}

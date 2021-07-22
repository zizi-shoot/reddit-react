import React from 'react';
import styles from './formactions.scss';
import { GenericList, IItem } from '../../../../GenericList/GenericList';
import { merge } from '../../../../../utils/js/merge';

interface IFormActionsProps {
  items: IItem[],
}

export function FormActions({ items }: IFormActionsProps) {
  return (
    <ul className={styles.container}>
      <GenericList list={items.map(merge({}))} />
    </ul>
  );
}

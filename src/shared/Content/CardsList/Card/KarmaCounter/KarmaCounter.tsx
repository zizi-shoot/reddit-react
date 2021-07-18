import React from 'react';
import { EIcons, Icon } from '../../../../Icon';
import styles from './karmacounter.scss';

interface IKarmaCounterProps {
  karma: number
}

export function KarmaCounter({ karma }: IKarmaCounterProps) {
  return (
    <div className={styles.container}>
      <button className={styles.up} type="button">
        <Icon name={EIcons.karmaUp} size={20} />
      </button>
      <span className={styles.value}>{karma}</span>
      <button className={styles.down} type="button">
        <Icon name={EIcons.karmaDown} size={20} />
      </button>
    </div>
  );
}

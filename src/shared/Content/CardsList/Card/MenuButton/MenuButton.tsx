import React from 'react';
import { Dropdown } from '../../../../Dropdown';
import { Menu } from '../Menu';
import { EIcons, Icon } from '../../../../Icon';
import styles from './menubutton.scss';

export function MenuButton() {
  return (
    <div className={styles.container}>
      <Dropdown
        button={(
          <button type="button" className={styles.btn}>
            <Icon name={EIcons.menu} size={20} />
          </button>
        )}
      >
        <Menu />
      </Dropdown>
    </div>
  );
}

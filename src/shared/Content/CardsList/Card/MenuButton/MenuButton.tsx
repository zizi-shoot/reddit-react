import React from 'react';
import { Dropdown } from '../../../../Dropdown';
import { Menu } from '../Menu';
import { EIcons, Icon } from '../../../../Icon';

export function MenuButton() {
  return (
    <div className="card__menu-btn card-menu-btn">
      <Dropdown
        button={(
          <button type="button" className="card-menu-btn__btn">
            <Icon name={EIcons.menu} size={20} />
          </button>
        )}
      >
        <Menu />
      </Dropdown>
    </div>
  );
}

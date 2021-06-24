import React from 'react';
import { Dropdown } from '../../../../Dropdown';
import { Menu } from '../Menu';
import { MenuIcon } from '../../../../Icons';

export function MenuButton() {
  return (
    <div className="card__menu-btn card-menu-btn">
      <Dropdown
        button={(
          <button type="button" className="card-menu-btn__btn">
            <MenuIcon />
          </button>
        )}
      >
        <Menu />
      </Dropdown>
    </div>
  );
}

import React, { ReactNode, useEffect, useState } from 'react';
import { noop } from '../../utils/js/noop';

interface IDropdownProps {
  button: ReactNode;
  children: ReactNode;
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

export function Dropdown(props: IDropdownProps) {
  const {
    button,
    children,
    isOpen,
    onOpen = noop,
    onClose = noop,
  } = props;

  const [isDropdownOpen, setIsDropdownOpen] = useState(isOpen);

  useEffect(() => setIsDropdownOpen(isOpen), [isOpen]);
  useEffect(() => (isDropdownOpen ? onOpen() : onClose()), [isDropdownOpen]);

  const handleOpen = () => {
    if (!isOpen) {
      setIsDropdownOpen(!isDropdownOpen);
    }
  };

  return (
    <div className="dropdown">
      <div onClick={handleOpen}>
        {button}
      </div>
      {isDropdownOpen && (
        <div className="dropdown__wrapper">
          <div className="dropdown__list" onClick={() => setIsDropdownOpen(false)}>
            {children}
          </div>
        </div>
      )}
    </div>
  );
}

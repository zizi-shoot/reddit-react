import React, { CSSProperties, ReactNode, RefObject, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { noop } from '../../utils/js/noop';
import styles from './dropdown.scss';
import { getCoords } from '../../utils/js/getCoords';

interface IDropdownProps {
  button: ReactNode;
  children: ReactNode;
  parentRef?: RefObject<HTMLDivElement>,
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

export function Dropdown(props: IDropdownProps) {
  const {
    button,
    children,
    parentRef,
    isOpen,
    onOpen = noop,
    onClose = noop,
  } = props;

  function handleOpen() {
    if (!isOpen) {
      setIsDropdownOpen(!isDropdownOpen);
    }
  }

  const [isDropdownOpen, setIsDropdownOpen] = useState(isOpen);
  const [style, setStyle] = useState<CSSProperties>();

  useEffect(() => setIsDropdownOpen(isOpen), [isOpen]);
  useEffect(() => (isDropdownOpen ? onOpen() : onClose()), [isDropdownOpen]);
  useEffect(() => {
    function handleResize() {
      const coords = getCoords(parentRef?.current);
      setStyle({
        position: 'absolute',
        top: `${coords.top - 15}px`,
        left: `${coords.left - 10}px`,
      });
    }

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [parentRef]);

  const dropdown = document.getElementById('dropdown');
  if (!dropdown) return null;

  return ReactDOM.createPortal((
    <div className={styles.container} style={style}>
      <div onClick={handleOpen}>
        {button}
      </div>
      {isDropdownOpen && (
        <div className={styles.wrapper}>
          <div className={styles.list} onClick={() => setIsDropdownOpen(false)}>
            {children}
          </div>
        </div>
      )}
    </div>
  ), dropdown);
}

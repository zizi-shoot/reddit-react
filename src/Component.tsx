import React from 'react';
import styles from './app.scss';

console.log(styles);
export const Component = () => (
  <>
    <p className={styles['component--mod']}>Hello React from JS!</p>
  </>
);

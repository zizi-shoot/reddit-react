import React from 'react';
import styles from './imgpreview.scss';
import img from './img-preview.jpg';

export const ImgPreview = () => (
  <div className={styles.preview}>
    <img
      src={img}
      alt="preview"
      className={styles.preview__img}
    />
  </div>
);

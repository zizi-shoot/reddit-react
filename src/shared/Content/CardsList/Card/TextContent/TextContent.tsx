import React from 'react';
import styles from './textcontent.scss';
import avatar from './avatar.png';

export const TextContent = () => (
  <div className={styles.textContent}>
    <div className={styles.metaData}>
      <div className={styles.userLink}>
        <img
          src={avatar}
          alt="avatar"
          className={styles.avatar}
        />
        <a href="#user-url" className={styles.username}>Дмитрий Гришин</a>
      </div>
      <span className={styles.createdAt}>
        <span className={styles.publishedLabel}>опубликовано </span>
        4 часа назад
      </span>
    </div>
    <h2 className={styles.title}>
      <a href="#post-url" className={styles.postLink}>
        Реализация намеченных плановых заданий Реализация намеченных плановых заданий заданий Реализация намеченных плановых заданий
      </a>
    </h2>
  </div>
);

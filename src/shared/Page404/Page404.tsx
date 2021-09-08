import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './page404.scss';
import img404 from '../../assets/reddit404a.png';

export function Page404() {
  const location = useLocation();

  return (
    <article className={styles.container}>
      <img src={img404} className={styles.img} alt="страница не найдена" />
      <h1 className={styles.title}>404</h1>
      <p className={styles.descr}>
        Страница
        {' '}
        <span>{location.pathname}</span>
        {' '}
        не найдена
      </p>
      <Link className={styles.returnLink} to="/posts">Вернуться на главную</Link>
    </article>
  );
}

import React from 'react';
import avatar from './avatar.png';

export function TextContent() {
  return (
    <div className="card__text-content text-content">
      <div className="text-content__meta text-meta">
        <div className="text-meta__link">
          <img
            src={avatar}
            alt="avatar"
            className="text-meta__avatar"
          />
          <a href="#user-url" className="text-meta__username">Дмитрий Гришин</a>
        </div>
        <span className="text-content__created-at text-created-at">
          <span className="text-created-at__label">опубликовано </span>
          4 часа назад
        </span>
      </div>
      <h2 className="text-content__title text-title">
        <a href="#post-url" className="text-title__link">
          Реализация намеченных плановых заданий Реализация намеченных плановых заданий заданий Реализация намеченных плановых заданий
        </a>
      </h2>
    </div>
  );
}

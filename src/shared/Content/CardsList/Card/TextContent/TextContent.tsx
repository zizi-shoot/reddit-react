import React from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ru';
import { useAuthorAvatar } from '../../../../../hooks/useAuthorAvatar';

dayjs.locale('ru');
dayjs.extend(relativeTime);

interface ITextContentProps {
  username: string;
  createdAt: string;
  title: string;
}

export function TextContent({ username, createdAt, title }: ITextContentProps) {
  const timeDiff = dayjs(+createdAt * 1000).fromNow();
  const [avatar] = useAuthorAvatar(username);

  return (
    <div className="card__text-content text-content">
      <div className="text-content__meta text-meta">
        <div className="text-meta__link">
          <img
            src={avatar}
            alt="avatar"
            className="text-meta__avatar"
          />
          <a href="#user-url" className="text-meta__username">{username}</a>
        </div>
        <span className="text-content__created-at text-created-at">
          <span className="text-created-at__label">опубликовано </span>
          {timeDiff}
        </span>
      </div>
      <h2 className="text-content__title text-title">
        <a href="#post-url" className="text-title__link">{title}</a>
      </h2>
    </div>
  );
}

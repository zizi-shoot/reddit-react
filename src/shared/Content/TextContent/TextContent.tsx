import React from 'react';
import dayjs from 'dayjs';
import classNames from 'classnames';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ru';
import { Link } from 'react-router-dom';
import styles from './textcontent.scss';
import { EIcons, Icon } from '../../Icon';

dayjs.locale('ru');
dayjs.extend(relativeTime);

interface ITextContentProps {
  id?: string,
  username: string,
  avatar: string,
  createdAt: number,
  title?: string,
  partition?: string,
  extraClass?: string,
  isModal?: boolean,
  isLoading: boolean,
}

export function TextContent(props: ITextContentProps) {
  const {
    id,
    username,
    avatar,
    createdAt,
    title,
    partition,
    extraClass,
    isModal = false,
    isLoading = false,
  } = props;
  const timeDiff = dayjs(createdAt * 1000).fromNow();
  const classes = classNames(extraClass, styles.container);

  return (
    <div className={classes}>
      <div className={styles.meta}>
        {
          partition
          && (
            <div className={styles.partitionWrapper}>
              <span className={styles.partition}>{partition}</span>
            </div>
          )
        }
        <div className={styles.metaLink}>
          {
            isLoading
              ? <Icon name={EIcons.anon} size={20} extraClass={styles.metaDownload} />
              : (
                <img
                  src={avatar}
                  alt="avatar"
                  className={styles.metaAvatar}
                />
              )
          }
          <a href="#user-url" className={styles.metaUsername}>{username}</a>
        </div>
        <span className={styles.createdAt}>
          <span className={styles.createdAtLabel}>опубликовано </span>
          {timeDiff}
        </span>
      </div>
      {
        title
        && (
          <h2 className={styles.title}>
            {isModal
              ? title
              : (
                <Link
                  to={encodeURI(`/posts/${id}/${title.split(' ').splice(0, 10).join('_')}`)}
                  className={styles.titleLink}
                >
                  {title}
                </Link>
              )}
          </h2>
        )
      }
    </div>
  );
}

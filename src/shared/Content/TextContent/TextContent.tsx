import React, { useState } from 'react';
import dayjs from 'dayjs';
import classNames from 'classnames';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ru';
import { clearAllBodyScrollLocks, disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import styles from './textcontent.scss';
import { Post } from '../Post';
import { EIcons, Icon } from '../../Icon';

dayjs.locale('ru');
dayjs.extend(relativeTime);

interface ITextContentProps {
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
  const modal = document.getElementById('modal');
  const classes = classNames(extraClass, styles.container);
  const [isModalOpened, setIsModalOpened] = useState(false);

  function handleClick() {
    if (isModal) return;
    setIsModalOpened(true);
    modal?.classList.toggle('post--hidden');
    if (modal) disableBodyScroll(modal);
  }

  function handleClose() {
    setIsModalOpened(false);
    modal?.classList.toggle('post--hidden');
    if (modal) enableBodyScroll(modal);
    clearAllBodyScrollLocks();
  }

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
            <button type="button" className={styles.titleBtn} onClick={handleClick}>{title}</button>
          </h2>
        )
      }
      {
        isModalOpened
        && <Post onClose={handleClose} />
      }
    </div>
  );
}

import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import classNames from 'classnames';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ru';
import { clearAllBodyScrollLocks, disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import styles from './textcontent.scss';
import { Post } from '../Post';
import { IRootState, setAuthorAvatar } from '../../../store';

dayjs.locale('ru');
dayjs.extend(relativeTime);

interface ITextContentProps {
  username: string,
  createdAt: string,
  title?: string,
  partition?: string,
  extraClass?: string,
  isModal?: boolean,
}

export function TextContent(props: ITextContentProps) {
  const {
    username,
    createdAt,
    title,
    partition,
    extraClass,
    isModal = false,
  } = props;
  const timeDiff = dayjs(+createdAt * 1000).fromNow();
  const modal = document.getElementById('modal');
  const classes = classNames(extraClass, styles.container);
  const token = useSelector<IRootState, string>((state) => state.userToken);
  const avatar = useSelector<IRootState, string>((state) => state.authorsAvatars[username]);
  const [isModalOpened, setIsModalOpened] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(
        `https://oauth.reddit.com/user/${username}/about?raw_json=1`,
        { headers: { Authorization: `bearer ${token}` } },
      )
      .then((resp) => {
        dispatch(setAuthorAvatar({ [username]: resp.data.data.icon_img }));
      })
      .catch(console.log);
  }, [token]);

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
          <img
            src={avatar}
            alt="avatar"
            className={styles.metaAvatar}
          />
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

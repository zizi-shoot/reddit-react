import React from 'react';
import classNames from 'classnames';
import styles from './commentlist.scss';
import { Controls } from '../../CardsList/Card/Controls';
import { KarmaCounter } from '../../CardsList/Card/KarmaCounter';
import { Comment } from './Comment';
import { CommentMenu } from './Comment/CommentMenu';
import { TextContentContainer } from '../../TextContentContainer';

interface ICommentItem {
  id: string,
  author: string,
  created: number,
  score: number,
  subitems?: ICommentItem[],
  partition?: string,
}

interface ICommentListProps {
  items: ICommentItem[],
  extraClass?: string,
}

export function CommentList({ items, extraClass }: ICommentListProps) {
  const classes = classNames(styles.container, extraClass);

  return (
    <ul className={classes}>
      <>
        {items.map(({
          id,
          author,
          created,
          score,
          subitems,
          partition,
        }) => (
          <Comment key={id}>
            <TextContentContainer
              id={id}
              username={author}
              createdAt={created}
              partition={partition}
              extraClass={styles.textContent}
            />
            <p>Сторонники тоталитаризма в науке будут объективно рассмотрены соответствующими инстанциями. Лишь реплицированные с зарубежных источников, современные исследования будут описаны максимально подробно. </p>
            <Controls extraClass={styles.controls} isComment author={author}>
              <KarmaCounter karma={score} />
            </Controls>
            <CommentMenu author={author} />
            {
              subitems
              && <CommentList items={subitems} extraClass={styles.commentList} />
            }
          </Comment>
        ))}
      </>
    </ul>
  );
}

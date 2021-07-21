import React from 'react';
import classNames from 'classnames';
import styles from './commentlist.scss';
import { TextContent } from '../../CardsList/Card/TextContent';
import { Controls } from '../../CardsList/Card/Controls';
import { KarmaCounter } from '../../CardsList/Card/KarmaCounter';
import { Comment } from './Comment';

export interface IItem {
  id: string,
  author: string,
  created: string,
  score: number,
  subitems?: IItem[],
  partition?: string,
}

interface ICommentListProps {
  items: IItem[];
  extraClass?: string;
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
            <TextContent
              username={author}
              createdAt={created}
              partition={partition}
              extraClass={styles.textContent}
            />
            <p>Сторонники тоталитаризма в науке будут объективно рассмотрены соответствующими инстанциями. Лишь реплицированные с зарубежных источников, современные исследования будут описаны максимально подробно. </p>
            <Controls extraClass={styles.controls} isComment>
              <KarmaCounter karma={score} />
            </Controls>
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

import React, { ChangeEvent, FormEvent, useContext } from 'react';
import { commentContext } from '../../../context/commentContext';
import styles from './commentform.scss';
import { EIcons, Icon } from '../../../Icon';

export function CommentForm() {
  const { value, onChange } = useContext(commentContext);

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    onChange(event.target.value);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
  }

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <button className={styles.actionsBtn} type="submit">
        <Icon name={EIcons.actions} size={20} />
      </button>
      <textarea className={styles.area} name="comment" id="comment" value={value} onChange={handleChange} placeholder="Ваш комментарий" />
      <button className={styles.emojiBtn} type="submit">
        <Icon name={EIcons.emoji} size={20} />
      </button>
      <div className={styles.actions} />
      <button className={styles.submitBtn} type="submit">
        <span className={styles.submitBtnText}>Комментировать</span>
        <Icon name={EIcons.comment} size={20} extraClass={styles.submitIcon} />
      </button>
    </form>
  );
}

import React, { ChangeEvent, FormEvent, useContext } from 'react';
import { commentContext } from '../../../context/commentContext';

export function CommentForm() {
  const { value, onChange } = useContext(commentContext);

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    onChange(event.target.value);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
  }

  return (
    <form className="post__comment comment-form" onSubmit={handleSubmit}>
      <textarea className="comment-form__area" name="comment" id="comment" value={value} onChange={handleChange} />
      <div className="comment-form__actions" />
      <button className="comment-form__submit-btn" type="submit">Комментировать</button>
    </form>
  );
}

import React, { ChangeEvent, FormEvent, useState } from 'react';

export function CommentForm() {
  const [value, setValue] = useState('');

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setValue(event.target.value);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
  }

  return (
    <form className="modal__comment comment-form" onSubmit={handleSubmit}>
      <textarea className="comment-form__area" name="comment" id="comment" value={value} onChange={handleChange} />
      <div className="comment-form__actions" />
      <button className="comment-form__submit-btn" type="submit">Комментировать</button>
    </form>
  );
}

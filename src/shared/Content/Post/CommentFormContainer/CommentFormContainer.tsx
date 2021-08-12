import { useDispatch, useSelector } from 'react-redux';
import React, { ChangeEvent, FormEvent } from 'react';
import { IRootState, updateComment } from '../../../../store';
import { CommentForm } from '../CommentForm';

interface Props {
  isFocused: boolean,
  onBlur: () => void,
  extraClass?: string,
}

export function CommentFormContainer({ isFocused, onBlur, extraClass }: Props) {
  const dispatch = useDispatch();
  const value = useSelector<IRootState, string>((state) => state.commentText);

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    dispatch(updateComment(event.target.value));
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
  }

  return (
    <CommentForm
      onChange={handleChange}
      onBlur={onBlur}
      onSubmit={handleSubmit}
      extraClass={extraClass}
      isFocused={isFocused}
      value={value}
    />
  );
}

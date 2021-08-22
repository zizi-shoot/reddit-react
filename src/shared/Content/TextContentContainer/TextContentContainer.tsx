import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { TextContent } from '../TextContent';
import { IRootState, IUsers } from '../../../types';
import { IToken } from '../../../store/token/types';
import { userRequestAsync } from '../../../store/users/actions';

interface ITextContentProps {
  username: string,
  createdAt: number,
  title?: string,
  partition?: string,
  extraClass?: string,
  isModal?: boolean,
}

export function TextContentContainer(props: ITextContentProps) {
  const {
    username,
    createdAt,
    title,
    partition,
    extraClass,
    isModal = false,
  } = props;
  const token = useSelector<IRootState, IToken['value']>((state) => state.token.value);
  const users = useSelector<IRootState, IUsers>((state) => state.entities.users);
  const isLoading = useSelector<IRootState, boolean>((state) => state.entities.users[username]?.loading);
  const avatar = users[username]?.avatar;
  const dispatch = useDispatch();

  useEffect(() => {
    if (users[username]) return;
    dispatch(userRequestAsync(username));
  }, []);

  return (
    token
      ? (
        <TextContent
          username={username}
          avatar={avatar}
          createdAt={createdAt}
          title={title}
          partition={partition}
          extraClass={extraClass}
          isModal={isModal}
          isLoading={isLoading}
        />
      )
      : null
  );
}

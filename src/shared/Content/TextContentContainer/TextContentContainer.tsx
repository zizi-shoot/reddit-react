import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import { TextContent } from '../TextContent';
import { IRootState, IUsers } from '../../../types';
import { setUser } from '../../../store/actions';

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
  const token = useSelector<IRootState, string>((state) => state.token);
  const users = useSelector<IRootState, IUsers>((state) => state.entities.users);
  const avatar = users[username]?.avatar;
  const dispatch = useDispatch();

  useEffect(() => {
    if (!token) return;
    axios
      .get(
        `https://oauth.reddit.com/user/${username}/about?raw_json=1`,
        { headers: { Authorization: `bearer ${token}` } },
      )
      .then((resp) => {
        dispatch(setUser({ name: username, avatar: resp.data.data.icon_img }));
      })
      .catch(console.log);
  }, [token]);

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
        />
      )
      : null
  );
}

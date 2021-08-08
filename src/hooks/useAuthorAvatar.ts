import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

export function useAuthorAvatar(author: string) {
  const [avatar, setAvatar] = useState('');
  const token = useSelector<RootState, string>((state) => state.userToken);

  useEffect(() => {
    axios
      .get(
        `https://oauth.reddit.com/user/${author}/about?raw_json=1`,
        { headers: { Authorization: `bearer ${token}` } },
      )
      .then((resp) => {
        setAvatar(resp.data.data.icon_img);
      })
      .catch(console.log);
  }, [author, token]);

  return [avatar];
}

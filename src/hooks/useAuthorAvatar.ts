import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { tokenContext } from '../shared/context';

export function useAuthorAvatar(author: string) {
  const [avatar, setAvatar] = useState('');
  const token = useContext(tokenContext);

  useEffect(() => {
    axios
      .get(
        `https://oauth.reddit.com//user/${author}/about?raw_json=1`,
        { headers: { Authorization: `bearer ${token}` } },
      )
      .then((resp) => {
        setAvatar(resp.data.data.icon_img);
      })
      .catch(console.log);
  }, [author, token]);

  return [avatar];
}

import React from 'react';
import { TImgPreview, usePostsData } from '../../hooks/usePostsData';

interface IPostsContextData {
  id: string,
  author: string,
  title: string,
  imgPreview: TImgPreview,
  created: string,
  score: number,
}

export const postsContext = React.createContext<IPostsContextData[]>([]);

export function PostsContextProvider({ children }: { children: React.ReactNode }) {
  const [data] = usePostsData();

  return (
    <postsContext.Provider value={data}>
      {children}
    </postsContext.Provider>
  );
}

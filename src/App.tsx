import React, { useState } from 'react';
import './main.global.scss';
import { hot } from 'react-hot-loader/root';
import { Layout } from './shared/Layout';
import { Header } from './shared/Header';
import { Content } from './shared/Content';
import { CardsList } from './shared/Content/CardsList';
import { useToken } from './hooks/useToken';
import { PostsContextProvider, tokenContext } from './shared/context';
import { commentContext } from './shared/context/commentContext';
import { Post } from './shared/Content/Post';

function AppComponent() {
  const [commentValue, setCommentValue] = useState('');
  const [token] = useToken();

  const CommentProvider = commentContext.Provider;

  const handleClose = () => {};

  return (
    <CommentProvider value={{
      value: commentValue,
      onChange: setCommentValue,
    }}
    >
      <tokenContext.Provider value={token}>
        <PostsContextProvider>
          <Layout>
            <Post onClose={handleClose} />
            <Header />
            <Content>
              <CardsList />
            </Content>
          </Layout>
        </PostsContextProvider>
      </tokenContext.Provider>
    </CommentProvider>
  );
}

export const App = hot(() => <AppComponent />);

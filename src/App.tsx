import React, { useState } from 'react';
import './main.global.scss';
import { hot } from 'react-hot-loader/root';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Layout } from './shared/Layout';
import { Header } from './shared/Header';
import { Content } from './shared/Content';
import { CardsList } from './shared/Content/CardsList';
import { useToken } from './hooks/useToken';
import { commentContext, PostsContextProvider, tokenContext } from './shared/context';

const store = createStore(() => {}, composeWithDevTools());

function AppComponent() {
  const [commentValue, setCommentValue] = useState('');
  const [token] = useToken();
  const CommentProvider = commentContext.Provider;

  return (
    <Provider store={store}>
      <CommentProvider value={{
        value: commentValue,
        onChange: setCommentValue,
      }}
      >
        <tokenContext.Provider value={token}>
          <PostsContextProvider>
            <Layout>
              <Header />
              <Content>
                <CardsList />
              </Content>
            </Layout>
          </PostsContextProvider>
        </tokenContext.Provider>
      </CommentProvider>
    </Provider>
  );
}

export const App = hot(() => <AppComponent />);

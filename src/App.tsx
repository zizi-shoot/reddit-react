import React, { useEffect } from 'react';
import './main.global.scss';
import { hot } from 'react-hot-loader/root';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Layout } from './shared/Layout';
import { Header } from './shared/Header';
import { Content } from './shared/Content';
import { CardsList } from './shared/Content/CardsList';
import { PostsContextProvider } from './shared/context';
import { rootReducer, setToken } from './store';

const store = createStore(rootReducer, composeWithDevTools());

function AppComponent() {
  useEffect(() => {
    const token = localStorage.getItem('token') || window.__token__;
    store.dispatch(setToken(token));
    if (token) {
      localStorage.setItem('token', token);
    }
  }, []);
  return (
    <Provider store={store}>
      <PostsContextProvider>
        <Layout>
          <Header />
          <Content>
            <CardsList />
          </Content>
        </Layout>
      </PostsContextProvider>
    </Provider>
  );
}

export const App = hot(() => <AppComponent />);

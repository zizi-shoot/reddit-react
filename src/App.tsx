import React from 'react';
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
import { PostsContextProvider, tokenContext } from './shared/context';
import { rootReducer } from './store';

const store = createStore(rootReducer, composeWithDevTools());

function AppComponent() {
  const [token] = useToken();

  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export const App = hot(() => <AppComponent />);

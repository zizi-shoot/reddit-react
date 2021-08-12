import React, { useEffect } from 'react';
import './main.global.scss';
import { hot } from 'react-hot-loader/root';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Layout } from './shared/Layout';
import { Header } from './shared/Header';
import { rootReducer, setToken } from './store';
import { Content } from './shared/Content';
import { CardsListContainer } from './shared/Content/CardsListContainer';

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk),
));

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
      <Layout>
        <Header />
        <Content>
          <CardsListContainer />
        </Content>
      </Layout>
    </Provider>
  );
}

export const App = hot(() => <AppComponent />);

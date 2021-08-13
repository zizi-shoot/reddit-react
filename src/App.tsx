import React, { useEffect } from 'react';
import './main.global.scss';
import { hot } from 'react-hot-loader/root';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Layout } from './shared/Layout';
import { Header } from './shared/Header';
import { Content } from './shared/Content';
import { CardsListContainer } from './shared/Content/CardsListContainer';
import { rootReducer } from './store/reducer';
import { setToken } from './store/actions';

const store = createStore(rootReducer, composeWithDevTools(
  // applyMiddleware(thunk),
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

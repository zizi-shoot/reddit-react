import React, { useEffect, useState } from 'react';
import './main.global.scss';
import { hot } from 'react-hot-loader/root';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Layout } from './shared/Layout';
import { Header } from './shared/Header';
import { Content } from './shared/Content';
import { CardsListContainer } from './shared/Content/CardsListContainer';
import { rootReducer } from './store/reducer';
import { Post } from './shared/Content/Post';
import { Page404 } from './shared/Page404';

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk),
));

function AppComponent() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <Provider store={store}>
      {isMounted
      && (
        <BrowserRouter>
          <Switch>
            <Redirect from="/auth" to="/posts" />
            <Redirect exact from="/" to="/posts" />
            <Route path="/posts">
              <Layout>
                <Header />
                <Content>
                  <CardsListContainer />
                  <Route path="/posts/:id">
                    <Post />
                  </Route>
                </Content>
              </Layout>
            </Route>
            <Route path="*">
              <Page404 />
            </Route>
          </Switch>
        </BrowserRouter>
      )}
    </Provider>
  );
}

export const App = hot(() => <AppComponent />);

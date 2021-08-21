import React from 'react';
import './main.global.scss';
import { hot } from 'react-hot-loader/root';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Layout } from './shared/Layout';
import { Header } from './shared/Header';
import { Content } from './shared/Content';
import { CardsListContainer } from './shared/Content/CardsListContainer';
import { rootReducer } from './store/reducer';

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk),
));

function AppComponent() {
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

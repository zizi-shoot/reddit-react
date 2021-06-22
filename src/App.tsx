import React from 'react';
import './main.scss';
import { hot } from 'react-hot-loader/root';
import { Layout } from './shared/Layout';
import { Header } from './shared/Header';
import { Content } from './shared/Content';
import { CardsList } from './shared/Content/CardsList';
import { Card } from './shared/Content/CardsList/Card';
import { ImgPreview } from './shared/Content/CardsList/Card/ImgPreview';
import { Menu } from './shared/Content/CardsList/Card/Menu';
import { TextContent } from './shared/Content/CardsList/Card/TextContent';
import { Controls } from './shared/Content/CardsList/Card/Controls';

const AppComponent = () => (
  <Layout>
    <Header />
    <Content>
      <CardsList>
        <Card>
          <TextContent />
          <ImgPreview />
          <Menu />
          <Controls />
        </Card>
      </CardsList>
    </Content>
  </Layout>
);

export const App = hot(AppComponent);

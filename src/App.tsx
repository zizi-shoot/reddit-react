import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Component } from './Component';

const AppComp = () => (
  <Component />
);

export const App = hot(AppComp);

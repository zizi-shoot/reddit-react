import React from 'react';
import './Header.css';
import { hot } from 'react-hot-loader/root';

const HeaderComponent = () => (
  <div className="hello">Hello from React!!!1</div>
);

export const Header = hot(HeaderComponent);

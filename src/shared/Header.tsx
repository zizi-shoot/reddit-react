// eslint-disable-next-line no-use-before-define
import React from 'react';
import { hot } from 'react-hot-loader/root';

const HeaderComponent = () => (
  <div className="hello">Hello from React!!!1</div>
);

const Header = hot(HeaderComponent);
export default Header;

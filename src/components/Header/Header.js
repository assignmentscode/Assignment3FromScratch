import React from 'react';
import './Header.css';

const Header = props => (
  <div className="header">
    <div className="first-row">
      <div className="header-line" />
      <h1 onClick={props.onClickFunction}>BS</h1>
      <div className="header-line" />
    </div>
    <h2>The Book Shelf</h2>
  </div>
);
export default Header;

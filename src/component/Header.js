import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

function Header(props) {
  return (
    <header className='header'>
      <h1>
        <Link to='/'>
          <img src={`${process.env.PUBLIC_URL}/images/logo-YTS.svg`} alt="로고 이미지" />
        </Link>
        <Navigation />
      </h1>
    </header>
  );
}

export default Header;
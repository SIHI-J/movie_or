import React from 'react';
import { Link } from 'react-router-dom';

function Navigation(props) {
  return (
    <nav className='nav'>
      <ul>
        <li><Link to='/' title='홈으로'>Home</Link></li>
        <li><Link to='/api' title='영화 api 페이지'>API</Link></li>
        <li><Link to='/contact' title='문의하기'>Contact US</Link></li>
        <li><Link to='/router_ex' title='리액트에서 라우더 설정 방법과 활용'>Router</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;
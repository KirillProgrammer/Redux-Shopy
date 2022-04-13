import React from 'react';
import { Link } from 'react-router-dom';
import './nav.scss';

function Nav() {
  return (
    <nav>
      <Link to="/" >На главную</Link>
      <Link to="/favorite" >Избранное</Link>
      <Link to="/cart" >Корзина</Link>
    </nav>
  )
}

export default Nav;
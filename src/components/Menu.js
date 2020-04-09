import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <nav>
      <Link to="/">home</Link>
      <span> | </span>
      <Link to="/counter">counter</Link>
      <span> | </span>
      <Link to="/counterValue">current value</Link>
      <span> | </span>
      <Link to="/enterValue">enter your value</Link>
      <span> | </span>
      <Link to="/enterTodo">manage your todos</Link>
    </nav>
  )
}

export default Menu;
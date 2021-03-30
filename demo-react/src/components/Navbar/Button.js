import React from 'react';
import './Button.scss';
import { Link } from 'react-router-dom';

export function Button() {
  return (
    <Link to='/login'>
      <button className='btn'>Login</button>
    </Link>
  );
}

import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.scss';


function Navbar() {



  return (
    <>
      <nav className='navbar'>

        <ul className='nav-menu'>
          
          <li className='nav-item'>
            <Link
              to='/'
              className='nav-links' >
              Home
            </Link>
          </li>

          <li className='nav-item'>
            <Link
              to='/services'
              className='nav-links'
            >
              services
            </Link>
          </li>

          <li className='nav-item'>
            <Link
              to='/products'
              className='nav-links'
            >
              Products
            </Link>
          </li>

          <li className='nav-item'>
            <Link
              to='/contact-us'
              className='nav-links'
            >
              Contact Us
            </Link>
          </li>
        </ul>
        
        <Button />
      </nav>
    </>
  );
}

export default Navbar;

import React from 'react';
import Logo from '../assets/logo.svg';
const NavMenu = () => {
  return (
    <header>
      <div className='logo'>
        <img src={Logo} alt='snap' />
      </div>
      <ul className='drop'>
        <li className='lili'>Features </li>
        <li className='lili'>Company </li>
        <li className='lili'>Careers </li>
        <li className='lili'>About</li>
      </ul>

      <p>Login Register</p>
    </header>
  );
};

export default NavMenu;

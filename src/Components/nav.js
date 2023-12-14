import React from 'react';
import Logo from '../assets/logo.svg';
import { links } from '../data';
const NavMenu = () => {
  return (
    <header>
      <div className='logo'>
        <img src={Logo} alt='snap' />
      </div>
      <nav className='nav-center'>
        <ul className='menus'>
          {links.map((link) => {
            const { id, url, text } = link;
            return (
              <li key={id} className='lili'>
                {text}
              </li>
            );
          })}
        </ul>
      </nav>

      <p>Login Register</p>
    </header>
  );
};

export default NavMenu;

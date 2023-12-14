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
            const { id, url, text, sublinks } = link;
            return (
              <li key={id} className='lili'>
                {sublinks ? (
                  <>
                    <a href={url}>{text}</a>
                    <ul className='dropdown'>
                      {sublinks.map((sublink) => {
                        const { id, url, text } = sublink;
                        return <a href={url}>{text}</a>;
                      })}
                    </ul>
                  </>
                ) : (
                  <a href={url}>{text}</a>
                )}
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

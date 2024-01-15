import React from 'react';
import { useState } from 'react';
import Logo from '../assets/logo.svg';
import { links } from '../data';

const NavMenu = () => {
  const [dropdown, setDropdown] = useState(false);
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
                    <div
                      href={url}
                      onClick={() => setDropdown((prev) => !prev)}
                    >
                      {text}
                    </div>
                    <div className={`dropdown ${dropdown ? 'show' : ''}`}>
                      <ul>
                        <li key={id} className='li'>
                          {sublinks.map((sublink) => {
                            const { id, url, text } = sublink;
                            return <a href={url}>{text}</a>;
                          })}
                        </li>
                      </ul>
                    </div>
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

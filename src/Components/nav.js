import React from 'react';
import { useState } from 'react';
import Logo from '../assets/logo.svg';
import { links } from '../data';

const NavMenu = () => {
  return (
    <header>
      <div className='logo'>
        <img src={Logo} alt='snap' />
      </div>

      <div className='dropdown-Menu'>
        {links.map((link) => {
          const { id, url, text, sublinks } = link;
          return (
            <>
              {sublinks ? (
                <div className='dropdown'>
                  <button
                    className='btn btn-secondary dropdown-toggle'
                    type='button'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'
                  >
                    {text}
                  </button>
                  <ul className='dropdown-menu'>
                    {sublinks && (
                      <li>
                        {sublinks.map((sublink) => {
                          const { id, url, text } = sublink;
                          return <a href={url}>{text}</a>;
                        })}
                      </li>
                    )}
                  </ul>
                </div>
              ) : (
                <ul>
                  <li>
                    <a href={url}>{text}</a>
                  </li>
                </ul>
              )}
            </>
          );
        })}
      </div>

      <p>Login Register</p>
    </header>
  );
};

export default NavMenu;

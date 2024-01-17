import React from 'react';
import { useState } from 'react';
import Logo from '../assets/logo.svg';
import { links } from '../data';

const NavMenu = () => {
  return (
    <header>
      <nav className='navbar navbar-expand-lg bg-white-body-tertiary'>
        <a className='navbar-brand' href='#'>
          <img src={Logo} alt='snap' />
        </a>
        <div className='container-fluid'>
          <button
            className='navbar-toggler ms-auto'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              {links.map((link) => {
                const { id, url, text, sublinks } = link;
                return (
                  <>
                    {/* we check if there are sublinks or not, if yes we display a dropdown, if not a li a */}
                    {sublinks ? (
                      <li className='nav-item dropdown'>
                        <a
                          className='nav-link dropdown-toggle'
                          href='#'
                          role='button'
                          data-bs-toggle='dropdown'
                          aria-expanded='false'
                        >
                          {text}
                        </a>
                        <ul className='dropdown-menu'>
                          {sublinks && (
                            <li>
                              {sublinks.map((sublink) => {
                                const { id, url, text } = sublink;
                                return (
                                  <a a className='dropdown-item' href={url}>
                                    {text}
                                  </a>
                                );
                              })}
                            </li>
                          )}
                        </ul>
                      </li>
                    ) : (
                      <li className='nav-item'>
                        <a
                          className='nav-link active'
                          aria-current='page'
                          href={url}
                        >
                          {text}
                        </a>
                      </li>
                    )}
                  </>
                );
              })}
            </ul>
            <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
              <li className='nav-item sign justify-content-end me-auto'>
                <a className='nav-link sign me-auto' href='#'>
                  Login
                </a>
              </li>
              <li className='nav-item sign justify-content-end me-auto'>
                <a className='nav-link sign me-auto' href='#'>
                  Register
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavMenu;

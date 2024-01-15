import React from 'react';
import { useState } from 'react';
import Logo from '../assets/logo.svg';
import { links } from '../data';

const NavMenu = () => {
  return (
    <header>
      <nav class='navbar navbar-expand-lg bg-body-tertiary'>
        <div class='container-fluid'>
          <a class='navbar-brand' href='#'>
            <img src={Logo} alt='snap' />
          </a>
          <button
            class='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span class='navbar-toggler-icon'></span>
          </button>
          <div class='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul class='navbar-nav me-auto mb-2 mb-lg-0'>
              {links.map((link) => {
                const { id, url, text, sublinks } = link;
                return (
                  <>
                    {sublinks ? (
                      <li class='nav-item dropdown'>
                        <a
                          class='nav-link dropdown-toggle'
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
                      <li class='nav-item'>
                        <a
                          class='nav-link active'
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
          </div>
        </div>
      </nav>

      {/* <div className='logo'>
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
                          return (
                            <a a className='dropdown-item' href={url}>
                              {text}
                            </a>
                          );
                        })}
                      </li>
                    )}
                  </ul>
                </div>
              ) : (
                <ul>
                  <li>
                    <a className='nav-item' href={url}>
                      {text}
                    </a>
                  </li>
                </ul>
              )}
            </>
          );
        })}
      </div>

      <p>Login Register</p> */}
    </header>
  );
};

export default NavMenu;

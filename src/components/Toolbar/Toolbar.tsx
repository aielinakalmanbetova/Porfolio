import React from 'react';
import {NavLink} from 'react-router-dom';

const Toolbar = () => {
  return (
    <nav className='navbar'>
      <div className='container'>
        <span className='navbar-brand d-flex'>
          <div className="logo-nav">
            <NavLink to="/" className="text-a">
            <img src="/public/logo.avif" alt="logo" width="80" height="100"
                 className="logo"/>
            BaByShOp
          </NavLink>
          </div>
          <div className="navbar-menu d-flex">
            <ul className="ul-nav">
              <li className="li-nav">
                <NavLink to="/" className="nav-link a-nav">Главная
                </NavLink>
              </li>
            </ul>
            <ul className='ul-nav'>
              <li className='li-nav'>
                <NavLink to="/homeTwo" className='nav-link a-nav'>
                  Добро пожаловать
                </NavLink>
              </li>
            </ul>
            <ul className='ul-nav'>
              <li className='li-nav'>
                <NavLink to="/swiperSlide" className='nav-link a-nav'>
                  Категории
                </NavLink>
              </li>
            </ul>
          </div>
        </span>
      </div>
    </nav>
  );
};

export default Toolbar;
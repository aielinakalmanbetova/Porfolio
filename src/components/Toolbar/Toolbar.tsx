import React from 'react';

const Toolbar = () => {
  return (
    <nav className='navbar'>
      <div className='container'>
        <span className='navbar-brand d-flex'>
          <div className="logo-nav">
            <a href="#" className="text-a">
            <img src="/public/logo.avif" alt="logo" width="80" height="100"
                 className="logo"/>
            BaByShOp
          </a>
          </div>
          <div className="navbar-menu d-flex">
            <ul className="ul-nav">
              <li className="li-nav">
                <a href="/" className="a-nav">Главная</a></li></ul>
            <ul className='ul-nav'>
              <li className='li-nav'>
                <a href="/" className='a-nav'>Добро пожаловать</a></li></ul>
            <ul className='ul-nav'>
              <li className='li-nav'>
                <a href="/" className='a-nav'>О нас</a></li></ul>
            <ul className='ul-nav'>
              <li className='li-nav'>
                <a href="/" className='a-nav'>Новости</a></li></ul>
          </div>
        </span>

      </div>
    </nav>

  );
};

export default Toolbar;
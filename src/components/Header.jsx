// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';
import {Link} from 'react-router-dom';
import '../assets/styles/components/Header.scss';
import logo from '../assets/statics/logo-platzi-video-BW2.png' ;
import user from '../assets/statics/user-icon.png';

function Header() {
  return (
    <header className='header'> 

      <Link to='/'>
        <img className='header__logo' src={logo} alt='logo' />
      </Link>

      <div className='header__menu'>
        <div className='menu--profile'>
          <img className='profile-img' src={user} alt='User' />
          <p className='profile-text'>Perfil</p>
        </div>

        <ul className='menu--list'>
          <li className='list__item'><a href='/'>Cuenta</a></li>
          <li className='list__item'><a href='/'>Ayuda</a></li>
          <li className='list__item'><Link to='/login'>Iniciar sesión</Link></li>
        </ul>
      </div>

    </header>

  );
}

export default Header;

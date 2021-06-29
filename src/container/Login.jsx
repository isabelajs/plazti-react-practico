import React from 'react';
import {Link} from 'react-router-dom';
import google from '../assets/statics/google-icon.png'
import twitter from '../assets/statics/twitter-icon.png'
import '../assets/styles/components/Login.scss'

export default function  () {
    return (
    <section className="login">
      <section className="login__container">
        <h2>Inicia sesión</h2>
        <form className="login__container--form">
          <input className="input" type="text" placeholder="Correo"/>
          <input className="input" autoComplete='false' type="password" placeholder="Contraseña"/>
          <button className="button">Iniciar sesión</button>
          <div className="login__container--remember-me">
            <label>
              <input type="checkbox" id="cbox1" value="first_checkbox"/>Recuérdame
            </label>
            <a href="/">Olvidé mi contraseña</a>
          </div>
        </form>
        <section className="login__container--social-media">
          <div><img src={google}/> Inicia sesión con Google</div>
          <div><img src={twitter}/> Inicia sesión con Twitter</div>
        </section>

        <p className="login__container--register">No tienes ninguna cuenta &nbsp;
          <Link to='/register'>
            Regístrate
          </Link>
        </p>
      </section>
    </section>
);
};
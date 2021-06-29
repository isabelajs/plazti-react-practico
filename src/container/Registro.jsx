import React from 'react';
import {Link} from 'react-router-dom';
import '../assets/styles/components/Registrer.scss'

export default function Registrer () {
    return (
      <section className="register">
        <section className="register__container">
          <h2>Regístrate</h2>
          <form className="register__container--form">
            <input className="input" type="text" placeholder="Nombre"/>
            <input className="input" type="text" placeholder="Correo"/>
            <input className="input" type="password" autoComplete='false' placeholder="Contraseña"/>
            <button className="button">Registrarme</button>
          </form>
            <Link to='/login'>
              Iniciar sesión
            </Link>
        </section>
      </section>
);
};
// src/components/Navbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar" aria-label="Main navigation">
      <div className="navbar__brand">
        <NavLink to="/" className="navbar__logo">
          Café&nbsp;Artesanal
        </NavLink>
      </div>

      <ul className="navbar__list">
        <li className="navbar__item">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'navbar__link navbar__link--active' : 'navbar__link'
            }
          >
            Inicio
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink
            to="/contacto"
            className={({ isActive }) =>
              isActive ? 'navbar__link navbar__link--active' : 'navbar__link'
            }
          >
            Contacto
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? 'navbar__link navbar__link--active' : 'navbar__link'
            }
          >
            Iniciar Sesión
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

// src/pages/Login.jsx
import React from 'react';
import "../styles/Login.css";

function Login() {
  return (
    <div className="login-page">
      <h1>Iniciar Sesión</h1>

      <form className="login-form">
        <label>
          Email
          <input type="email" name="email" placeholder="usuario@ejemplo.com" />
        </label>

        <label>
          Contraseña
          <input type="password" name="password" placeholder="••••••••" />
        </label>

        <button type="submit" className="btn-primary">
          Entrar
        </button>
      </form>
    </div>
  );
}

export default Login;

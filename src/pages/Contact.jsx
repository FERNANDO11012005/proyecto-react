// src/pages/Contact.jsx
import React from 'react';
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact-page">
      <h1>Contáctanos</h1>

      <form className="contact-form">
        <label>
          Nombre
          <input type="text" name="name" placeholder="Tu nombre" />
        </label>

        <label>
          Email
          <input type="email" name="email" placeholder="tu@ejemplo.com" />
        </label>

        <label>
          Mensaje
          <textarea name="message" placeholder="Escribe tu mensaje" />
        </label>

        <button type="submit" className="btn-primary">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Contact;

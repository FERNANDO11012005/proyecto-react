// src/components/Hero.jsx
import React from 'react';
import '../styles/Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__overlay" />
      <div className="hero__content">
        <h1>Café Artesanal</h1>
        <p>Descubre el mejor café en cada taza</p>
        <button className="btn btn--hero">Ver Menú</button>
      </div>
    </section>
  );
}

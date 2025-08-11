import React, { useState } from "react";
import "../styles/Home.css";

const cafes = [
  {
    id: 1,
    name: "Café Espresso",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80",
    description:
      "Un espresso fuerte y concentrado, con aroma intenso y cuerpo robusto, ideal para amantes del café puro.",
  },
  {
    id: 2,
    name: "Café Latte",
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80",
    description:
      "Suave mezcla de espresso con leche vaporizada, perfecta para quienes buscan un sabor cremoso y delicado.",
  },
  {
    id: 3,
    name: "Café Americano",
    image: "https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=800&q=80",
    description:
      "Café espresso diluido con agua caliente, ideal para quienes prefieren un café más ligero y refrescante.",
  },
];

export default function Home() {
  const [selectedCafe, setSelectedCafe] = useState(null);

  return (
    <div className="home-container">
      {/* Hero */}
      <section className="hero">
        <h1>Cafetería Dulce Aroma</h1>
        <p>Disfruta del mejor café artesanal en un ambiente acogedor y relajante.</p>
      </section>

      {/* Gallery */}
      <section className="gallery">
        <h2>Nuestros Cafés</h2>
        <div className="images-grid">
          {cafes.map((cafe) => (
            <img
              key={cafe.id}
              src={cafe.image}
              alt={cafe.name}
              onClick={() => setSelectedCafe(cafe)}
              title={`Ver más sobre ${cafe.name}`}
            />
          ))}
        </div>
      </section>

      {/* About */}
      <section className="about">
        <h2>Sobre Nosotros</h2>
        <p>
          En Cafetería Dulce Aroma nos apasiona ofrecer café 100% orgánico, cultivado con
          dedicación y cuidado. Nuestro compromiso es brindar una experiencia única en cada taza,
          acompañada de un ambiente cálido y atención personalizada.
        </p>
      </section>

      {/* Modal */}
      {selectedCafe && (
        <div className="modal-backdrop" onClick={() => setSelectedCafe(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>{selectedCafe.name}</h3>
            <img src={selectedCafe.image} alt={selectedCafe.name} />
            <p>{selectedCafe.description}</p>
            <button onClick={() => setSelectedCafe(null)}>Cerrar</button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="footer">
        © {new Date().getFullYear()} Cafetería Dulce Aroma
      </footer>
    </div>
  );
}

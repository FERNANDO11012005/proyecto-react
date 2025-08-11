
import "../styles/Home.css";

function Home() {
  return (
    <div className="home-page">
      <header className="home-hero">
        <div className="home-hero__overlay" />
        <div className="home-hero__content">
          <h1>Café Artesanal</h1>
          <p>Descubre el mejor café en cada taza</p>
          <button className="btn-primary btn-primary--hero">
            Ver Menú
          </button>
        </div>
      </header>

      <section className="home-features">
        <div className="feature-card">
          <h2>Variedades</h2>
          <p>Selección de origen único.</p>
        </div>
        <div className="feature-card">
          <h2>Ambiente</h2>
          <p>Espacio acogedor para tus momentos.</p>
        </div>
        <div className="feature-card">
          <h2>Tienda</h2>
          <p>Llévate tu café favorito a casa.</p>
        </div>
      </section>
    </div>
  );
}

export default Home;


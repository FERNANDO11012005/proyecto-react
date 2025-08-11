import { Outlet, Link } from "react-router-dom";

export default function PublicLayout() {
  return (
    <>
      <header style={{ padding: "1rem", background: "#eee" }}>
        <nav>
          <Link to="/">Home</Link> | <Link to="/contact">Contact</Link> | <Link to="/login">Login</Link>
        </nav>
      </header>
      <main style={{ padding: "1rem" }}>
        <Outlet />
      </main>
      <footer style={{ padding: "1rem", background: "#eee", textAlign: "center" }}>
        &copy; 2025 Cafetería Dulce Aroma
      </footer>
    </>
  );
}

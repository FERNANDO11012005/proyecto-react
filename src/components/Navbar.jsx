import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css";


export default function Navbar() {
  return (
    <nav style={{ padding: "1rem", backgroundColor: "#eee" }}>
      <h1>Cafetería Dulce Aroma</h1>
      <ul style={{ display: "flex", gap: "1rem", listStyle: "none" }}>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/">Menú</Link></li>
        <li><Link to="/">Contacto</Link></li>
      </ul>
    </nav>
  );
}

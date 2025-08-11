import React from "react"; // Asegúrate de importar React si usas JSX sin
export default function Footer() {
  return (
    <footer style={{ padding: "1rem", backgroundColor: "#eee", marginTop: "auto", textAlign: "center" }}>
      © {new Date().getFullYear()} Cafetería Dulce Aroma
    </footer>
  );
}

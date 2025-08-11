import { Link } from "react-router-dom";

export default function AdminSidebar() {
  return (
    <aside style={{ width: "200px", padding: "1rem", backgroundColor: "#f4f4f4" }}>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li><Link to="/admin">Dashboard</Link></li>
        <li><Link to="/admin/users">Usuarios</Link></li>
        <li><Link to="/admin/settings">Configuración</Link></li>
      </ul>
    </aside>
  );
}

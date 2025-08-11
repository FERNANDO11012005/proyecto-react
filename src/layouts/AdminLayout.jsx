import { Outlet, Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function AdminLayout() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <aside style={{ width: "200px", background: "#ddd", padding: "1rem" }}>
        <h3>Admin Menu</h3>
        <nav>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li><Link to="/admin">Dashboard</Link></li>
            <li><button onClick={handleLogout}>Logout</button></li>
          </ul>
        </nav>
      </aside>
      <main style={{ flexGrow: 1, padding: "1rem" }}>
        <Outlet />
      </main>
    </div>
  );
}

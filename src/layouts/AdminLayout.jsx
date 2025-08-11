import { Outlet } from "react-router-dom";
import AdminSidebar from "../components/AdminSidebar";
import "../styles/AdminLayout.css";

export default function AdminLayout() {
  return (
    <div style={{ display: "flex" }}>
      <AdminSidebar />
      <main style={{ flexGrow: 1, padding: "1rem" }}>
        <Outlet />
      </main>
    </div>
  );
}

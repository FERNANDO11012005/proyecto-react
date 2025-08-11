// src/App.jsx
import { Routes, Route } from "react-router-dom";

// Layouts
import PublicLayout from "./layouts/PublicLayout";
import AdminLayout from "./layouts/AdminLayout";

// Páginas públicas
import Home from "./pages/Home";
import Login from "./pages/Login";

// Páginas admin
import Admin from "./pages/Admin";
import UsersList from "./pages/UsersList";
import UserForm from "./pages/UserForm";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";

export default function App() {
  return (
    <Routes>
      {/* Rutas públicas */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Route>

      {/* Rutas de administración */}
      <Route element={<AdminLayout />}>
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/users" element={<UsersList />} />
        <Route path="/admin/users/new" element={<UserForm />} />
        <Route path="/admin/profile" element={<Profile />} />
        <Route path="/admin/settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}

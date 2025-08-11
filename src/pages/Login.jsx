import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import "../styles/Login.css";  // Importa el CSS normal

const schema = yup.object({
  email: yup.string().email("Email inválido").required("Email es requerido"),
  password: yup.string().min(6, "Mínimo 6 caracteres").required("Contraseña requerida"),
}).required();

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (data.email === "admin@cafeteria.com" && data.password === "123456") {
          login("fake-jwt-token");
          toast.success("Login exitoso");
          navigate("/admin");
        } else {
          toast.error("Credenciales inválidas");
        }
        resolve();
      }, 1000);
    });
  };

  return (
    <div className="container">
      <Toaster position="top-center" />
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div>
          <input
            type="email"
            placeholder="Correo"
            {...register("email")}
            className={errors.email ? "errorInput" : ""}
            disabled={isSubmitting}
          />
          <p className="errorMsg">{errors.email?.message}</p>
        </div>

        <div>
          <input
            type="password"
            placeholder="Contraseña"
            {...register("password")}
            className={errors.password ? "errorInput" : ""}
            disabled={isSubmitting}
          />
          <p className="errorMsg">{errors.password?.message}</p>
        </div>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Validando..." : "Entrar"}
        </button>
      </form>
    </div>
  );
}

import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
  const usuario = sessionStorage.getItem("user");

  if (!usuario) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
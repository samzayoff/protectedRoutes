import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = () => {
  const isAuth = localStorage.getItem("auth"); // check login
  return isAuth ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoutes;

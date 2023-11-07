import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const AuthMiddleware = () => {
  const isLogin = true;

  return isLogin ? <Outlet /> : <Navigate to={"/authentication"} />;
};

export default AuthMiddleware;

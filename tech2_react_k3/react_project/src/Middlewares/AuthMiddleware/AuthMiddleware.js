import React from "react";
import { Outlet, Navigate } from "react-router-dom";
const isLogin = true;

const AuthMiddleware = () => {
  return isLogin ? <Outlet /> : <Navigate to="/login" />;
};

export default AuthMiddleware;

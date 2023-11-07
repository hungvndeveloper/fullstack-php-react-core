import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { Auth } from "../Services/Helpers/Auth";

export const GuestMiddleware = () => {
  const isLogin = new Auth().isLogin(); //không phải là khách
  return isLogin ? <Navigate to="/" /> : <Outlet />;
};

import Route from "../Core/Route";
export const AuthMiddleware = (Component) => {
  const isLogin = true;
  return isLogin ? Component : new Route().navigate("/login");
};

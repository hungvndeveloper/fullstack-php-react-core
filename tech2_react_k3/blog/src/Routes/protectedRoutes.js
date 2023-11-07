import { Route } from "react-router-dom";
import Login from "../Pages/Auth/Login";
import { GuestMiddleware } from "../Middlewares/GuestMiddleware";
import PostNew from "../Pages/PostNew/PostNew";
import { AuthMiddleware } from "../Middlewares/AuthMiddleware";

export const protectedRoutes = (
  <>
    <Route path="/dang-nhap" element={<GuestMiddleware />}>
      <Route path="" element={<Login />} />
    </Route>

    <Route path="/dang-bai" element={<AuthMiddleware />}>
      <Route path="" element={<PostNew />} />
    </Route>
  </>
);

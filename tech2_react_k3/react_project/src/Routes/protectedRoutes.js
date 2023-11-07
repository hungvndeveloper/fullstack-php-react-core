import { Route } from "react-router-dom";
import AuthMiddleware from "../Middlewares/AuthMiddleware/AuthMiddleware";
import Profile from "../Pages/Account/Profile/Profile";
import MyCourses from "../Pages/Account/MyCourses/MyCourses";
export const protectedRoutes = (
  <>
    <Route path="/tai-khoan" element={<AuthMiddleware />}>
      <Route path="thong-tin-ca-nhan" element={<Profile />} />
      <Route path="khoa-hoc-cua-toi" element={<MyCourses />} />
    </Route>
  </>
);

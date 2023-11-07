import Profile from "../Pages/Profile/Profile";
import { AuthMiddleware } from "../Middlewares/AuthMiddleware";

export const protectedRoute = {
  "/ca-nhan": AuthMiddleware(Profile),
};

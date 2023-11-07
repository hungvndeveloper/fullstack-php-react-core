import { Route } from "react-router-dom";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home";
export const publicRoutes = (
  <>
    <Route path="/" element={<Home />} />
    <Route path="/blog" element={<Blog />} />
  </>
);

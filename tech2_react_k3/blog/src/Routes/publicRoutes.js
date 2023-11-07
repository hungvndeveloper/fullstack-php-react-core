//Chứa các config public routes
import { Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Posts from "../Pages/Posts/Posts";
import PostDetail from "../Pages/Posts/PostDetail";
import Search from "../Pages/Posts/Search";

export const publicRoutes = (
  <>
    <Route path="/" element={<Home />} />
    <Route path="/gioi-thieu" element={<About />} />
    <Route path="/chuyen-muc">
      <Route path=":id" element={<Posts />} />
      <Route path="chi-tiet/:id" element={<PostDetail />} />
    </Route>
    <Route path="/tim-kiem" element={<Search />} />
  </>
);

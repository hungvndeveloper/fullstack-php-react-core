import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./Components/Sidebar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Products from "./Pages/Products";
import Contact from "./Pages/Contact";
import Error from "./Pages/Error";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import User from "./Pages/Auth/User";
import Profile from "./Pages/Profile/Profile";
import Account from "./Pages/Profile/Account";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import ProductDetail from "./Pages/ProductDetail";

const ProtectedRoutes = () => {
  const isLogin = false;

  return isLogin ? <Outlet /> : <Navigate to="/auth/login" />;
};

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-3">
          <Sidebar />
        </div>
        <div className="col-9">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gioi-thieu" element={<About />} />
            <Route path="/san-pham" element={<Products />} />
            <Route path="/san-pham/:id" element={<ProductDetail />} />
            <Route path="/lien-he" element={<Contact />} />
            <Route path="*" element={<Error />} />
            <Route path="/auth">
              <Route path="" element={<User />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
            </Route>
            <Route path="/profile" element={<ProtectedRoutes />}>
              <Route path="" element={<Profile />} />
              <Route path="account" element={<Account />} />
            </Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;

//Nested Routes

/*
auth/login
auth/register 
auth/forgot-password
auth/reset-password

=> Chung tiền tố => gom nhóm route
=> Nhóm không giới hạn cấp

//Protected Routes

/profile => Thông tin cá nhân
/profile/account => Chỉnh sửa thông tin cá nhân
/profile/orders => Danh sách đơn hàng

=> Bắt buộc phải đăng nhập để xem route /profile

Dynamic Routes
Search Param Routes

Lazy Routes
*/

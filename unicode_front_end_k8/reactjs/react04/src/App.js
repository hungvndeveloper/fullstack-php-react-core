import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Products from "./Pages/Products";
import News from "./Pages/News";
import Contact from "./Pages/Contact";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import Logout from "./Pages/Auth/Logout";
import Profile from "./Pages/Profile/Profile";
import Account from "./Pages/Profile/Account";
import Order from "./Pages/Profile/Order";
import AuthMiddleware from "./Middleware/AuthMiddleware";
import Error404 from "./Errors/Error404";
import Success from "./Pages/Success";
import ProductDetail from "./Pages/ProductDetail";

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
            <Route path="/about" element={<About />} />
            <Route path="/products">
              <Route path="" element={<Products />} />
              <Route path="detail/:path.html" element={<ProductDetail />} />
            </Route>
            <Route path="/news" element={<News />} />
            <Route path="/contact">
              <Route path="" element={<Contact />} />
              <Route path="success" element={<Success />} />
            </Route>
            <Route path="/authentication">
              <Route path="" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="logout" element={<Logout />} />
            </Route>

            <Route path="/profile" element={<AuthMiddleware />}>
              <Route path="" element={<Profile />} />
              <Route path="account" element={<Account />} />
              <Route path="order" element={<Order />} />
            </Route>

            <Route path="*" element={<Error404 />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;

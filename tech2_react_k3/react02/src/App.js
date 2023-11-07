import logo from "./logo.svg";
import "./App.css";
import Users from "./Users/Users";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Counter from "./Counter/Counter";
import { Routes, Route } from "react-router-dom";
import { Couter2 } from "./Counter/Counter2";

function App() {
  return (
    <Routes>
      {/* <Header title="Tech2" />
      <Users />
      <Footer /> */}
      {/* <Counter /> */}
      <Route path="/" element={<Users />} />
      <Route path="/san-pham/:id" element={<Couter2 />} />
    </Routes>
  );
}

export default App;

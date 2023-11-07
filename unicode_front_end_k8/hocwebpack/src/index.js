//import moment from "moment/moment";
import { Product } from "./components/Product";
//import "bootstrap/dist/css/bootstrap.min.css";

const component = () => {
  const h1 = document.createElement("h1");
  h1.innerText = "Xin chào Unicode - Javascript 123";
  h1.classList.add("title");
  h1.style.color = "red";
  h1.style.fontStyle = "italic";
  return h1;
};

const button = () => {
  const btn = document.createElement("button");
  btn.innerText = "Đăng ký tài khoản Unicode";
  btn.classList.add("btn", "btn-primary");
  return btn;
};

document.body.appendChild(component());
document.body.appendChild(button());

Product();

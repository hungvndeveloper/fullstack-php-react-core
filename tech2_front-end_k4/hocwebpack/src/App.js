import config from "./config.json";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/style.css";
// import video from "./assets/videos/video.mp4";
import orderEmail from "./templates/email_order.html";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import ProductDetail from "./pages/ProductDetail";
import Navigo from "navigo";
import Error404 from "./errors/Error404";

const { SERVER_API, PAGE_LIMIT } = config;

function App() {
  //console.log(SERVER_API, PAGE_LIMIT);

  const name = "Hoàng An";
  const order = "Nồi cơm điện";

  // const content = orderEmail
  //   .replaceAll("{{name}}", name)
  //   .replaceAll("{{order}}", order);

  const router = new Navigo("/");

  let content = "";

  router.on("/", function () {
    // console.log(`Giới thiệu`);
    content = Home();
  });

  router.on("/gioi-thieu", function () {
    // console.log(`Giới thiệu`);
    content = About();
  });

  router.on("/san-pham", function () {
    content = Product();
  });

  router.on("*", function () {
    content = Error404();
  });

  router.resolve();

  console.log(process); //Thông tin môi trường
  return `
    ${Header()}
      <main>
        <div class="container">
          ${content}
        </div>
      </main>
    ${Footer()}
  `;
}

export default App;

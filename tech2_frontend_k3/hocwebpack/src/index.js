import moment from "moment";
import "bootstrap/dist/css/bootstrap.min.css";
//import "./assets/styles/style.css";
import "./assets/styles/style.scss";

import config from "./config.json";

import { header } from "./components/header";

import { sendEmail } from "./components/email";

import image from "./images/image01.jpg";

import video from "./video/video.mp4";

import headerHtml from "./templates/header.html";

import footerHtml from "./templates/footer.tpl";

const { SERVER_API } = config;

function component() {
  const element = document.createElement("div");
  element.innerHTML = `Hello World! Unicode <button class='btn btn-primary'>Xem ngay</button>
   <div class="content"><h1>Học Front-End nền tảng</h1></div>
   <video width=300 src="${video}" controls></video>
   <h2>Tạ Hoàng An</h2>
    `;
  return element;
}
document.body.appendChild(component());

sendEmail("hoangan.web@gmail.com", "Hoàng An", "1234");

// console.log(moment);
// console.log(header);

//fetch(`${SERVER_API}/users`)
console.log(image);
console.log(video);
console.log(headerHtml);
console.log(footerHtml);

console.log(process.env);

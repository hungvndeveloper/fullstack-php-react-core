import configData from "../config/config.json";
import "../css/style.css";
import "../scss/style.scss";
import product from "./Product.html";

console.log(configData);

const { API_URL, APP_NAME } = configData;

console.log(API_URL, APP_NAME);

console.log(product);
export const Product = () => {
  console.log("Product");
};

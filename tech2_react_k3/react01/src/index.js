import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.querySelector(".web-root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// const elements = React.createElement(
//   "div",
//   {
//     id: "content",
//     className: "content",
//   },
//   React.createElement("h1", {}, "Tech2 Solutions"),
//   React.createElement(
//     "h2",
//     {},
//     React.createElement("a", { href: "#" }, "Tech2 Solutions")
//   )
// );

// root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

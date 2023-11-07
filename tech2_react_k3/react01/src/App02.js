import React from "react";
// import Customers from "./Components/Customers/Customers";
// import Member from "./Components/Props/Member";
import Home from "./Pages/Home/Home";

export default function App() {
  const members = {
    info: {
      name: "Hoàng An",
      email: "hoangan.web@gmail.com",
    },
    avatar: {
      src: "https://picsum.photos/800",
      width: "200",
      height: "150",
      alt: "Ảnh của tôi",
      title: "Tech2",
      style: {
        borderRadius: "25px",
        boxShadow: "3px 3px 3px 5px #ccc",
      },
    },
    posts: [
      {
        id: 1,
        title: "Bài 1",
      },

      {
        id: 2,
        title: "Bài 2",
      },

      {
        id: 3,
        title: "Bài 3",
      },
    ],
  };
  return <Home />;
}

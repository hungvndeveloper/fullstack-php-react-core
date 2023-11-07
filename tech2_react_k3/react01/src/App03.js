import React, { useState } from "react";
import Customers from "./Components/Props/Customers";
import ParentCom from "./Components/Props/ParentCom";
import About from "./Components/State/About";
import ConvertCurrency from "./Components/State/ConvertCurrency/ConvertCurrency";
import Counter from "./Components/State/Counter";
import Login from "./Components/State/Login";
import Todos from "./Components/State/Todos";
import Tech2, { Company, Address } from "./Components/Tech2/Tech2";

export default function App() {
  return (
    <div>
      {/* <Tech2.Company />
      <Tech2.Address /> */}
      {/* <Company />
      <Address /> */}
      {/* <Customers>
        <h1>Tạ Hoàng An</h1>
        <h2>Hà Nội</h2>
      </Customers> */}
      {/* <Counter /> */}
      {/* <Login /> */}
      {/* <ConvertCurrency /> */}

      <Todos />
    </div>
  );
}

// export default class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       isPage: "todos",
//     };
//   }

//   goAbout = () => {
//     this.setState({
//       isPage: "about",
//     });
//   };
//   render() {
//     const { isPage } = this.state;
//     return (
//       <>
//         <button onClick={this.goAbout}>About</button>
//         {isPage === "about" ? <About /> : <Todos />}
//       </>
//     );
//   }
// }

import React from "react";
import Footer from "./Components/Footer";
import Header, { a } from "./Components/Header";
import Table from "./Components/Table/Table";

function App() {
  const id = "content";

  const attribute = {
    disabled: true,
  };

  const handleClick = (text) => {
    alert("Tech2: " + text);
  };

  const GetCompany = () => (
    <b>
      <i>Techschool</i>
    </b>
  );

  const companyName = <i>Tech2 Solutions</i>;

  // console.log(getCompany());

  // return (
  //   <div>
  //     <div id={id} className="content">
  //       <Header />
  //       <h1
  //         style={{
  //           color: "red",
  //           fontWeight: "bold",
  //           fontStyle: "italic",
  //           textTranform: "uppercase",
  //         }}
  //       >
  //         {companyName}: {a}
  //       </h1>
  //       <h2 className="title">
  //         <a href="#">
  //           <GetCompany />
  //         </a>
  //       </h2>
  //       <label htmlFor="fullname">Tên</label>
  //       <input type="checkbox" id="fullname" />
  //       <hr />
  //       <select value="dn" onChange={() => {}}>
  //         <option value="hn">Hà Nội</option>
  //         <option value="dn">Đà Nẵng</option>
  //         <option value="hcm">Hồ Chí Minh</option>
  //       </select>
  //       <input type="text" defaultValue="Hoàng An" {...attribute} />
  //       <textarea defaultValue="Tin nhắn..." cols="20" rows="10" />

  //       <button
  //         onClick={(e) => {
  //           handleClick(e.target.innerText);
  //         }}
  //       >
  //         Click
  //       </button>

  //       <Footer />
  //     </div>
  //     <div className="main">
  //       <h1>Học React JS</h1>
  //     </div>
  //   </div>
  // );

  //return <Table />;

  const product = {
    id: 1,
    name: "Iphone 14",
    price: 25000000,
    isStock: false,
  };

  // let jsx = null;

  // if (product.isStock) {
  //   jsx = (
  // <>
  //   <p>Tên: {product.name}</p>
  //   <p>Giá: {product.price.toLocaleString()}</p>
  //   <p>Trạng thái: Còn hàng</p>
  // </>
  //   );
  // }

  // const getProduct = () => {
  //   if (product.isStock) {
  //     return (
  //       <>
  //         <p>Tên: {product.name}</p>
  //         <p>Giá: {product.price.toLocaleString()}</p>
  //         <p>Trạng thái: Còn hàng</p>
  //       </>
  //     );
  //   }
  // };

  // const lists = [];

  // lists.push(<p key={1}>Tech2</p>, <p key={2}>Tech2</p>);

  const users = [
    {
      id: 1,
      name: "Nguyễn Văn A",
      status: false,
    },

    {
      id: 2,
      name: "Nguyễn Văn B",
      status: true,
    },

    {
      id: 3,
      name: "Nguyễn Văn C",
      status: false,
    },
  ];

  // const userList = users.map(({ id, name, status }) => (
  //   <React.Fragment key={id}>
  //     <h3>{name}</h3>
  //     <p>Trạng thái: {status ? "Active" : "Inactive"}</p>
  //   </React.Fragment>
  // ));

  // const userList = users.reduce((result, { id, name, status }) => {
  //   const userItem = (
  //     <React.Fragment key={id}>
  //       <h3>{name}</h3>
  //       <p>Trạng thái: {status ? "Active" : "Inactive"}</p>
  //     </React.Fragment>
  //   );

  //   const data = [...result];
  //   data.push(userItem);

  //   //return result.concat(userItem);
  //   return data;
  // }, []);

  return (
    <div>
      {product.isStock && (
        <>
          <p>Tên: {product.name}</p>
          <p>Giá: {product.price.toLocaleString()}</p>
          <p>Trạng thái: Còn hàng</p>
        </>
      )}
      <hr />
      <h2>Danh sách người dùng</h2>
      {/* {userList} */}
      {users?.length ? (
        users.map(({ id, name, status }) => (
          <React.Fragment key={id}>
            <h3>{name}</h3>
            <p>Trạng thái: {status ? "Active" : "Inactive"}</p>
          </React.Fragment>
        ))
      ) : (
        <p>Không có người dùng</p>
      )}
    </div>
  );
}

export default App;

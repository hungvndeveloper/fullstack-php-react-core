import React, { useContext, useEffect } from "react";
import Customers from "./Customers/Customers";
import useClient from "./Hooks/useClient";
import useColor from "./Hooks/useColor";
import Products from "./memo/Products";
import Music from "./Music/Music";
import { StateContext } from "./StateProvider/StateProvider";
import Students from "./Students/Students";

function App() {
  const color = useColor();

  const client = useClient("https://reqres.in/api");

  const getUsers = async () => {
    const [users, response] = await client.get("/users");
    console.log(users, response);
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div style={{ background: color }}>
      <Students />
    </div>
  );
}

export default App;

/*
Viết hook useClient để call api với các phương thức
get, post, put, delete
*/

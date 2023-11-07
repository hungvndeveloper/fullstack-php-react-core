import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Customers.scss";
import Data from "./Data.json";
import CustomerItem from "./CustomerItem";
import Alert from "./Alert";

export default function Customers() {
  const { customers } = Data;

  const customerJsx = customers?.length ? (
    customers.map?.((customer, index) => (
      <CustomerItem {...customer} index={index} key={customer.id} />
    ))
  ) : (
    <Alert content={"Không có khách hàng"} cols={4} type={"danger"} />
  );

  //   const data = {
  //     name: "Hoàng An",
  //     age: 30,
  //     address: "Hà Nội",
  //     "address-shipping": "Hà Nội",
  //   };

  return (
    <div className="container">
      <h2>Danh sách khách hàng</h2>
      <table className="table table-bordered customers">
        <thead>
          <tr>
            <th width="5%">STT</th>
            <th>Tên</th>
            <th>Email</th>
            <th>Trạng thái</th>
          </tr>
        </thead>
        <tbody>{customerJsx}</tbody>
      </table>
    </div>
  );
}

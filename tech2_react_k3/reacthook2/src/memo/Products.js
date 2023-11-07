import React, { useState, useMemo, useCallback } from "react";
import Input from "./Input";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    name: "",
    price: "",
  });

  const handleChangeValue = useCallback((e) => {
    //setForm({ ...form, [e.target.name]: e.target.value });
    setForm((prevForm) => ({ ...prevForm, [e.target.name]: e.target.value }));
  }, []);

  //   const handleSubmit = (e) => {

  //   };

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      console.log(form);

      const data = [...products];
      data.push(form);
      //console.log(data);

      setProducts(data);

      //setProducts([...products, form]);
      setForm({
        name: "",
        price: "",
      });
    },
    [form]
  );

  const total = useMemo(() => {
    return products.reduce((total, product) => {
      console.log("total");
      return parseFloat(total) + parseFloat(product.price);
    }, 0);
  }, [products]);

  //   useLayoutEffect(() => {
  //     total = products.reduce((total, product) => {
  //       console.log("total");
  //       return parseFloat(total) + parseFloat(product.price);
  //     }, 0);
  //     console.log(total);
  //   }, [products]);

  /*
  - state products thay đổi
  - re-render
  - hàm trong useEffect chạy
  - biến total được cập nhật   
  */

  return (
    <div style={{ margin: "3%" }}>
      <h1>Products</h1>
      <div>
        {products.map((product, index) => {
          return (
            <div key={index}>
              <p>{product.name}</p>
              <p>{product.price}</p>
            </div>
          );
        })}
        <h3>Total: {total}</h3>
      </div>
      <div>
        <form action="" onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            label="Tên"
            value={form.name}
            onChangeValue={handleChangeValue}
          />
          <Input
            type="number"
            name="price"
            label="Giá"
            value={form.price}
            onChangeValue={handleChangeValue}
          />
          <button type="submit">Add Product</button>
        </form>
      </div>
    </div>
  );
};

export default Products;

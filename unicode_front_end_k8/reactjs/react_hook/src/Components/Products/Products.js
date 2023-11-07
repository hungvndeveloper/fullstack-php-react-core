import React, { useState, useMemo } from "react";

const Products = () => {
  const [price, setPrice] = useState(0);

  const [products, setProducts] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setProducts(products.concat(price));
    setPrice(0);
  };

  const handleChange = (e) => {
    setPrice(e.target.value);
  };

  const total = useMemo(() => {
    return products.reduce((total, price) => {
      console.log("total...");
      return total + parseInt(price);
    }, 0);
  }, [products]);

  /*
  Áp dụng cho các biểu thức logic, tính toán,...
  Bắt buộc phải return về giá trị nào đó
  Giá trị của hàm useMemo chính là giá trị được return trong callback
  deps => Giống useEffect()
  */

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Price..."
          onChange={handleChange}
          value={price}
          required
        />
        <button type="button">Add</button>
      </form>
      <hr />
      <h2>Total: {total}</h2>
      {products.map((product, index) => (
        <h3 key={index}>{product}</h3>
      ))}
    </div>
  );
};

export default Products;

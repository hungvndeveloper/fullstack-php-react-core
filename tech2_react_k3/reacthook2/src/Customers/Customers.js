import React, { useTransition } from "react";

const customers = Array.from({ length: 10000 }, () =>
  Math.floor(Math.random() * 10000)
);

const Customers = () => {
  const [keyword, setKeyword] = React.useState("");

  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    startTransition(() => {
      setKeyword(e.target.value);
    });
  };

  return (
    <div>
      <input
        onChange={handleChange}
        type="search"
        name="keyword"
        placeholder="Từ khóa..."
      />
      <hr />
      <h2>Bạn đang tìm: {keyword}</h2>

      {customers.map((customer, index) => (
        <div key={index}>
          <p>{customer}</p>
        </div>
      ))}
    </div>
  );
};

export default Customers;

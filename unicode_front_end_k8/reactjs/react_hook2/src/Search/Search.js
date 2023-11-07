import React, { useState, useTransition } from "react";

const Search = () => {
  const [keyword, setKeyword] = useState("");

  const [isPending, startTransition] = useTransition();

  const handleSearch = (e) => {
    startTransition(() => {
      setKeyword(e.target.value);
    });
  };

  let jsx = [];
  for (let i = 1; i <= 30000; i++) {
    jsx.push(<p key={i}>Phần tử thứ: {i}</p>);
  }

  return (
    <div>
      <input type="text" placeholder="Search..." onChange={handleSearch} />
      <h3>{keyword}</h3>
      {isPending ? <p>Loading...</p> : jsx}
    </div>
  );
};

export default Search;

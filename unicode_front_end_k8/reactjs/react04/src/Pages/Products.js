import React from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import { useState } from "react";

const Products = () => {
  const [search, setSearch] = useSearchParams();
  const [status, setStatus] = useState("");
  const [query, setQuery] = useState("");
  const location = useLocation();
  console.log(location);

  // const status = search.get("status");
  // const query = search.get("query");
  // console.log(status, query);

  const handleSubmit = (e) => {
    e.preventDefault();
    const filters = {};
    if (status.length && status !== "all") {
      filters.status = status;
    }

    if (query.length) {
      filters.query = query;
    }

    setSearch(filters);
  };

  const handleChange = (e) => {
    if (e.target.name === "status") {
      setStatus(e.target.value);
    } else {
      setQuery(e.target.value);
    }
  };

  return (
    <div>
      <h2>Products</h2>
      <form action="" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-3">
            <select
              name="status"
              className="form-select"
              id=""
              onChange={handleChange}
              defaultValue={search.get("status") ?? ""}
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="inactive">InActive</option>
            </select>
          </div>
          <div className="col-7">
            <input
              type="search"
              className="form-control"
              placeholder="Search..."
              name="query"
              onChange={handleChange}
              defaultValue={search.get("query") ?? ""}
            />
          </div>
          <div className="col-2 d-grid">
            <button type="submit" className="btn btn-primary">
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Products;

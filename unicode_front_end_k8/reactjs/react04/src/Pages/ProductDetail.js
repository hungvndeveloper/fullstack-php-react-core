import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { path } = useParams();

  const pattern = /.+?-(\d+)/;
  const pathArr = path.match(pattern);
  const productId = pathArr[1];

  return (
    <div>
      <h2>Product Detail: {productId}</h2>
    </div>
  );
};

export default ProductDetail;

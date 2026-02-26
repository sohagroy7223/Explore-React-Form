import React from "react";

const ProductTableData = ({ product }) => {
  const { name, price, quantity } = product;

  return (
    <tr>
      <td>{name}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>edit</td>
    </tr>
  );
};

export default ProductTableData;

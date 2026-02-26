import React from "react";
import ProductTableData from "./ProductTableData";

const ProductTable = ({ products }) => {
  console.log(products);
  return (
    <div>
      <h3>products: {products.length}</h3>

      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>price</th>
            <th>quantity</th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <ProductTableData key={index} product={product}></ProductTableData>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;

import React, { useState } from "react";
import ProductFrom from "./ProductFrom";
import ProductTable from "./ProductTable";

const ProductManagement = () => {
  const [products, setProducts] = useState([]);

  const handelAddProduct = (newProduct) => {
    // console.log(" hello", newProduct);
    const newProducts = [...products, newProduct];
    setProducts(newProducts);
  };

  return (
    <div>
      <ProductFrom handelAddProduct={handelAddProduct}></ProductFrom>
      <ProductTable products={products}></ProductTable>
    </div>
  );
};

export default ProductManagement;

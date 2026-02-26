import React, { useState } from "react";

const ProductFrom = ({ handelAddProduct }) => {
  const [error, setError] = useState("");
  const handelSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;
    // console.log(name, price, quantity);
    // validation
    if (name.length === 0) {
      setError("name must be required");
      return;
    } else if (price <= 0) {
      setError("price can't be negative");
      return;
    } else if (quantity < 0) {
      setError("not allow negative number");
      return;
    } else {
      setError("");
    }

    const nweProduct = {
      name,
      price,
      quantity,
    };
    // console.log(nweProduct);
    handelAddProduct(nweProduct);
  };

  return (
    <div>
      <form onSubmit={handelSubmit}>
        <input type="text" name="name" placeholder="product name" />
        <br />
        <input type="text" name="price" placeholder="price" />
        <br />
        <input type="text" name="quantity" placeholder="quantity" />
        <br />
        <input type="submit" value="submit" />
      </form>
      <p style={{ color: "red" }}>
        <small>{error}</small>
      </p>
    </div>
  );
};

export default ProductFrom;

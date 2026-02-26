import React from "react";

const ProductFrom = ({ handelAddProduct }) => {
  const handelSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;
    console.log(name, price, quantity);

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
    </div>
  );
};

export default ProductFrom;

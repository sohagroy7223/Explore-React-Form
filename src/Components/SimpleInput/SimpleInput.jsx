import React from "react";

const SimpleInput = () => {
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log("hay sohag");
  };

  return (
    <div>
      <form onSubmit={handelSubmit}>
        <input type="text" placeholder="enter your name" />
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default SimpleInput;

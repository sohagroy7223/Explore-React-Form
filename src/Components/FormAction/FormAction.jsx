import React from "react";

const FormAction = () => {
  const handelAction = (fromData) => {
    console.log(fromData.get("name"));
    console.log(fromData.get("email"));
  };

  return (
    <div>
      <form action={handelAction}>
        <input type="text" name="name" placeholder="your name" />
        <br />
        <input type="email" name="email" placeholder="your email" />
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default FormAction;

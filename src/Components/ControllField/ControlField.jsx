import React from "react";

const ControlField = () => {
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  const handelChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handelSubmit}>
        <input type="email" name="email" placeholder="your email" />
        <br />
        <input
          type="password"
          onChange={handelChange}
          name="password"
          placeholder="your password"
        />
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default ControlField;

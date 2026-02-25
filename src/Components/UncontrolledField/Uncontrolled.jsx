import React, { useRef } from "react";

const Uncontrolled = () => {
  const emailRef = useRef("");

  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <div>
      <form onSubmit={handelSubmit}>
        <input
          type="email"
          ref={emailRef}
          name="email"
          placeholder="your email"
        />
        <br />
        <input type="password" name="password" />
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default Uncontrolled;

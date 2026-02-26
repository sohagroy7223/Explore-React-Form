import React, { useRef } from "react";

const Uncontrolled = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const handelSubmit = (e) => {
    e.preventDefault();
    // console.log(emailRef.current.value);
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(email, password);
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
        <input
          type="password"
          ref={passwordRef}
          placeholder="password"
          name="password"
        />
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default Uncontrolled;

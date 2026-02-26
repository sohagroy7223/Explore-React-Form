import React, { useState } from "react";

const ControlField = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handelSubmit = (e) => {
    e.preventDefault();
    // console.log("submitted");
    if (password.length < 6) {
      setError("password needed 6 carecter ");
    } else {
      setError("");
    }
  };

  const handelChange = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);

    if (password.length < 6) {
      setError("password must be 8 #?@A1 required carecter");
    } else {
      setError("");
    }
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
      <p style={{ color: "red" }}>
        <small>{error}</small>
      </p>
    </div>
  );
};

export default ControlField;

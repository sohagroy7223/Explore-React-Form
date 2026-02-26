import React from "react";
import useInputFile from "../../Hooks/UseInputFile";

const HookInput = () => {
  const [name, changeName] = useInputFile("");
  const [email, changeEmail] = useInputFile("");
  const [password, changePassword] = useInputFile("");
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(name, email, password);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={changeName} placeholder="your name" />
        <br />
        <input
          type="email"
          onChange={changeEmail}
          name="email"
          placeholder="email"
        />
        <br />
        <input
          type="password"
          onChange={changePassword}
          name="password"
          placeholder="password"
        />
        <br />

        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default HookInput;

import React from "react";
import useInputFile from "../../Hooks/UseInputFile";

const HookInput = () => {
  const [name, changeName] = useInputFile("");
  const handelSubmit = (e) => {
    e.preventDefault();

    console.log("hay", name);
  };
  return (
    <div>
      <form onSubmit={handelSubmit}>
        <input type="text" onChange={changeName} placeholder="your name" />
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default HookInput;

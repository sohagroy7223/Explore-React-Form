import React from "react";
import Spacial from "./Spacial";

const AuntSons = ({ name }) => {
  return (
    <div>
      <h3>{name}</h3>
      {name === "Bikash" && <Spacial></Spacial>}
    </div>
  );
};

export default AuntSons;

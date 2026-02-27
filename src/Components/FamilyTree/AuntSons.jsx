import React, { use } from "react";
import Spacial from "./Spacial";
import { MoneyContext } from "./FamilyTree";

const AuntSons = ({ name }) => {
  const money = use(MoneyContext);
  return (
    <div>
      <h3>{name}</h3>
      {name === "Bikash" && <Spacial></Spacial>}
      {name === "Onona" && <button>total money: {money}</button>}
    </div>
  );
};

export default AuntSons;

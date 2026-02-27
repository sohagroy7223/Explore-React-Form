import React, { use } from "react";
import { MoneyContext } from "./FamilyTree";

const UncleSons = ({ name }) => {
  const [money, setMoney] = use(MoneyContext);

  const handelAdd = () => {
    setMoney(money + 2000);
  };
  return (
    <div>
      <h3>{name}</h3>
      {name === "Akash" && <button onClick={handelAdd}>add 2000 </button>}
    </div>
  );
};

export default UncleSons;

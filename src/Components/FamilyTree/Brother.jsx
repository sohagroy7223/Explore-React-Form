import React, { use } from "react";
import { MoneyContext } from "./FamilyTree";

const Brother = () => {
  // console.log(money);
  const [money, setMoney] = use(MoneyContext);

  const handelAddMoney = () => {
    setMoney(money + 1000);
  };
  return (
    <div>
      <h3>Brother</h3>
      <button onClick={handelAddMoney}>add 1000</button>
    </div>
  );
};

export default Brother;

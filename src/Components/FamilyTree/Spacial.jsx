import React, { useContext } from "react";
import { AssetContext } from "./FamilyTree";

const Spacial = ({ asset }) => {
  const newAsset = useContext(AssetContext);
  console.log("new asset", newAsset);
  return (
    <div>
      <h3>Spacial</h3>
      <p>asset: {asset} </p>
      <p>mew asset: {newAsset}</p>
    </div>
  );
};

export default Spacial;

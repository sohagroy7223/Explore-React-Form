import React from "react";
import Spacial from "./Spacial";

const MySelf = ({ asset }) => {
  return (
    <div>
      <h3>My self</h3>
      <section>
        <Spacial asset={asset}></Spacial>
      </section>
    </div>
  );
};

export default MySelf;

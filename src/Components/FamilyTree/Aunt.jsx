import React from "react";
import AuntSons from "./AuntSons";

const Aunt = () => {
  return (
    <div>
      <h3>Aunt</h3>
      <section className="flex">
        <AuntSons name={"Onona"}></AuntSons>
        <AuntSons name={"Bikash"}></AuntSons>
      </section>
    </div>
  );
};

export default Aunt;

import React from "react";
import UncleSons from "./UncleSons";
import "./FamilyTree.css";
const Uncle = () => {
  return (
    <div>
      <h3>Uncle</h3>
      <section className="flex">
        <UncleSons name={"Akash"}></UncleSons>
        <UncleSons name={"Anjo"}></UncleSons>
      </section>
    </div>
  );
};

export default Uncle;

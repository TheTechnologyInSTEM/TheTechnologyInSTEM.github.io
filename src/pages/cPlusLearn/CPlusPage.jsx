import React from "react";
import Header from "../../components/Header";
import ConstructionAlert from "../../components/ConstructionAlert";

const CPlusPage = () => {
  return (
    <>
      <Header classes="pt-3 px-3"></Header>
      <div className="page-content pt-7">
        <h1 className="fw-bold">C++</h1>
        <ConstructionAlert></ConstructionAlert>
      </div>
    </>
  );
};

export default CPlusPage;

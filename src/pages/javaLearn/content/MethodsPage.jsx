import React from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import CodeDisplay from "../../../components/CodeDisplay";
import NextPrev from "../../../components/NextPrev";

const MethodsPage = () => {
  return (
    <>
      <Header classes="pt-3 px-3"></Header>
      <div className="page-content pt-7"></div>
      <NextPrev
        lastPath="/learn/java/loops"
        nextPath="/learn/java/oop"
      ></NextPrev>
      <Footer></Footer>
    </>
  );
};

export default MethodsPage;

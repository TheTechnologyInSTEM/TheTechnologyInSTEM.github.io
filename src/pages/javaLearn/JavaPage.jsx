import React from "react";
import Header from "../../components/Header";

const JavaPage = () => {
  return (
    <>
      <Header classes="pt-3 px-3"></Header>
      <div className="page-content pt-7">
        <ul>
          <li>
            <a className="link link-primary" href="/learn/java/variables">
              Variables
            </a>
          </li>
          <li>
            <a
              className="link link-primary"
              href="/learn/java/variableQuestions"
            >
              Variable Questions
            </a>
          </li>
          <li>
            <a className="link link-primary" href="/learn/java/operators">
              Operators
            </a>
          </li>
          <li>
            <a className="link link-primary" href="/learn/java/dataStructures">
              Data Structures
            </a>
          </li>
          <li>
            <a className="link link-primary" href="/learn/java/conditionals">
              Conditionals
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default JavaPage;

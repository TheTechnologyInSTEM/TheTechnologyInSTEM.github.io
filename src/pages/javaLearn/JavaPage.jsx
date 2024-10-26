import React from "react";
import Header from "../../components/Header";
import ConstructionAlert from "../../components/ConstructionAlert";

const JavaPage = () => {
  return (
    <>
      <Header classes="pt-3 px-3"></Header>
      <div className="page-content pt-7">
        <h1 className="fw-bold">Java</h1>
        <ConstructionAlert></ConstructionAlert>
        <p>
          Java is a high-level, object-oriented programming language that
          emphasizes simplicity, security, and protability. It is widely used
          for web applications, mobile development (especially for Android
          devices), enterprise software, and backend systems.
        </p>
        <p>Here is a list of all of our currently existing lessons for Java!</p>
        <ol>
          <li>
            <a className="link link-primary" href="/learn/java/variables">
              Variables
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
          <li>
            <a className="link link-primary" href="/learn/java/loops">
              Loops
            </a>
          </li>
          <li>
            <a className="link link-primary" href="/learn/java/methods">
              Methods
            </a>
          </li>
          <li>
            <a className="link link-primary" href="/learn/java/oop">
              OOP
            </a>
          </li>
        </ol>
      </div>
    </>
  );
};

export default JavaPage;

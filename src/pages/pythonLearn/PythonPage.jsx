import React from "react";
import Header from "../../components/Header";
import ConstructionAlert from "../../components/ConstructionAlert";

const PythonPage = () => {
  return (
    <>
      <Header classes="pt-3 px-3"></Header>
      <div className="page-content pt-7">
        <h1 className="fw-bold">Python</h1>
        <ConstructionAlert></ConstructionAlert>
        <p>
          Python is a high-level, interpreted programming language known for
          simplicity, readability, and versatility. It emphasizes ease of use
          and clean syntax, making it ideal for beginners! It supports multiple
          styles of programming, and is used widely in web development, data
          science, machine learning, automation, scientific computing, and more.
        </p>
        <p>
          Here is a list of all of our currently existing lessons for Python!
        </p>
        <ol>
          <li>
            <a className="link link-primary" href="/learn/python/lesson-1">
              Python 1
            </a>
          </li>
          <li>
            <a className="link link-primary" href="/learn/python/lesson-2">
              Python 2
            </a>
          </li>
          <li>
            <a className="link link-primary" href="/learn/python/lesson-3">
              Python 3
            </a>
          </li>
          <li>
            <a className="link link-primary" href="/learn/python/lesson-4">
              Python 4
            </a>
          </li>
          <li>
            <a className="link link-primary" href="/learn/python/lesson-5">
              Python 5
            </a>
          </li>
          <li>
            <a className="link link-primary" href="/learn/python/lesson-6">
              Python 6
            </a>
          </li>
          <li>
            <a className="link link-primary" href="/learn/python/lesson-7">
              Python 7
            </a>
          </li>
          <li>
            <a className="link link-primary" href="/learn/python/lesson-8">
              Python 8
            </a>
          </li>
          <li>
            <a className="link link-primary" href="/learn/python/lesson-9">
              Python 9
            </a>
          </li>
        </ol>
      </div>
    </>
  );
};

export default PythonPage;

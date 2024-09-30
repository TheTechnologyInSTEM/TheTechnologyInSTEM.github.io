import React from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import NextPrev from "../../../components/NextPrev";
import CodeDisplay from "../../../components/CodeDisplay";

const Python2 = () => {
  return (
    <>
      <Header classes="pt-3 px-3"></Header>
      <div className="text-center pt-7 page-content">
        <h1>Python - Intro to Turtle</h1>
        <h3 className="fw-bold">What is Turtle?</h3>
        <p>
          Turtle is something we call a <b>library</b> in coding. Essentially,
          it's a whole bunch of code that people have already wrote for us, that
          we use to make our job easier!
        </p>
        <p>
          Turtle, in particular, is a library that helps us learn Python in a
          more fun, visual format than we would typically be able to without
          using a library.
        </p>
        <h3 className="fw-bold">Making a File and Importing Turtle</h3>
        <p>
          {
            "If you don't have a file open already, click File > New Text File (or press Ctrl + N / Cmd + N), then click File > Save (or press Ctrl + S / Cmd + S) and name your file 'filename.py'. You can replace 'filename' with anything you'd like to call your file, but make sure it has '.py' at the end."
          }
        </p>
        <p>
          Once you've done that, you'll need to write your first line of code!
          The first thing we'll need to do is tell our computer that we need to
          use the turtle library. To do this, we will "import" the turtle!
        </p>
        <h3 className="fw-bold"></h3>
        <CodeDisplay
          code={`import turtle
`}
          language="python"
        ></CodeDisplay>
        <h3 className="fw-bold">Moving the Turtle</h3>
        <p>
          Now that the turtle is imported, we can make it do things! The first
          thing we'll learn how to do is make the turtle move forward.
        </p>
        <p>
          Whenever we want to make the turtle do anything, we always have to
          "call" its name, then tell it what it should do, followed by
          parentheses (). Sometimes, we specify <i>how</i> the turtle should
          carry out the command in the parentheses.
        </p>
        <CodeDisplay
          code={`import turtle

turtle.forward(400)
# the number inside the parentheses here tells the turtle how far to go forward!
# try out different values in here on your own!
`}
          language="python"
        ></CodeDisplay>
      </div>
      <NextPrev
        lastPath={"/learn/python/lesson-1"}
        nextPath={"/learn/python/lesson-3"}
      ></NextPrev>
      <Footer></Footer>
    </>
  );
};

export default Python2;

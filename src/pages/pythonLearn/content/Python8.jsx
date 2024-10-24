import React from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import CodeDisplay from "../../../components/CodeDisplay";
import NextPrev from "../../../components/NextPrev";

const DataStructuresPage = () => {
  return (
    <>
      <Header classes="pt-3 px-3"></Header>
      <div className="page-content pt-7">
        <h1 className="fw-bold">Conditionals</h1>
        <p>
          Conditionals check whether something is true or false, then run code
          depending on what the result is.
        </p>
        <CodeDisplay
          code={`if expression:
#do this
elif expression2:
#if expression is false but expression 2 is true, do this
elif expression3:
#if expression and expression2 are both false, but expression3 is true, do this
else:
#if none of the expressions are true, do this
`}
          language={"python"}
        ></CodeDisplay>
        <p>{`We can create expressions using “==” (equal to), “!=” (not equal to), “<” (less than), “>” (greater than), “<=” (less than or equal to), and “>=” (greater than or equal to)
`}</p>
        <h3 className="fw-bold">Walk-Through Project - Three Shapes</h3>
        <p>
          We’re now going to start a little mini-project. The end result of this
          project should take input from the user on which shape to draw
          (circle, triangle, or square), what color the shape should be (circle
          is one color, triangle three colors, and square four colors), and what
          color the shape should be filled. The first thing we’re going to do is
          set up the inputs for the project. Let’s start with the input for
          which shape to draw and what color the shape should be filled first.
          Try doing this yourself first!
        </p>
        <CodeDisplay
          code={`shape = input("What shape would you like to draw? (circle/triangle/square)")
`}
          language={"python"}
        ></CodeDisplay>
      </div>
      <NextPrev lastPath="/learn/" nextPath="/learn/"></NextPrev>
      <Footer></Footer>
    </>
  );
};

export default DataStructuresPage;

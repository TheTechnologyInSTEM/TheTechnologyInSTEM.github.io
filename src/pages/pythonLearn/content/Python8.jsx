import React from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import CodeDisplay from "../../../components/CodeDisplay";
import NextPrev from "../../../components/NextPrev";
import ConstructionAlert from "../../../components/ConstructionAlert";

const DataStructuresPage = () => {
  return (
    <>
      <Header classes="pt-3 px-3"></Header>
      <div className="page-content pt-7">
        <h1 className="fw-bold">Conditionals</h1>
        <ConstructionAlert></ConstructionAlert>
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
        <h3 className="fw-bold">Examples</h3>
        <p>
          Let's go through some examples of using conditionals! Let's say John
          is a picky eater, and will only go to a restaraunt if pizza is on the
          menu. How can we represent this situation in code? <br />
          <br />
          Try it yourself first!
          <CodeDisplay
            code={`hasPizza = False # you can try setting this to true and see what happens!

if (hasPizza):
	print("Let's go eat!")
else:
	print("I don't think we should go there.")
`}
            language={"python"}
          ></CodeDisplay>
        </p>
        <p>
          Let's say that we want to draw a certain shape off of some input a
          user provided. Here's how we would use conditionals to do that:
        </p>
        <CodeDisplay
          code={`import turtle

shape = int(input("What shape would you like to draw? (0 - Circle, 1 - Triangle, 2 - Square)"))

if shape == 0:
	for x in range(360):
		turtle.forward(1)
		turtle.right(1)
elif shape == 1:
	for x in range(3):
		turtle.forward(100)
		turtle.right(120)
else:
	for x in range(4):
		turtle.forward(100)
		turtle.right(90)

turtle.mainloop()
`}
          language={"python"}
        ></CodeDisplay>
      </div>
      <NextPrev
        lastPath="/learn/python/lesson-7"
        nextPath="/learn/python/lesson-9"
      ></NextPrev>
      <Footer></Footer>
    </>
  );
};

export default DataStructuresPage;

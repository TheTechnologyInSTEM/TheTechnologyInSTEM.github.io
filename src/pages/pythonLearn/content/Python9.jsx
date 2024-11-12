import React from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import CodeDisplay from "../../../components/CodeDisplay";
import NextPrev from "../../../components/NextPrev";

const Python9 = () => {
  return (
    <>
      <Header classes="pt-3 px-3"></Header>
      <div className="page-content pt-7">
        <h1 className="fw-bold">Methods & Functions</h1>
        <p>
          Methods (also known as functions) are blocks of code that we can
          execute by simply calling one line. They’re helpful to make code more
          readable and are another way we can cut down on how much code is
          repeated.
          <br />
          <br />
          To create a method, we use the “def” keyword, like this:
        </p>
        <CodeDisplay
          code={`def my_function():
	print("This is code from a function.")
  `}
          language={"python"}
        ></CodeDisplay>
        <h3 className="fw-bold">Parameters</h3>
        <p>
          You may recall that when we use turtle.forward(), we always put a
          number within the parentheses to specify how far the turtle should
          move forward. This number is a “parameter.” It is information that we
          input into the function to alter the way in which it executes.
          Parameters can only be used within the function that takes them, and
          is used pretty similarly to how a variable would be. As an example,
          let’s say we want to make a function that draws different size
          squares:
        </p>
        <CodeDisplay
          code={`def draw_square(side_length):
	for x in range(4):
		turtle.forward(side_length)
		turtle.right(90)
`}
          language={"python"}
        ></CodeDisplay>
        <h3 className="fw-bold">Return</h3>
        <p>
          Functions can also return values that we can store within variables,
          or use as parameters for other functions! Let’s say we want a function
          to take a number as a parameter, and return True or False, depending
          on whether the number was odd or not. Here’s how we would do that:
        </p>
        <CodeDisplay
          code={`def is_even(number):
	if number % 2 == 0:
		return True
	else:
		return False
`}
          language={"python"}
        ></CodeDisplay>
        <p>
          We can actually condense this code even further using the ternary
          operator (essentially, a one-line if statement):
        </p>
        <CodeDisplay
          code={`def is_even(number):
	return True if number % 2 == 0 else False
`}
          language={"python"}
        ></CodeDisplay>
        <p>
          That’s all for basic Python! If you’d like to continue learning, we
          have a lot of fun, bite-sized programming projects that you can follow
          along to get even better at coding in Python!
        </p>
      </div>
      <NextPrev
        lastPath="/learn/python/lesson-8"
        nextPath="/learn/python"
      ></NextPrev>
      <Footer></Footer>
    </>
  );
};

export default Python9;

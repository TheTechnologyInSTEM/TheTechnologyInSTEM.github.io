import React from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import CodeDisplay from "../../../components/CodeDisplay";
import NextPrev from "../../../components/NextPrev";

const Python7 = () => {
  return (
    <>
      <Header classes="pt-3 px-3"></Header>
      <div className="page-content pt-7">
        <h1 className="fw-bold">For Loops Pt. 2</h1>
        <h3 className="fw-bold">For Loops</h3>
        <p>
          A few lessons ago, we learned a little bit about for loops. Now, we’ll
          dive a little bit deeper into understanding how for loops really work.
        </p>
        <CodeDisplay
          code={`for x in range(5):
# do this

#for [var_name] in [list]:
# do this
`}
          language={"python"}
        ></CodeDisplay>
        <p>
          The reason why “for x in range(5)” is because the range() function
          creates a list of numbers that is as long as the number you put in as
          the parameter:
        </p>
        <CodeDisplay
          code={`list = range(5) #-> [0, 1, 2, 3, 4] list that is 5 items long`}
          language={"python"}
        ></CodeDisplay>
        <p>
          So now we know how the for loop determines how many times it iterates.
          But then, what is the variable name in the middle of the for loop?
          This is actually used so that we can access whatever item we’re
          currently iterating through. Here’s something that shows you what that
          really means:
        </p>
        <CodeDisplay
          code={`list = ["First Item", "Second Item", "Third Item"]

for item in list:
print(item) #the print function is a basic function that allows us to get input really quickly

#output:
# First Item
# Second Item
# Third Item
`}
          language={"python"}
        ></CodeDisplay>
        <p>
          Every time the loop repeats itself, the variable that we put in the
          loop gets assigned to whatever item we’re currently on. Here’s an
          example of how we can use that with turtle:
        </p>
        <CodeDisplay
          code={`import turtle

colors = ["red", "blue", "green"]

for color in colors:
turtle.color(color)
turtle.forward(100)

#this will give us a line with three segments: the first red, the second blue, and the third green
`}
          language={"python"}
        ></CodeDisplay>
        <h3 className="fw-bold">penup() and pendown()</h3>
        <p>
          Have you ever wanted to move the turtle to a certain spot, but
          couldn’t because the turtle would draw a line to wherever it was
          going? Well, we can use penup() and pendown() in order to change that:
        </p>
        <CodeDisplay
          code={`import turtle

turtle.forward(100)
turtle.penup()
turtle.forward(100)
turtle.pendown()
turtle.forward(100)

# this will give us a line, then a 100 px gap, and another line
`}
          language={"python"}
        ></CodeDisplay>
      </div>
      <NextPrev
        lastPath="/learn/python/lesson-6"
        nextPath="/learn/python/lesson-8"
      ></NextPrev>
      <Footer></Footer>
    </>
  );
};

export default Python7;

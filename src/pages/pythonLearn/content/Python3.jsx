import React from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import CodeDisplay from "../../../components/CodeDisplay";
import NextPrev from "../../../components/NextPrev";

const Python3 = () => {
  return (
    <>
      <Header classes="pt-3 px-3"></Header>
      <div className="page-content pt-7">
        <h1 className="fw-bold">For Loops</h1>
        <h3 className="fw-bold">Solution - Square Challenge</h3>
        <CodeDisplay
          code={`import turtle

turtle.forward(300) #each side of the square must be 300 pixels
turtle.right(90)
turtle.forward(300)
turtle.right(90)
turtle.forward(300)
turtle.right(90)
turtle.forward(300)
# 4 sides of a square, so we need to use turtle.forward() 4 separate times

turtle.mainloop()

#Note: This will still work, even if you use turtle.left() instead of turtle.right()
`}
          language={"python"}
        ></CodeDisplay>
        <h3 className="fw-bold">speed()</h3>
        <p>
          While completing the challenge from last lesson, you may have noticed
          that it takes a pretty long time for the turtle to draw out the
          square. We can speed up this process by using the speed() function!
        </p>
        <CodeDisplay
          code={`import turtle

turtle.speed(5)
# 1 is the slowest, and it increases in speed going up to 10
# 0 is the fastest

turtle.forward(300)
turtle.right(90)
turtle.forward(300)
turtle.right(90)
turtle.forward(300)
turtle.right(90)
turtle.forward(300)

turtle.mainloop()
`}
          language={"python"}
        ></CodeDisplay>
        <p>Much faster, right? Try tinkering with the numbers for speed!</p>
        <h3 className="fw-bold">For Loops</h3>
        <p>
          If you look back at the code we used to draw our square, you’ll notice
          that the same two lines of code are repeated over and over again. We
          can write this code more efficiently using loops. Loops repeat our
          code a certain number of times, which makes them really useful
          whenever we have a task that we want to repeat over and over again.
          Here’s how to use them:
        </p>
        <CodeDisplay
          code={`import turtle

# for [any_name_you_want] in range([repeat_this_many_times]):
#repeat this code

for x in range(8): #this is repeated 8 times
turtle.forward(100)
turtle.right(45)

turtle.mainloop()
`}
        ></CodeDisplay>
        <p>
          You’ll see that this code is much more efficient and easier to read,
          as opposed to this code, which does the same thing:
        </p>
        <CodeDisplay
          code={`import turtle

turtle.forward(100)
turtle.right(45)
turtle.forward(100)
turtle.right(45)
turtle.forward(100)
turtle.right(45)
turtle.forward(100)
turtle.right(45)
turtle.forward(100)
turtle.right(45)
turtle.forward(100)
turtle.right(45)
turtle.forward(100)
turtle.right(45)
turtle.forward(100)
turtle.right(45)

turtle.mainloop()
`}
          language={"java"}
        ></CodeDisplay>
        <h3 className="fw-bold">Challenge #1 - Drawing a Square Lv. 2</h3>
        <p>
          Your goal for this exercise is to go back to your code for the square
          challenge, and make it do the same thing, but only using 5 lines of
          code.
        </p>
        <h3 className="fw-bold">Challenge #2 - Drawing a Circle</h3>
        <p>
          Your goal for this exercise is to draw a circle using a for loop.
          Remember, a circle is technically a shape with a LOT of very, very
          small sides. There are 360 degrees in a full circle. Good luck!
        </p>
      </div>
      <NextPrev
        lastPath="/learn/python/lesson-2"
        nextPath="/learn/python/lesson-4"
      ></NextPrev>
      <Footer></Footer>
    </>
  );
};

export default Python3;

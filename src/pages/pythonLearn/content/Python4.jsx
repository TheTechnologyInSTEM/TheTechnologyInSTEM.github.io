import React from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import CodeDisplay from "../../../components/CodeDisplay";
import NextPrev from "../../../components/NextPrev";

const Python4 = () => {
  return (
    <>
      <Header classes="pt-3 px-3"></Header>
      <div className="page-content pt-7">
        <h1 className="fw-bold">More Turtle Functions</h1>
        <h3 className="fw-bold">Solution - Challenge #1</h3>
        <CodeDisplay
          code={`import turtle
for x in range(4):
turtle.forward(300)
turtle.right(90)
turtle.mainloop()
`}
          language={"python"}
        ></CodeDisplay>
        <h3 className="fw-bold">Solution - Challenge #2</h3>
        <CodeDisplay
          code={`import turtle

for x in range(360): #Circle has 360 angle degrees, so we need to repeat this 360 times
turtle.forward(1)
turtle.right(1) #this works with turtle.left() too

turtle.mainloop()
`}
          language={"python"}
        ></CodeDisplay>
        <h3 className="fw-bold">Colors</h3>
        <p>
          Let’s learn how to change the color of what the turtle draws. You can
          use the color() function to do this:
        </p>
        <CodeDisplay
          code={`import turtle

turtle.color("red")

turtle.forward(300)

turtle.mainloop()
`}
          language={"python"}
        ></CodeDisplay>
        <p>
          <a
            href="https://cs111.wellesley.edu/labs/lab02/colors"
            target="_blank"
          >
            Here
          </a>{" "}
          is a full list of the colors that you can use with the turtle library.
          Make sure that you put the name of the color in quotation marks! We’ll
          cover why this is important in the next lesson.
        </p>
        <h3 className="fw-bold">Filling in Outlines</h3>
        <p>
          Right now, we can draw basic shapes but can’t color them in.
          Thankfully, the turtle library has some functions that can help us
          with this: begin_fill(), end_fill(), and fillcolor(). Let’s look at
          how to use begin_fill() and end_fill() first:
        </p>
        <CodeDisplay
          code={`import turtle

turtle.begin_fill() # fill everything between this line

for x in range(8):
turtle.forward(100)
turtle.right(45)

turtle.end_fill() # and this line

turtle.mainloop()
`}
          language={"python"}
        ></CodeDisplay>
        <p>
          If you code a full, closed shape, the begin_fill() and end_fill()
          functions will fill whatever you put between the two lines! You can
          also change the color that the shape gets filled in, with fillcolor():
        </p>
        <CodeDisplay
          code={`import turtle

turtle.color("red") # the outline color of the shape will be red

turtle.fillcolor("blue") # the fill color of the shape will be blue

turtle.begin_fill()

for x in range(8):
turtle.forward(100)
turtle.right(45)

turtle.end_fill()

turtle.mainloop()
`}
          language={"python"}
        ></CodeDisplay>
        <h3 className="fw-bold">“Absolute” Positioning</h3>
        <p>
          You can make the turtle move to an exact location or face an exact
          direction using the goto() and setheading() functions. These are
          really useful when you’re doing a lot of turns and don’t want to do
          all the addition and imagination required to know the angle you need
          to turn at. You’ll probably see what we mean in the next challenge!
          For now, here’s how to use the goto() function:
        </p>
        <CodeDisplay
          code={`import turtle

#turtle.goto(x, y)
turtle.goto(0, 300) # the turtle will go up to (0, 300), which is 300 pixels above the starting position

turtle.mainloop()
`}
          language={"python"}
        ></CodeDisplay>
        <p>And the setheading() function:</p>
        <CodeDisplay
          code={`import turtle

#turtle.setheading(angle)
turtle.setheading(0) #looking to the right
turtle.setheading(90) #looking up
turtle.setheading(180) #looking to the left
turtle.setheading(270) #looking down

turtle.mainloop()
`}
          language={"python"}
        ></CodeDisplay>
        <h3 className="fw-bold">Challenge - Drawing a Bow</h3>
        <p>
          You can take most of the creative agency on this one. Just draw a bow,
          any kind of bow you can imagine! With what we’ve taught you, you
          should be able to draw any kind of shape. This challenge is very
          flexible, and it’s really up to you how you want to draw your bow!
          Here is an example solution:
        </p>
        <CodeDisplay
          code={`import turtle

#Setting Colors
turtle.color("black")
turtle.fillcolor("pink")
turtle.bgcolor("blue")

#Making it draw the bow more quickly
turtle.speed(0)

turtle.begin_fill() # start filling this shape:

for x in range(6): # this creates an octagon, but only draws 6 sides
turtle.forward(80)
turtle.left(45)
  
turtle.setheading(135) #Sets the turtle up to draw the next octagon right next to the previous one

for x in range(6): #octagon 2
turtle.forward(80)
turtle.left(45)

#first part of the bottom section of the bow
turtle.goto(-160, -200)
turtle.goto(-140, -220)

turtle.goto(-55, 0) # go back to the top (this is approximately the center of the two bows; you could use math to find the exact centner, but you can also just test the program multiple times until it's good enough) 
# finalizing the bow
turtle.goto(20, -220)
turtle.goto(40, -200)

#go to the original spot to close the bow 
turtle.goto(0, 0)

turtle.end_fill() # end filling this shape ^^

turtle.mainloop()
`}
          language={"python"}
        ></CodeDisplay>
      </div>
      <NextPrev
        lastPath="/learn/python/lesson-3"
        nextPath="/learn/python/lesson-5"
      ></NextPrev>
      <Footer></Footer>
    </>
  );
};

export default Python4;

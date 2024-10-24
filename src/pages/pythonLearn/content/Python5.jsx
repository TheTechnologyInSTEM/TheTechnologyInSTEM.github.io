import React from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import CodeDisplay from "../../../components/CodeDisplay";
import NextPrev from "../../../components/NextPrev";

const Python5 = () => {
  return (
    <>
      <Header classes="pt-3 px-3"></Header>
      <div className="page-content pt-7">
        <h1 className="fw-bold">Variables</h1>
        <p>
          Variables are like boxes that store information in programming. Here’s
          how to “initiate” (create) a variable:
        </p>
        <CodeDisplay
          code={`# variable_name = variable_value

name = "John Smith" #whenever we have words/letters, we need to use quotation marks
age = 25 #numbers can just be written out normally like this
has_a_pet = True #"boolean" values can either be written as True or False, WITHOUT quotation marks. Make sure to capitalize T/F
likes_broccoli = False
`}
          language={"python"}
        ></CodeDisplay>
        <p>
          They’re really useful whenever we have a single value that we want to
          use multiple times. For example:
        </p>
        <CodeDisplay
          code={`import turtle

turtle.forward(50)
turtle.color("LightGoldenrodYellow")
turtle.forward(50)
turtle.color("DodgerBlue4")
turtle.forward(50)
turtle.color("LightGoldenrodYellow")
turtle.forward(50)
turtle.color("lavenderblush")
turtle.forward(50)
turtle.color("LightGoldenrodYellow")
turtle.forward(50)

turtle.mainloop()
`}
          language={"python"}
        ></CodeDisplay>
        <p>
          Not only is “LightGoldenrodYellow” a pretty long name for a color, but
          if we wanted to change all three of these to some other color, like
          “LawnGreen”, for example, we would have to change all three lines
          manually it shows up on. However, we can make this whole process way
          simpler if we just do something like this:
        </p>
        <CodeDisplay
          code={`import turtle

color = "LightGoldenrodYellow"

turtle.forward(50)
turtle.color(color)
turtle.forward(50)
turtle.color("DodgerBlue4")
turtle.forward(50)
turtle.color(color)
turtle.forward(50)
turtle.color("lavenderblush")
turtle.forward(50)
turtle.color(color)
turtle.forward(50)

turtle.mainloop()
`}
          language={"python"}
        ></CodeDisplay>
        <p>
          This way, we can avoid having to type “LightGoldenrodYellow” every
          time, and also make it easier to change the color if we want to.
        </p>
        <h3 className="fw-bold">input()</h3>
        <p>
          Variables are also useful for storing user input. For example, let’s
          say you want to draw a line of a length specified by the user:
        </p>
        <CodeDisplay
          code={`import turtle

#variable_name = input("Prompt: ")
length = input("How long would you like the line to be?") 
turtle.forward(length)

turtle.mainloop()
`}
          language={"python"}
        ></CodeDisplay>
        <p>
          But wait! You’ll notice if you try this program on your own, it won’t
          work. That’s because input() “returns” a word variable (also called a
          “string”) whenever you use it. This is what that looks like:
        </p>
        <CodeDisplay
          code={`#Let's say that the user types in 300

length = "300"

# or the user types in 500

length = "500"
`}
          language={"python"}
        ></CodeDisplay>
        <p>
          The problem here is that the turtle.forward() function only takes
          number variables:
        </p>
        <CodeDisplay
          code={`import turtle

length = 300
length = "300"
# THESE TWO ARE NOT THE SAME!! one is seen by the computer as a number, the other is seen by the computer as a word

turtle.forward(300) This will NOT give an error

turtle.backward("600") This will give an error

turtle.mainloop()
`}
          language={"python"}
        ></CodeDisplay>
        <p>
          So, how can we turn the input we get into a number? We can use the
          int() function to convert our string from the input() function into a
          number:
        </p>
        <CodeDisplay
          code={`import turtle

length = int(input("How long would you like the line to be?")) #We grab the input, then turn it into a number
turtle.forward(length)

turtle.mainloop()
`}
          language={"python"}
        ></CodeDisplay>
        <h3 className="fw-bold">Challenge - Custom Colors</h3>
        <p>
          Go back to the program we’ve been working on with the custom line
          length. Now, try to add a few lines of code and make it so that you
          can change the color of the line based on user input.
        </p>
      </div>
      <NextPrev
        lastPath="/learn/python/lesson-4"
        nextPath="/learn/python/lesson-6"
      ></NextPrev>
      <Footer></Footer>
    </>
  );
};

export default Python5;

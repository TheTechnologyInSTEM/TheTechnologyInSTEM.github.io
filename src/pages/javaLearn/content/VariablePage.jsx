import React from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import CodeDisplay from "../../../components/CodeDisplay";
import Question from "../../../components/Question";
import NextPrev from "../../../components/NextPrev";

const VariablePage = () => {
  return (
    <>
      <Header classes="pt-3 px-3"></Header>
      <div className="pt-7 page-content">
        <div>
          <h1>Java - Variables</h1>
          <h3 className="fw-bold">What is a variable?</h3>
          <p>
            The formal definition of a variable is a storage location for data
            in a program. To put this in simpler terms, let's think of it as an
            analogy:
          </p>
          <p>
            Let's say we have a box, and we put items inside of the box. In this
            case, the box can be considered the variable, and the items inside
            of it are the data we want to store.
          </p>
          <p>
            Programming approaches variables the same way as in math. In math,
            variables hold expressions or numeric values, and likewise in
            computer science, variables hold data.
          </p>
          <h3 className="fw-bold">Why do we use variables?</h3>
          <p>
            In computer science, we use variables to make code more readable,
            less repetitive, and more condensed.
          </p>
          <p>
            We also use variables when we do not know the exact input we are
            dealing with, but want to allow for scalability (meaning, we don't
            need to rewrite all of our code everytime we want to add a new
            feature).
          </p>
          <p>
            In other words, we want the logic to be the same when we are
            constructing a program, and a variable allows the program to be
            logically consistent, regardless of the inputs that we put into the
            program later.
          </p>
          <h3 className="fw-bold">
            What are the different types of variables?
          </h3>
          <p>
            In Java, variables can hold 4 different types of data. When we
            create variables, we need to specify three main things: the type of
            variable, the name of the variable, and the value of the variable.
          </p>
          <p>
            It's also important to remember that the value stored in the
            variable has to correspond to the variable type that we declared the
            variable to be!
          </p>
          <h4 className="fw-bold">Integers</h4>
          <p>
            Integers can only hold <b>whole number values</b>, without decimals.
            Here's how to create integers in Java:
          </p>
          <CodeDisplay
            code={`//Creating Integers in Java // [!code highlight]
//Whenever you create a variable in Java, use this format: (data type) (name) = (value)
int example_variable = 42; //"int" is short for "integer" in Java!
int example_variable2 = 0;
int example_variable3 = 24 + 5;
Note: You need to end all of your lines with the semi-colon in Java! (;)// [!code focus]`}
            language="java"
          />
          <h5 className="fw-bold pt-2">Quick-Check!</h5>
          <Question
            question="Which of the following is a correct way to declare a variable?"
            questionNo="javaVar1"
            options={[
              {
                text: "(TYPE) (NAME) = (VALUE);",
                explanation:
                  "Correct! First specify type, then name, then use the assignment operator to assign a value.",
              },
              {
                text: "(NAME) (TYPE) = (VALUE);",
                explanation: "Incorrect. Try again!",
              },
              {
                text: "(VALUE) = (TYPE) (NAME);",
                explanation: "Incorrect. Try again!",
              },
              {
                text: "(TYPE) (NAME)",
                explanation: "Incorrect. Remember the semi-colon!!",
              },
            ]}
            correctIndex={0}
          />
          <h4 className="fw-bold">Doubles</h4>
          <p>
            Next, we have doubles. Like integers, doubles are numbers, but they
            can be either whole numbers OR numbers with decimals. Here's how to
            use them in Java:
          </p>
          <CodeDisplay
            code={`//Creating Doubles in Java // [!code highlight]
double myDouble = 7.0;
double myDouble2 = 14.5;
double 3Double = 3.0; //You can only start variable names with letters! // [!code --]
`}
            language="java"
          />
          <h4 className="fw-bold">Strings</h4>
          <p>
            Next, we have strings. Simply, these are words or phrases! This
            variable takes up the most computing resources in your program. To
            tell the computer that the variable is a string, we surround the
            phrase with quotation marks ("")
          </p>
          <CodeDisplay
            code={`//Creating Strings in Java // [!code highlight]
String name = "John"; //Make sure to capitalize String at the start of your variable!
String school = "North River High School";
String favorite_food = "Hamburgers";
Tip: You should always make your variable names easy to understand! // [!code focus]
`}
            language="java"
          />
          <h4 className="fw-bold">Booleans</h4>
          <p>
            Finally, we have booleans, which are the most simple variables -
            they can either be true or false, nothing else!
          </p>
          <CodeDisplay
            code={`//Creating Booleans in Java // [!code highlight]
boolean likesApples = true;
boolean isRaining = false;
`}
            language="java"
          />
          <h3 className="fw-bold">Modifying Variable Values</h3>
          <p>
            As you saw in the creation of variables, we use the "=" sign to
            assign variables with a value. The "=" is also known as the{" "}
            <b>assignment operator</b>.
          </p>
          <p>
            We can also use the assignment operator to re-assign new values to
            an existing variable:
          </p>
          <CodeDisplay
            code={`//Modifying Variables in Java // [!code highlight]
//First, we'll create the variables that we'll change later on...
String name = "John";
int age = 16;
double height = 180.5;
boolean likesCats = true;

//Now, we'll reassign!
//When re-assigning, you don't have to specify the data type!
name = "Jill";
age = 17;
height = 190.4;
likesCats = false;
`}
            language="java"
          />
          <h3 className="fw-bold">Wrap-Up</h3>
          <p>
            Variables are used to store data in programming. In Java, variables
            can store 4 different kinds of info: integers (whole numbers),
            doubles (whole numbers/numbers with decimals), strings (words), and
            booleans (true/false).
          </p>
          <p>
            When declaring variables in Java, we start by saying the type of
            variable, then the name, and finally, we use the assignment operator
            to assign a value to the variable. Names for variables must start
            with letters, and should be named clearly to make your code easier
            to read!
          </p>
        </div>
      </div>
      <NextPrev
        lastPath="/learn/java"
        nextPath="/learn/java/variableQuestions"
      ></NextPrev>
      <Footer></Footer>
    </>
  );
};

export default VariablePage;

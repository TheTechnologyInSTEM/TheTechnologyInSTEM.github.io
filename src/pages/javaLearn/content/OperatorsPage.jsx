import React from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import CodeDisplay from "../../../components/CodeDisplay";
import Question from "../../../components/Question";
import NextPrev from "../../../components/NextPrev";

const OperatorsPage = () => {
  return (
    <>
      <Header classes="pt-3 px-3" />
      <div className="pt-7 page-content">
        <div>
          <h1>Java - Operators</h1>
          <h3 className="fw-bold">What is an Operator?</h3>
          <p>
            Operators are symbols within programming that enact operations on
            variables or expressions. Let's take a look at the main operations
            within Java:
          </p>

          <h3 className="fw-bold">Mathematical Operators</h3>
          <p>
            These are operators that perform mathematical operations within
            programming. Math operators conduct operations on integer and double
            data types only.
          </p>

          <p>Let's dive into the five main math operators.</p>

          <h4 className="fw-bold">Addition</h4>
          <p>
            Firstly, there is addition. This is signified with the "+" symbol.
            Here's an example:
          </p>
          <CodeDisplay
            code={`int hello = 1;
int goodbye = 1;
System.out.println(hello + goodbye); 
// Result: 2
System.out.println() is a useful line of code to print the output of our code!
`}
            language="java"
          />

          <h4 className="fw-bold">Subtraction</h4>
          <p>
            Next is subtraction. This is represented by the "-" operator. Here's
            an example:
          </p>
          <CodeDisplay
            code={`int welcome = 5;
int exit = 2;
int result = welcome - exit;
System.out.println(result); 
// Result: 3
`}
            language="java"
          />

          <h4 className="fw-bold">Multiplication</h4>
          <p>
            The third operator is multiplication, represented by the asterisk
            symbol "*". Here's an example:
          </p>
          <CodeDisplay
            code={`int fire = 10;
int water = 10;
double result = fire * water;
System.out.println(result); 
// Result: 100.0
`}
            language="java"
          />

          <h4 className="fw-bold">Division</h4>
          <p>Division is represented by the "/" symbol. Here's an example:</p>
          <CodeDisplay
            code={`int space = 25;
int aliens = 5;
int result = space / aliens;
System.out.println(result); 
// Result: 5
`}
            language="java"
          />

          <h4 className="fw-bold">Remainder (Modulus)</h4>
          <p>
            Lastly, we have the "%" symbol, which represents the modulus
            operator. This operator finds the remainder of a division. For
            example:
          </p>
          <p>
            <strong>4 % 2</strong> returns 0 because 4 is evenly divisible by 2.
            <br />
            <strong>5 % 2</strong> returns 1 because 5 divided by 2 leaves a
            remainder of 1.
          </p>
          <Question
            question="What is 7 % 7?"
            questionNo="javaOperator1"
            options={[
              {
                text: "0",
                explanation:
                  "Correct! 7 % 7 equals 0, as 7 is divisible by itself.",
              },
              {
                text: "7",
                explanation:
                  "Incorrect. Try again! This is not how the modulo operation works.",
              },
              {
                text: "1",
                explanation:
                  "Incorrect. Try again! The modulo operation gives the remainder.",
              },
              {
                text: "Undefined",
                explanation:
                  "Incorrect. Try again! The operation is defined and results in 0.",
              },
            ]}
            correctIndex={0}
          />
          <Question
            question="What is 7 % 2?"
            questionNo="javaOperator2"
            options={[
              {
                text: "1",
                explanation:
                  "Correct! 7 % 2 equals 1, as the remainder of 7 divided by 2 is 1.",
              },
              {
                text: "2",
                explanation:
                  "Incorrect. Try again! This is not how the modulo operation works.",
              },
              {
                text: "3",
                explanation: "Incorrect. Try again! The result is not 3.",
              },
              {
                text: "0",
                explanation:
                  "Incorrect. Try again! The result is the remainder, not 0.",
              },
            ]}
            correctIndex={0}
          />
          <Question
            question="What is 7 % 4?"
            questionNo="javaOperator3"
            options={[
              {
                text: "3",
                explanation:
                  "Correct! 7 % 4 equals 3, as the remainder of 7 divided by 4 is 3.",
              },
              {
                text: "4",
                explanation:
                  "Incorrect. Try again! This is not how the modulo operation works.",
              },
              {
                text: "1",
                explanation:
                  "Incorrect. Try again! The result is the remainder, not 1.",
              },
              {
                text: "0",
                explanation: "Incorrect. Try again! The result is not 0.",
              },
            ]}
            correctIndex={0}
          />

          <h3 className="fw-bold">Operations with Integers versus Doubles</h3>
          <p>
            In Java, integers cannot hold decimal values. So, when dividing two
            integers, the result will discard the decimal portion and return
            only the whole number.
          </p>
          <p>
            Example: <strong>1 / 2</strong> will result in <strong>0</strong>.
          </p>
          <p>
            However, if a double is involved in the calculation, the decimal
            result will be preserved.
          </p>
          <p>
            Example: <strong>1.0 / 2</strong> will result in{" "}
            <strong>0.5</strong>.
          </p>

          <h3 className="fw-bold">Concatenation (Strings)</h3>
          <p>
            Concatenation in Java refers to combining two variables or data
            types, especially when working with Strings. For example:
          </p>
          <CodeDisplay
            code={`System.out.println("Hello," + " my name is Raj.");
// Result: Hello, my name is Raj.
System.out.println("Walk" + "-Through");
// Result: Walk-Through
System.out.println("Welcome" + " Back");
// Result: Welcome Back
`}
            language="java"
          />

          <h3 className="fw-bold">String Casting</h3>
          <p>
            Only Strings can be added to Strings. If you need to add an integer,
            boolean, or double to a String, you must first convert it to a
            String. This is known as "parsing".
          </p>
          <p>There are two common methods to do this:</p>

          <h4 className="fw-bold">.toString()</h4>
          <CodeDisplay
            code={`int age = 16;
String ageAsString = Integer.toString(age);

double testScore = 98.7;
String testScoreAsString = Double.toString(testScore);

boolean isHappy = true;
String isHappyAsString = Boolean.toString(isHappy);

System.out.println(ageAsString);
System.out.println(testScoreAsString);
System.out.println(isHappyAsString);
`}
            language="java"
          />

          <h4 className="fw-bold">String.valueOf()</h4>
          <CodeDisplay
            code={`int age = 16;
String ageAsString = String.valueOf(age);
`}
            language="java"
          />

          <h3 className="fw-bold">Casting</h3>
          <p>
            Casting in Java refers to converting a variable from one type to
            another.
          </p>

          <h4 className="fw-bold">Implicit Casting (Widening Conversion)</h4>
          <p>
            Implicit casting happens when a smaller data type is automatically
            converted to a larger data type. Example:
          </p>
          <CodeDisplay
            code={`int num1 = 5;
double num2 = num1; // Implicitly casted an integer to a double
`}
            language="java"
          />

          <h4 className="fw-bold">Explicit Casting (Narrowing Conversion)</h4>
          <p>
            Explicit casting occurs when converting a larger data type to a
            smaller one. Example:
          </p>
          <CodeDisplay
            code={`double num1 = 9.78;
int num2 = (int) num1; // Result: 9
`}
            language="java"
          />
        </div>
      </div>
      <NextPrev
        lastPath="/learn/java/variableQuestions"
        nextPath="/learn/java/dataStructures"
      ></NextPrev>
      <Footer />
    </>
  );
};

export default OperatorsPage;

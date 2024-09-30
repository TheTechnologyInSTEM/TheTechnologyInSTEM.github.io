import React from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import CodeDisplay from "../../../components/CodeDisplay";
import NextPrev from "../../../components/NextPrev";

const ConditionalsPage = () => {
  return (
    <>
      <Header classes="pt-3 px-3"></Header>
      <div className="page-content pt-7">
        <h1>Conditionals</h1>
        <p>
          Conditionals are a way that we can continue with an operation IF a
          specific condition is met.
        </p>
        <p>
          Think of conditionals as a decision-making process—whether you realize
          it or not, we use conditionals constantly in our everyday lives. For
          example, if the weather is hot, you might choose to wear lighter
          clothes. Conversely, if it’s cold, you’d likely choose heavier attire.
          In the same way, conditional statements in programming allow a program
          to choose different actions depending on the situation.
        </p>
        <h3 className="fw-bold">Conditional Syntax</h3>
        <p>
          In many programming languages, such as Java, C++, Python, etc., the
          general structure of a conditional statement looks like this:
        </p>
        <CodeDisplay
          code={`if (condition) {
    // code to execute if condition is true
} else if (another condition) {
    // code to execute if another condition is true
    // can be chained multiple times! // [!code highlight]
} else {
    // code to execute if no previous conditions are true
}
`}
          language={"java"}
        ></CodeDisplay>
        <h3 className="fw-bold">How Conditionals Work</h3>
        <p>
          When a program encounters a conditional statement, it evaluates the
          condition (a boolean expression). If the condition is true, the
          corresponding block of code is executed. If false, the program moves
          to the next else if, and finally to the else, if present. For example:
        </p>
        <CodeDisplay
          code={`int temperature = 30;

if (temperature > 35) {
    System.out.println("It's too hot!");
} else if (temperature < 15) {
    System.out.println("It's cold outside.");
} else {
    System.out.println("The weather is moderate.");
}
`}
          language={"java"}
        ></CodeDisplay>
        <p>
          Try this code out yourself and change the value of temperature to see
          what results it has on the final printed line!
        </p>
        <h3 className="fw-bold">
          Relational Operators in Conditional Statements
        </h3>
        <p>
          The {"<"} and {">"} signs you saw earlier in the conditional
          statements are called relational operators. They compare values and
          produce a boolean result. Here are the most common relational
          operators:
        </p>
        <p>
          <strong>==</strong> - Checks if two values are equal
        </p>
        <p>
          <strong>!=</strong> - Checks if two values are not equal.
        </p>
        <p>
          <strong>{">"}</strong> - Checks if the value on the left is greater
          than the value on the right.
        </p>
        <p>
          <strong>{">="}</strong> - Checks if the value on the left is greater
          than or equal to the value on the right.
        </p>
        <p>
          <strong>{"<"}</strong> - Checks if the value on the left is less than
          the value on the right.
        </p>
        <p>
          <strong>{"<="}</strong> - Checks if the value on the left is less than
          or equal to the value on the right.
        </p>
        <h4 className="fw-bold">Logical Operators</h4>
        <p>
          In more complex conditionals, you may need to check multiple
          conditions at once. Logical operators allow for compound conditions:
        </p>
        <p>
          <strong>{"&&"} (AND)</strong> - Both conditions must be true for the
          overall condition to evaluate to true.
        </p>
        <p>
          <strong>{"||"} (OR)</strong> - Only one of the conditions must be true
          for the overall condition to evaluate to true.
        </p>
        <p>
          <strong>{"!"} (NOT)</strong> - Reverses the truth value of a
          condition.
        </p>
        <p>
          Here is an example, checking if a number is within a specific range:
        </p>
        <CodeDisplay
          code={`if (number > 10 && number < 20) {
    System.out.println("The number is between 10 and 20.");
}
`}
          language={"java"}
        ></CodeDisplay>
        <h3 className="fw-bold">Comparing Strings</h3>
        <p>
          Relational operators like == and != work well for numerical data types
          such as int, float, and double. However, comparing strings (text)
          requires a different approach.
        </p>
        <p>
          In Java, the .compareTo() method is used to compare two strings
          lexicographically. The method returns:
        </p>
        <ul>
          <li>
            A positive value if the first string is greater than the second
            string.
          </li>
          <li>A zero if the strings are equal.</li>
          <li>
            A negative value if the first string is less than the second string.
          </li>
        </ul>
        <p>For example:</p>
        <CodeDisplay
          code={`String A = "apple";
String B = "banana";

int result = A.compareTo(B);

if (result > 0) {
    System.out.println("A is greater than B");
} else if (result < 0) {
    System.out.println("A is less than B");
} else {
    System.out.println("A and B are equal");
}
`}
          language={"java"}
        ></CodeDisplay>
        <p>
          In this case, "apple" is lexicographically less than "banana", so
          result would be negative.
        </p>
        <h4 className="fw-bold">How are Strings Compared?</h4>
        <p>
          Strings are compared element by element, character by character.{" "}
          <strong>Lowercase characters</strong> are considered greater than
          uppercase ones (due to ASCII values, if you'd like to look those up).
          Characters that appear later in the alphabet are also considered
          'greater.' Finally, letters are considered greater than numbers.
        </p>
        <p>
          Besides .compareTo(), another method to check if two strings are
          exactly equal is using the .equals() method, which directly compares
          the content of two strings and returns a boolean:
        </p>
        <CodeDisplay
          code={`if (A.equals(B)) {
    System.out.println("The strings are equal.");
} else {
    System.out.println("The strings are not equal.");
}
`}
          language={"java"}
        ></CodeDisplay>
      </div>
      <NextPrev
        lastPath="/learn/java/dataStructures"
        nextPath="/learn/java/loops"
      ></NextPrev>
      <Footer></Footer>
    </>
  );
};

export default ConditionalsPage;

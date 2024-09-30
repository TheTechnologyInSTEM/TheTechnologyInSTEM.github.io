import React from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import CodeDisplay from "../../../components/CodeDisplay";
import NextPrev from "../../../components/NextPrev";

const LoopsPage = () => {
  return (
    <>
      <Header classes="pt-3 px-3"></Header>
      <div className="page-content pt-7">
        <h1>Loops</h1>
        <p>
          Iterations (loops) are a fundamental concept in programming that
          allows us to repeat a set of instructions multiple times. This
          repetition can be based on a specific number of iterations or can
          continue as long as a certain condition remains true.
        </p>
        <h3 className="fw-bold">Why Use Iterations?</h3>
        <p>
          Iterations are useful to programmers for two main reasons: they reduce
          the amount of code we need to write (and read!), and they help us
          transverse/go through Data Structures more easily.
        </p>
        <p>Java has two main types of loops: for and while.</p>
        <h3 className="fw-bold">For-Loops</h3>
        <p>
          A <strong>for loop</strong> is a control flow statement for specifying
          iteration that consists of three parts:
        </p>
        <CodeDisplay
          code={`for (initialization; condition; iteration) {
    // code to repeat here
}

// Initialization: Sets a starting point
// Condition: The loop continues to execute as long as this condition remains true
// Iteration: Specifies how the loop variable will change after each iteration
`}
          language={"java"}
        ></CodeDisplay>
        <p>
          <strong>Example A</strong>
        </p>
        <CodeDisplay
          code={`for (int i = 0; i < 5; i++) {
    // code 
}

// Initialization: int i = 0; (i starts at 0)
// Condition: i < 5; (runs as long as i < 5)
// Iteration: i++; (i increased by one after each iteration)

Note: This loop will execute 5 times (i = 0, 1, 2, 3, 4) // [!code focus]
`}
          language={"java"}
        ></CodeDisplay>
        <p>
          <strong>Example B</strong>
        </p>
        <CodeDisplay
          code={`for (int i = 10; i > 5; i -= 2) {
    // code 
}

Note: This loop will execute 3 times (i = 10, 8, 6) // [!code focus]
`}
          language={"java"}
        ></CodeDisplay>
        <p>
          <strong>Example C</strong>
        </p>
        <CodeDisplay
          code={`for (int i = 50; i > 5; i = i / 2) {
    // code 
}

Note: This loop will execute 4 times (i = 50, 25, 12, 6) // [!code focus]
`}
          language={"java"}
        ></CodeDisplay>
        <h4 className="fw-bold">Applications of For-Loops</h4>
        <p>
          <strong>Example 1: Basic Transversal through Data Structures</strong>
        </p>
        <p>
          Let’s say we want to set all values in an array of integers named
          grades to 100. This is how we can do it:
        </p>
        <CodeDisplay
          code={`grades = new int[30];

for (int i = 0; i < grades.length; i++) {
    grades[i] = 100;
}

// at the end of the code, all 30 elements in the grades array will equal 100!
`}
          language={"java"}
        ></CodeDisplay>
        <p>
          <strong>
            Example 2: Conditional Traversal through Data Structures
          </strong>
        </p>
        <p>Now, let’s say we want to set every odd-indexed grade to 100:</p>
        <CodeDisplay
          code={`for (int i = 0; i < grades.length; i++) {
    if (i % 2 == 1) {
        grades[i] = 100;
    }
}

// only the elements with odd indexes in the grades array will be set to 100
`}
          language={"java"}
        ></CodeDisplay>
        <hr />
        <h3 className="fw-bold">While-Loops</h3>
        <p>
          A while loop continues to execute a block of code as long as a
          specified condition remains true. We typically use while loops when we
          don't know in advance how many times we need to iterate. <br />
          <br /> The structure of a while loop is as follows:
        </p>
        <CodeDisplay
          code={`while (condition) {
    // code to be run
}

Make sure the condition eventually evaluates to false, or you'll create an infinite loop // [!code focus]
`}
          language={"java"}
        ></CodeDisplay>
        <p>
          One common application of a while loop is in user input scenarios,
          such as password verification. Here’s an example in pseudocode:
        </p>
        <CodeDisplay
          code={`while (!guessed_password.equals(real_password)) {
    // ASK THE USER TO SUBMIT ANOTHER RESPONSE
}

// will keep asking for the user to enter a password until they get it correct
`}
          language={"java"}
        ></CodeDisplay>
      </div>
      <NextPrev
        lastPath="/learn/java/conditionals"
        nextPath="/learn/java/methods"
      ></NextPrev>
      <Footer></Footer>
    </>
  );
};

export default LoopsPage;

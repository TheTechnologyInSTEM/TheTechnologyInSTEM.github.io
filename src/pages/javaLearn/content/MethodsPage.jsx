import React from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import CodeDisplay from "../../../components/CodeDisplay";
import NextPrev from "../../../components/NextPrev";
import { Code } from "lucide-react";

const MethodsPage = () => {
  return (
    <>
      <Header classes="pt-3 px-3"></Header>
      <div className="page-content pt-7">
        <h1>Methods</h1>
        <p>
          Methods (also known as functions) are fundamental building blocks in
          programming. They encapsulate code that performs specific actions,
          allowing for organized, reusable, and modular programming.
        </p>
        <h3 className="fw-bold">Syntax of Methods in Java</h3>
        <p>The general syntax for defining a method in Java is as follows:</p>
        <CodeDisplay
          code={`(access modifier) (return type) (name of function) (parameters) {
    // code here
}

// Access Modifier: Determines the visibility of the method
// Return Type: Specifies the type of value the method will return.
// Name of Function: A descriptive name that indicates the purpose of the method.
// Parameters: Variables (and their types) that provide input.
`}
          language={"java"}
        ></CodeDisplay>
        <h3 className="fw-bold">Understanding the Components</h3>
        <h4 className="fw-bold">Return Type</h4>
        <p>
          The return type indicates what kind of value the method will return to
          the caller. Common return types include:
        </p>
        <ul className="font-monospace">
          <li>String</li>
          <li>int</li>
          <li>double</li>
          <li>boolean</li>
        </ul>
        <p>
          If a method is declared with a return type other than void, it must
          return a value of that specific type.
        </p>
        <h4 className="fw-bold">Name of the Method</h4>
        <p>
          The name of the method should be descriptive and relevant to its
          functionality. For instance, a method that calculates the area of a
          rectangle might be named calculateArea.
        </p>
        <h4 className="fw-bold">Parameters</h4>
        <p>
          Parameters are inputs to the method that allow it to operate on
          different data. Each parameter has a data type (e.g., int, double,
          String) and an identifier. Parameters are only accessible within the
          method's scope.
        </p>
        <h3 className="fw-bold">Example A: Calculator Method</h3>
        <CodeDisplay
          code={`public double calculator(int decide, double one, double two) {
    double value = 0; 

    if (decide == 1) {
        value = one + two; 
    } else if (decide == 2) {
        value = one - two; 
    } else if (decide == 3) {
        value = one * two; 
    } else {
        value = one / two; 
    }

    return value;  
}

// name - calculator
// parameter names and types: int decide, double one, double two
// Variable Being Returned: value
// Type of the Variable Returned: double.
`}
          language={"java"}
        ></CodeDisplay>
        <h3 className="fw-bold">Example B: Grade Evaluation Method</h3>
        <CodeDisplay
          code={`public String gradesReceived(double grade) {
    if (grade >= 90.5) {
        return "Grade is an A"; 
    } else if (grade < 90.0 && grade >= 80.0) {
        return "Grade is a B"; 
    } else if (grade < 80.0 && grade >= 70.0) {
        return "Grade is a C"; 
    } else if (grade < 70.0 && grade >= 60.0) {
        return "Grade is a D"; 
    } else {
        return "Grade is an F"; 
    }
    return "Error Occurred";  
}

// Name of the Function: gradesReceived
// Parameter Names and Types: double grade
// Data Type Being Returned: String
`}
          language={"java"}
        ></CodeDisplay>
      </div>
      <NextPrev
        lastPath="/learn/java/loops"
        nextPath="/learn/java/oop"
      ></NextPrev>
      <Footer></Footer>
    </>
  );
};

export default MethodsPage;

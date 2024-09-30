import React from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import CodeDisplay from "../../../components/CodeDisplay";
import NextPrev from "../../../components/NextPrev";

const OOPPage = () => {
  return (
    <>
      <Header classes="pt-3 px-3"></Header>
      <div className="page-content pt-7">
        <h1>Object-Oriented Programming (OOP)</h1>
        <p>
          Object-Oriented Programming (OOP) is a programming paradigm that uses
          "objects" to design applications. Here’s why we use OOP:
        </p>
        <p className="fw-bold">1. Scalability</p>
        <p>
          OOP enables developers to build larger, more complex projects. By
          organizing code into classes and objects, it's easier to manage growth
          and adapt to changing requirements.
        </p>
        <p className="fw-bold">2. Better Organization and Flexibility</p>
        <p>
          OOP promotes better organization of code through encapsulation,
          allowing related data and methods to be bundled together. This
          enhances flexibility and makes code easier to understand and modify.
        </p>
        <p className="fw-bold">3. Code Reusability</p>
        <p>
          With OOP, existing classes can be reused in new projects or modified
          to create new functionality without rewriting code. This saves time
          and reduces errors.
        </p>
        <h3 className="fw-bold">Key Concepts in OOP</h3>
        <h4 className="fw-bold">Classes and Objects</h4>
        <p>
          Classes are blueprints for creating objects. They define attributes
          (data variables) and methods (functions).
        </p>
        <p>
          Objects are instances of classes. They represent specific
          implementations of the class.
        </p>
        <p>
          Accessor methods are used to retrieve or display the values of
          variables, while mutator methods are used to modify the values of
          variables.
        </p>
        <p>
          A constructor is a special method used for creating an object. The
          constructor has the same name as the class and initializes the
          object's attributes.
        </p>
        <h3 className="fw-bold">Inheritance</h3>
        <p>
          Inheritance allows a class (child class) to inherit attributes and
          methods from another class (parent class).
        </p>
        <ul>
          <li>
            <strong>Parent Class:</strong> The superclass from which properties
            and methods are inherited.
          </li>
          <li>
            <strong>Child Class:</strong> The subclass that inherits from the
            parent class.
          </li>
        </ul>
        <h4 className="fw-bold">Declaration</h4>
        <CodeDisplay
          code={`public class Parent {
    // code
}

public class Child extends Parent {
    // code
}
`}
          language={"java"}
        ></CodeDisplay>
        <h4 className="fw-bold">Constructors in Child Classes</h4>
        <p>
          When a child class has a constructor, it must also accommodate the
          parent class's constructor:
        </p>
        <CodeDisplay
          code={`public Child(String a, String b, int c, boolean d) {
    super(a, b, c); // Calls the parent class constructor
    randomBooleanVariable = d; // Sets additional value
}
`}
          language={"java"}
        ></CodeDisplay>
        <h4 className="fw-bold">Relationships</h4>
        <p>
          <strong>"Is-A" Relationship:</strong> Indicates that a child class is
          a type of parent class. Example: Car is a Vehicle.
        </p>
        <p>
          <strong>"Has-A" Relationship:</strong> Indicates that a class has an
          attribute. Example: Car has a Windshield Wiper.
        </p>
        <hr />
        <h3 className="fw-bold">Polymorphism</h3>
        <p>
          Polymorphism allows methods to do different things based on the object
          it is acting upon.
        </p>
        <p>
          <strong>Overloading</strong> occurs when two methods in the same class
          have the same name but different parameters. On the other hand,
          <strong> overriding</strong> allows a child class to provide a
          specific implementation of a method already defined in its parent
          class.
        </p>
        <CodeDisplay
          code={`// Overloading
public void display(int a) { /* code */ }
public void display(String b) { /* code */ }

// Overriding
public class Parent {
    public void display() { /* code */ }
}

public class Child extends Parent {
    public void display() { /* new code */ }
}
`}
          language={"java"}
        ></CodeDisplay>
        <h3 className="fw-bold">UML Diagrams</h3>
        <p>
          UML (Unified Modeling Language) diagrams are useful for visualizing
          the structure and relationships in OOP. They typically include:
        </p>
        <ul>
          <li>Classes/Objects</li>
          <li>Variables</li>
          <li>Methods</li>
          <li>Accessibility (public, private, protected)</li>
          <li>Relationships (Is-A, Has-A)</li>
        </ul>
        <h3 className="fw-bold">Accessibility Modifiers</h3>
        <p>
          Java provides several accessibility modifiers for methods and
          variables:
        </p>
        <ol>
          <li>
            <strong>static:</strong> Shared among all instances. A change
            affects all instances.
          </li>
          <li>
            <strong>private:</strong> Accessible only within the same class.
            Useful for encapsulating data.
          </li>
          <li>
            <strong>public:</strong> Accessible from any class or object.
          </li>
          <li>
            <strong>protected:</strong> Accessible only by the parent class and
            its subclasses.
          </li>
        </ol>
      </div>
      <NextPrev
        lastPath="/learn/java/methods"
        nextPath="/learn/java"
      ></NextPrev>
      <Footer></Footer>
    </>
  );
};

export default OOPPage;

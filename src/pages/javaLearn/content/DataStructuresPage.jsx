import React from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import CodeDisplay from "../../../components/CodeDisplay";
import NextPrev from "../../../components/NextPrev";

const DataStructuresPage = () => {
  return (
    <>
      <Header classes="pt-3 px-3"></Header>
      <div className="page-content pt-7">
        <h1>Data Structures</h1>
        <h3 className="fw-bold">Arrays</h3>
        <h6 className="fw-bold">One-Dimensional Array Example</h6>
        <p>Imagine a series of slots where each slot holds a piece of data:</p>
        <CodeDisplay
          code={`[ slot0 | slot1 | slot2 | slot3 | slot4 | slot5 ]
`}
        ></CodeDisplay>
        <h4 className="fw-bold">Important Rules</h4>
        <p>
          <strong>Fixed Size:</strong> Once defined, the size of the array
          cannot change. For example, an array of size 10 cannot be modified to
          hold 11 or more elements.
        </p>
        <p>
          <strong>Single Data Type:</strong> Arrays can only hold one type of
          variable. An integer array can only store integers, while a double
          array can store integers as well, but not vice versa.
        </p>
        <p>
          {" "}
          <strong>Indexing Starts at 0:</strong> The first slot is index 0.
          Thus, for an array with 6 slots, the last index is 5. Attempting to
          access an index that doesn’t exist results in an error.
        </p>

        <h4 className="fw-bold">Declaration</h4>
        <p>To declare an array, use the following format:</p>
        <CodeDisplay
          code={`//(TYPE OF DATA)[] (NAME OF THE ARRAY);
int[] digits; 
boolean[] true_or_falses;
String[] names;
`}
          language={"java"}
        ></CodeDisplay>
        <h4 className="fw-bold">Initialization</h4>
        <p>You can initialize an array in two ways:</p>
        <p>Using the 'new' keyword:</p>
        <CodeDisplay
          code={`String[] names = new String[10]; // Initializes to empty strings
`}
          language={"java"}
        ></CodeDisplay>
        <p>Directly with values:</p>
        <CodeDisplay
          code={`String[] names = {"Raj", "Kaiyo", "Spongebob"};
`}
          language={"java"}
        ></CodeDisplay>

        <h4 className="fw-bold">Modifying Arrays</h4>
        <p>
          To change the content of an array, you can assign new values to
          specific indices:
        </p>
        <CodeDisplay
          code={`names[0] = "Jack";
names[1] = "Jane";
names[2] = "Jill";
`}
          language={"java"}
        ></CodeDisplay>
        <h4 className="fw-bold">Getting the Length of an Array</h4>
        <CodeDisplay
          code={`int length = names.length; // Useful for determining the last index
`}
          language={"java"}
        ></CodeDisplay>
        <hr></hr>
        <h3 className="fw-bold">ArrayLists</h3>
        <p>
          There are a few key differences between Arrays and ArrayLists. First
          of all, ArrayLists are part of the Java utilities library. That means
          that whenever you want to use it, you have to start your code with
          this:
        </p>
        <CodeDisplay
          code={`import java.util.ArrayList;
`}
          language={"java"}
        ></CodeDisplay>
        <p>
          Second, ArrayLists can hold multiple different types of variables and
          can change size dynamically, unlike Arrays. Essentially, you should
          use ArrayLists whenver the size of the data you are working with might
          vary.
        </p>
        <h4 className="fw-bold">Declaring an ArrayList</h4>
        <p>
          Aside from the previously mentioned 'import' line, this is the code
          you need to use to declare an ArrayList:
        </p>
        <CodeDisplay
          code={`//ArrayList<(Data Type)> (NAME OF THE ARRAYLIST);

ArrayList<String> names;
ArrayList<Integer> numbers;
ArrayList<Boolean> true_or_false;

ArrayList<> anyType;
Tip: You don't need to specify a type when declaring an ArrayList! // [!code focus]
`}
          language={"java"}
        ></CodeDisplay>
        <h4 className="fw-bold">Initializing an ArrayList</h4>
        <CodeDisplay
          code={`ArrayList<String> names = new ArrayList<String>();
ArrayList<> names = new ArrayList<>();
`}
          language={"java"}
        ></CodeDisplay>
        <h4 className="fw-bold">ArrayList Methods</h4>
        <p>
          We'll now go over the methods you can use when using ArrayLists. These
          include adding elements, removing elements, getting elements, setting
          elements, and getting the size of the ArrayList.
        </p>
        <CodeDisplay
          code={`// Adding
names.add("NewName"); // Adds to the end
names.add(index, "NewName"); // Inserts at specified index (should be a number!)

// Removing
names.remove(index); // Removes the value at the specified index

// Getting Elements
String value = names.get(index); // Retrieves value at index

// Setting Elements
names.set(index, "NewValue"); // Changes value at index

// Getting Size
int size = names.size(); // Returns the number of elements

`}
          language={"java"}
        ></CodeDisplay>
        <hr />
        <h3 className="fw-bold">Linked Lists</h3>
        <p>
          Think of LinkedLists as a caterpillar—each segment (Node) connects to
          the next and previous:
        </p>
        <CodeDisplay
          code={`[ A <-> B <-> C <-> D ]
`}
        ></CodeDisplay>
        <p>
          Each Node contains a pointer to the next element, a pointer to the
          previous element, and an actual value. The first node's previous
          pointer is NULL, and the last node's next pointer is also NULL.
        </p>
        <p>
          You should use LinkedLists whenever you need frequent insertions or
          deletions without needing to shift other elements.
        </p>
        <h4 className="fw-bold">Methods</h4>
        <p>
          The methods we'll cover using LinkedLists include adding elements,
          removing elements, getting elements, setting elements, getting the
          size of the LinkedList, and a few special methods called peek() and
          poll().
        </p>
        <CodeDisplay
          code={`// Adding
linkedList.add(value); // Adds to the end
linkedList.add(index, value); // Inserts at specified index

// Removing
linkedList.remove(index); // Removes at specified index
linkedList.remove(objectValue); // Removes by object value

// Getting
linkedList.get(index); // Retrieves value at index

// Setting
linkedList.set(index, newValue); // Changes value at index

// Getting Size
int size = linkedList.size(); // Returns the number of elements

// Special Methods
linkedList.peek(); // Returns the first element
linkedList.poll(); // Returns and removes the first element
`}
          language={"java"}
        ></CodeDisplay>
        <hr />
        <h3 className="fw-bold">Stacks and Queues</h3>
        <p>
          Stacks and queues are common applications of both ArrayLists and
          LinkedLists.
        </p>
        <p>
          When using stack rules, objects/data are only modified at the top of
          the stack. You can pop elements out of the top of the stack, or push
          elements onto the top of the stack.
        </p>
        <p>
          When using queue rules, objects/data are only added at the rear of the
          data structure, while objects/data are only deleted at the front of
          the data structure.
        </p>
      </div>
      <NextPrev
        lastPath="/learn/java/operators"
        nextPath="/learn/java/conditionals"
      ></NextPrev>
      <Footer></Footer>
    </>
  );
};

export default DataStructuresPage;

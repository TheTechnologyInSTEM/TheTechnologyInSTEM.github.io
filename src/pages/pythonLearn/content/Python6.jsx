import React from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import CodeDisplay from "../../../components/CodeDisplay";
import NextPrev from "../../../components/NextPrev";

const Python6 = () => {
  return (
    <>
      <Header classes="pt-3 px-3"></Header>
      <div className="page-content pt-7">
        <h1 className="fw-bold">Lists</h1>
        <h3 className="fw-bold">Solution - Custom Colors</h3>
        <CodeDisplay
          code={`import turtle

length = int(input("How long would you like the line to be?"))
color = input("What color should the line be?") #now we grab the color from the user. we don't have to use int() because color takes a string as an argument! (remember, when we put in colors to .color() we always used quotation marks before!)

turtle.color(color)
turtle.forward(length)

turtle.mainloop()
`}
          language={"python"}
        ></CodeDisplay>
        <h3 className="fw-bold">Lists</h3>
        <p>
          Lists are kind of like variables, but they store multiple values.
          Let’s see what they look like:
        </p>
        <CodeDisplay
          code={`#list_name = [value0, value1, value2, value3]

pets = ["Dog", "Cat", "Bird"]
favorite_numbers = [1, 2, 3, 5, 7, 9]
`}
          language={"python"}
        ></CodeDisplay>
        <p>
          We can still access individual values of lists. Each value is assigned
          an “index” that we can use to access it, like this:
        </p>
        <CodeDisplay
          code={`pets = ["Dog", "Cat", "Bird"]
favorite_pet = pets[1] #"Cat"
`}
          language={"python"}
        ></CodeDisplay>
        <p>
          You’ll notice that even though we accessed the first item of the list,
          it gave us the second item. Why is that? Well, lists actually start
          with the “zeroth” element. So, if we wanted to access “Dog”, then we
          would need to use pets[0], like this:
        </p>
        <CodeDisplay
          code={`pets = ["Dog", "Cat", "Bird"]
favorite_pet = pets[0] #"Dog"
`}
          language={"python"}
        ></CodeDisplay>
        <p>
          You can also get the length of a list, using the len() function, which
          is pretty useful if you are trying to get the last element of a long
          list:
        </p>
        <CodeDisplay
          code={`favorite_numbers = [1, 2, 3, 5, 7, 9]

number = favorite_numbers[len(favorite_numbers) - 1] #9
`}
          language={"python"}
        ></CodeDisplay>{" "}
        <p>
          len() will return the numbers of items in a list. So, let’s say our
          list is 100 items long. len() will return 100, but the index of the
          last item will be this minus one (since we start at 0). So, if we want
          to get the last item in a list, we use len(list) - 1. You can also
          change different elements of a list, like this:
        </p>
        <CodeDisplay
          code={`favorite_numbers = [1, 2, 3, 5, 7, 9]
favorite_numbers[2] = 11 #3 -> 11
`}
          language={"python"}
        ></CodeDisplay>
        <p>Or add elements to the end of a list using append():</p>
        <CodeDisplay
          code={`favorite_numbers = [1, 2, 3, 5, 7, 9]
favorite_numbers.append(11) #new list looks like -> [1, 2, 3, 5, 7, 9, 11]
`}
          language={"python"}
        ></CodeDisplay>
        <p>You can also remove specific items:</p>
        <CodeDisplay
          code={`favorite_numbers = [1, 2, 3, 5, 7, 9]
favorite_numbers.remove(3) #new list looks like -> [1, 2, 5, 7, 9]
`}
          language={"python"}
        ></CodeDisplay>
        <p>Or insert new items into specific spots:</p>
        <CodeDisplay
          code={`favorite_numbers = [1, 2, 3, 5, 7, 9]
favorite_numbers.insert(1, 1.5) #new list -> [1, 1.5, 2, 3, 5, 7, 9]
favorite_numbers.insert(4, 14) #new list -> [1, 1.5, 2, 3, 14, 5, 7, 9]
`}
          language={"python"}
        ></CodeDisplay>
      </div>
      <NextPrev
        lastPath="/learn/python/lesson-5"
        nextPath="/learn/python/lesson-7"
      ></NextPrev>
      <Footer></Footer>
    </>
  );
};

export default Python6;

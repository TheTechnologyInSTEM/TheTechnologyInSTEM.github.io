import React from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Question from "../../../components/Question";
import NextPrev from "../../../components/NextPrev";

const VariableQuestions = () => {
  return (
    <>
      <Header classes="pt-3 px-3"></Header>
      <div className="pt-7 page-content">
        <Question
          question="Which of the following is an integer?"
          questionNo="javaVar2"
          options={[
            {
              text: "1",
              explanation: "Correct!",
            },
            {
              text: "1.0",
              explanation: "Incorrect. Try again!",
            },
            {
              text: `"Hello"`,
              explanation: "Incorrect. Try again!",
            },
            {
              text: "True",
              explanation: "Incorrect. Try again!",
            },
          ]}
          correctIndex={0}
        />
        <Question
          question="Which of the following is NOT an integer?"
          questionNo="javaVar3"
          options={[
            {
              text: "113",
              explanation: "Incorrect. Try again!",
            },
            {
              text: "25",
              explanation: "Incorrect. Try again!",
            },
            {
              text: `31334`,
              explanation: "Incorrect. Try again!",
            },
            {
              text: "4.0",
              explanation: "Correct!",
            },
          ]}
          correctIndex={3}
        />
        <Question
          question="Which of the following is NOT a double?"
          questionNo="javaVar4"
          options={[
            {
              text: "1",
              explanation: "Incorrect. Try again!",
            },
            {
              text: "1.0",
              explanation: "Incorrect. Try again!",
            },
            {
              text: `3.7`,
              explanation: "Incorrect. Try again!",
            },
            {
              text: "All of the above are doubles",
              explanation: "Correct!",
            },
          ]}
          correctIndex={3}
        />
        <Question
          question="Which of the following is a string?"
          questionNo="javaVar5"
          options={[
            {
              text: "1",
              explanation: "Incorrect. Try again!",
            },
            {
              text: `"1"`,
              explanation: "Correct!",
            },
            {
              text: `True`,
              explanation: "Incorrect. Try again!",
            },
            {
              text: "1.0",
              explanation: "Incorrect. Try again!",
            },
          ]}
          correctIndex={1}
        />
        <Question
          question="What is the data type of this value: True?"
          questionNo="javaVar6"
          options={[
            {
              text: "Boolean",
              explanation: "Correct!",
            },
            {
              text: "String",
              explanation: "Incorrect. Try again!",
            },
            {
              text: "Integer",
              explanation: "Incorrect. Try again!",
            },
            {
              text: "Double",
              explanation: "Incorrect. Try again!",
            },
          ]}
          correctIndex={0}
        />
        <Question
          question='What is the data type of this value: "True"?'
          questionNo="javaVar7"
          options={[
            {
              text: "Boolean",
              explanation: "Incorrect. Try again!",
            },
            {
              text: "String",
              explanation: "Correct!",
            },
            {
              text: "Integer",
              explanation: "Incorrect. Try again!",
            },
            {
              text: "Double",
              explanation: "Incorrect. Try again!",
            },
          ]}
          correctIndex={1}
        />
        <Question
          question={`int one = 4; 
            int two = 5;
            What is the result of (one * two)?`}
          questionNo="javaVar8"
          options={[
            {
              text: "20",
              explanation: "Correct!",
            },
            {
              text: "2",
              explanation: "Incorrect. Try again!",
            },
            {
              text: "Syntax Error",
              explanation: "Incorrect. Try again!",
            },
            {
              text: "45",
              explanation: "Incorrect. Try again!",
            },
          ]}
          correctIndex={0}
        />
        <Question
          question="int one = 4; int two = 5; What is the result of (one / two)?"
          questionNo="javaVar9"
          options={[
            {
              text: "0",
              explanation: "Correct! Integer division returns 0.",
            },
            {
              text: ".5",
              explanation:
                "Incorrect. Try again! In integer division, fractional results are truncated.",
            },
            {
              text: "Syntax Error",
              explanation: "Incorrect. Try again!",
            },
            {
              text: ".8",
              explanation:
                "Incorrect. Try again! Integer division doesn't produce decimals.",
            },
          ]}
          correctIndex={0}
        />
        <Question
          question="double one = 4; int two = 5; What is the result of (one / two)?"
          questionNo="javaVar10"
          options={[
            {
              text: "0",
              explanation:
                "Incorrect. Try again! Division of a double and int does not return an integer.",
            },
            {
              text: ".5",
              explanation:
                "Incorrect. Try again! 4 divided by 5 does not equal .5.",
            },
            {
              text: "Syntax Error",
              explanation:
                "Incorrect. Try again! There is no syntax error in this division.",
            },
            {
              text: ".8",
              explanation: "Correct! Dividing 4.0 by 5 results in .8.",
            },
          ]}
          correctIndex={3}
        />
        <Question
          question="What is the value of (2 + 1)?"
          questionNo="javaVar11"
          options={[
            {
              text: "21",
              explanation:
                "Incorrect. Try again! This is an arithmetic operation, not string concatenation.",
            },
            {
              text: "3",
              explanation: "Correct! 2 + 1 equals 3.",
            },
            {
              text: "Syntax Error",
              explanation: "Incorrect. Try again! This is valid syntax.",
            },
            {
              text: "2121",
              explanation:
                "Incorrect. Try again! This is not a string concatenation.",
            },
          ]}
          correctIndex={1}
        />
        <Question
          question='What is the value of ("2" + "1")?'
          questionNo="javaVar12"
          options={[
            {
              text: "21",
              explanation: "Correct! String concatenation results in '21'.",
            },
            {
              text: "3",
              explanation:
                "Incorrect. Try again! This is string concatenation, not arithmetic addition.",
            },
            {
              text: "Syntax Error",
              explanation: "Incorrect. Try again! The syntax is valid.",
            },
            {
              text: "2121",
              explanation:
                "Incorrect. Try again! The result is '21', not '2121'.",
            },
          ]}
          correctIndex={0}
        />
        <Question
          question='What is the value of ("2.0" + 1)?'
          questionNo="javaVar13"
          options={[
            {
              text: "3.0",
              explanation:
                "Incorrect. Try again! This is string concatenation.",
            },
            {
              text: "2.01",
              explanation: "Incorrect. Try again! The result is not 2.01.",
            },
            {
              text: "Syntax Error",
              explanation:
                "Correct! This expression is not valid because you cannot directly concatenate a string and an integer.",
            },
            {
              text: "3",
              explanation: "Incorrect. Try again! The result does not equal 3.",
            },
          ]}
          correctIndex={2}
        />

        <Question
          question='How do you fix this expression to make it true?\n"2.0" + 1 = 2.01'
          questionNo="javaVar14"
          options={[
            {
              text: "Change 1 to '1'",
              explanation:
                "Correct! This would make the expression true as it concatenates to '2.01'.",
            },
            {
              text: 'Change "2.0" to 2.0',
              explanation:
                "Incorrect. Try again! This would result in 3.0, not 2.01.",
            },
            {
              text: 'Change "2.0" to 2',
              explanation:
                "Incorrect. Try again! This would result in 3, not 2.01.",
            },
            {
              text: "This expression is not possible",
              explanation:
                "Incorrect. Try again! The expression can be fixed by changing the value.",
            },
          ]}
          correctIndex={0}
        />
      </div>
      <NextPrev
        lastPath={"/learn/java/variables"}
        nextPath={"/learn/java/operators"}
      ></NextPrev>
      <Footer></Footer>
    </>
  );
};

export default VariableQuestions;

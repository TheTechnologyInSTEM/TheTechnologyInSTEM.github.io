import Header from "../components/Header";
import Question from "../components/Question";
import CodeDisplay from "../components/CodeDisplay";

export const LearnPage = () => {
  return (
    <>
      <Header classes="pt-3 px-3"></Header>
      <div className="text-center pt-7">
        <CodeDisplay
          code={`function Button() {
  return (
    <button type="button" className="btn btn-primary">
      Base Class // [!code ++]
    </button> // [!code highlight]
This is an example of an in-code comment // [!code focus]
  );
}

export default Button; // [!code --]
`}
          language="javascript"
        />
        <Question
          question="Question 1?"
          questionNo="1"
          options={[
            { text: "Answer 1", explanation: "Explanation 1" },
            { text: "Answer 2", explanation: "Explanation 2" },
            { text: "Answer 3", explanation: "Explanation 3" },
            { text: "Answer 4", explanation: "Explanation 4" },
          ]}
          correctIndex={1}
        ></Question>
        <Question
          question="Question 2?"
          questionNo="2"
          options={[
            { text: "Answer 5", explanation: "Explanation 5" },
            { text: "Answer 6", explanation: "Explanation 6" },
            { text: "Answer 7", explanation: "Explanation 7" },
            { text: "Answer 8", explanation: "Explanation 8" },
          ]}
          correctIndex={3}
        ></Question>
      </div>
    </>
  );
};

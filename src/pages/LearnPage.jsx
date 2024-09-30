import Header from "../components/Header";
import Question from "../components/Question";
import CodeDisplay from "../components/CodeDisplay";

export const LearnPage = () => {
  return (
    <>
      <Header classes="pt-3 px-3"></Header>
      <div className="page-content pt-7">
        <ul>
          <li>
            <a className="link link-primary" href="/learn/java">
              Java
            </a>
          </li>
          <li>
            <a className="link link-primary" href="/learn/python">
              Python
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

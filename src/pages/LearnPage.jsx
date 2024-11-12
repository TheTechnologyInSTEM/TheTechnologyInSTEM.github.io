import Header from "../components/Header";
import Question from "../components/Question";
import CodeDisplay from "../components/CodeDisplay";

export const LearnPage = () => {
  return (
    <>
      <Header classes="pt-3 px-3"></Header>
      <div className="page-content pt-7">
        <h1 className="fw-bold">Learn</h1>
        <p>
          If you want to start or resume coding, our resources provide the
          perfect starting point for beginners and returners alike! <br />{" "}
          <br />
          Just pick a language and start learning!
        </p>
        <h3 className="fw-bold">Recommended for Beginners: Python</h3>
        <p>
          Python is an easy-to-learn and easy-to-read language that offers lots
          of versatility and power! Consider starting here if you're completely
          new to programming, or if you've only done a little programming in the
          past.
        </p>
        <div className="text-center">
          <a href="/learn/python" className="btn btn-primary">
            Learn Python
          </a>
        </div>
        <h3 className="fw-bold">Intermediate: Java</h3>
        <p>
          Java is a powerful language for those interested in building apps,
          especially for Android applications! Consider starting here if you
          already have some experience and familiarity with coding concepts, and
          want to expand your toolset!
        </p>
        <div className="text-center">
          <a href="/learn/java" className="btn btn-primary">
            Learn Java
          </a>
        </div>
        <h3 className="fw-bold">Coming soon: C++</h3>
        <p>
          C++ is a more complex, versatile language that allows for direct
          memory manipulation. In other words, you can control exactly how much
          of a computer's resources you allocate to each task manually. This
          makes C++ an especially useful language for those creating
          programmings for hardware with limited performance. Consider learning
          C++ if you're already familiar with basic coding concepts!
        </p>
      </div>
    </>
  );
};

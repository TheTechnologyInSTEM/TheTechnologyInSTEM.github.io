import React from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import NextPrev from "../../../components/NextPrev";

const Python1 = () => {
  return (
    <>
      <Header classes="pt-3 px-3"></Header>
      <div className="text-center pt-7 page-content">
        <h1>Python - Introduction</h1>
        <h3 className="fw-bold">What is Python?</h3>
        <p>
          Python is a powerful programming language that was designed with
          readability in mind. Essentially, it's a programming language thats
          written to make as much sense to a normal human as possible! This
          makes it a powerful tool for learning how to code :D
        </p>
        <p>
          Hopefully, by the end of this short course, you should know the very
          basics of Python, and you should be able to start making your very own
          computer programs with Python!
        </p>
        <h3 className="fw-bold">Getting Python Set Up on your Computer</h3>
        <p>
          If you want to skip this step, you can use{" "}
          <a href="https://pythonsandbox.com/turtle" target="blank">
            this online editor
          </a>{" "}
          instead for now. However, it's recommended you install Python and an
          IDE on your computer just to make things easier in the future!
        </p>
        <h4 className="fw-bold">Installing Python</h4>
        <p>
          The first thing we have to do is install Python on our computers. To
          do this, go to the{" "}
          <a href="https://www.python.org/downloads" target="blank">
            official Python Website
          </a>
          . Click the yellow button labeled "Download Python (version number)",
          open the installer file, and go through the installation prompts.
        </p>
        <p>Make sure that "Add python.exe to PATH" is checked!</p>
        <h4 className="fw-bold">Installing VS Code</h4>
        <p>
          Go to the{" "}
          <a href="https://code.visualstudio.com/" target="blank">
            official VS Code Website
          </a>{" "}
          and install the appropriate version for your operating system using
          the blue button in the center of the screen.
        </p>
        <p>
          Go through the installation process, and make sure to check "Add to
          PATH!"
        </p>
        <p>
          Once it's installed open it up! Click on the icon on the left with
          four squares to open your extensions menu. Type "Python" into the
          search bar, and install the first extension that comes up (it should
          have Microsoft lsited as the developer).
        </p>
      </div>
      <NextPrev
        lastPath={"/learn/python"}
        nextPath={"/learn/python/lesson-2"}
      ></NextPrev>
      <Footer></Footer>
    </>
  );
};

export default Python1;

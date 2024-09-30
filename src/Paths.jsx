import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { LearnPage } from "./pages/LearnPage";
import { ProgramPage } from "./pages/ProgramPage";
import JavaPage from "./pages/javaLearn/JavaPage";
import PythonVideoPage from "./pages/PythonVideoPage";
import PythonPage from "./pages/pythonLearn/PythonPage";
import VariablePage from "./pages/javaLearn/content/VariablePage";
import VariableQuestions from "./pages/javaLearn/questions/VariableQuestions";
import OperatorsPage from "./pages/javaLearn/content/OperatorsPage";
import Python1 from "./pages/pythonLearn/content/Python1";
import Python2 from "./pages/pythonLearn/content/Python2";
import DataStructuresPage from "./pages/javaLearn/content/DataStructuresPage";
import ConditionalsPage from "./pages/javaLearn/content/ConditionalsPage";
import LoopsPage from "./pages/javaLearn/content/LoopsPage";
import MethodsPage from "./pages/javaLearn/content/MethodsPage";

export const Paths = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="learn" element={<LearnPage />} />
          <Route path="community" element={<ProgramPage />} />
          <Route path="learn/python" element={<PythonPage />} />
          <Route path="learn/java" element={<JavaPage />} />
          <Route path="learn/cplusplus" element={<ProgramPage />} />
          <Route path="learn/python/videos" element={<PythonVideoPage />} />
          <Route path="learn/java/variables" element={<VariablePage />} />
          <Route
            path="learn/java/variableQuestions"
            element={<VariableQuestions />}
          />
          <Route
            path="learn/java/operators"
            element={<OperatorsPage />}
          ></Route>
          <Route
            path="learn/python/lesson-1"
            element={<Python1></Python1>}
          ></Route>
        </Route>
        <Route
          path="learn/python/lesson-2"
          element={<Python2></Python2>}
        ></Route>
        <Route
          path="learn/java/dataStructures"
          element={<DataStructuresPage></DataStructuresPage>}
        ></Route>
        <Route
          path="learn/java/conditionals"
          element={<ConditionalsPage></ConditionalsPage>}
        ></Route>
        <Route
          path="learn/java/loops"
          element={<LoopsPage></LoopsPage>}
        ></Route>
        <Route
          path="learn/java/methods"
          element={<MethodsPage></MethodsPage>}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

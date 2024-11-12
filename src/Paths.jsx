import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { LearnPage } from "./pages/LearnPage";
import { ProgramPage } from "./pages/ProgramPage";
import JavaPage from "./pages/javaLearn/JavaPage";
import PythonPage from "./pages/pythonLearn/PythonPage";
import VariablePage from "./pages/javaLearn/content/VariablePage";
import VariableQuestions from "./pages/javaLearn/questions/VariableQuestions";
import OperatorsPage from "./pages/javaLearn/content/OperatorsPage";
import DataStructuresPage from "./pages/javaLearn/content/DataStructuresPage";
import ConditionalsPage from "./pages/javaLearn/content/ConditionalsPage";
import LoopsPage from "./pages/javaLearn/content/LoopsPage";
import MethodsPage from "./pages/javaLearn/content/MethodsPage";
import OOPPage from "./pages/javaLearn/content/OOPPage";
import {
  Python1,
  Python2,
  Python3,
  Python4,
  Python5,
  Python6,
  Python7,
  Python8,
  Python9,
} from "./pages/pythonLearn/content/exporter";
import CPlusPage from "./pages/cPlusLearn/CPlusPage";

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
          <Route path="learn/cplusplus" element={<CPlusPage />} />
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
          path="learn/python/lesson-3"
          element={<Python3></Python3>}
        ></Route>
        <Route
          path="learn/python/lesson-4"
          element={<Python4></Python4>}
        ></Route>
        <Route
          path="learn/python/lesson-5"
          element={<Python5></Python5>}
        ></Route>
        <Route
          path="learn/python/lesson-6"
          element={<Python6></Python6>}
        ></Route>
        <Route
          path="learn/python/lesson-7"
          element={<Python7></Python7>}
        ></Route>
        <Route
          path="learn/python/lesson-8"
          element={<Python8></Python8>}
        ></Route>
        <Route
          path="learn/python/lesson-9"
          element={<Python9></Python9>}
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
        <Route path="learn/java/oop" element={<OOPPage></OOPPage>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

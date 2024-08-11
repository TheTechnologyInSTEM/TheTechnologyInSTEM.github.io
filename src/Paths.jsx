import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { LearnPage } from "./pages/LearnPage";
import { ProgramPage } from "./pages/ProgramPage";
import JavaPage from "./pages/JavaPage";
import PythonVideoPage from "./pages/PythonVideoPage";
import PythonPage from "./pages/PythonPage";

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
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

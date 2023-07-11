import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import PageNotFound from "./pages/PageNotFound";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Notes from "./pages/Notes";
import AppLayout from "./ui/AppLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Navigate replace to="home" />} />;
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="*" element={<PageNotFound />} />;
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

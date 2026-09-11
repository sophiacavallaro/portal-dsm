import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Alunos from "./pages/Alunos";
import Cursos from "./pages/Cursos";
import Sobre from "./pages/Sobre";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="app-layout">
        <Navbar />
        <div className="app-body">
          <Sidebar />
          <div className="app-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/alunos" element={<Alunos />} />
              <Route path="/cursos" element={<Cursos />} />
              <Route path="/sobre" element={<Sobre />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
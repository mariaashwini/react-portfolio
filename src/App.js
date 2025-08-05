import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import About from "./components/About";
import Layout from "./components/Layout";

import "./output.css";

function App() {
  return (
    <BrowserRouter basename="/react-portfolio">
      <Routes>
        {/* <Route path="/" element={<Layout><Home /></Layout>} /> */}
        <Route path="/" element={<Navigate to="home" replace />} />
        <Route path="/home" element={<Layout><Home /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/tech-stack" element={<Layout><TechStack /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="/resume" element={<Layout><Resume /></Layout>} />
        <Route path="/projects" element={<Layout><Projects /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import {BrowserRouter, Routes, Route} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import About from "./components/About";
import "./output.css";

function App() {
  return (
    <BrowserRouter basename="/react-portfolio">
         <Sidebar />
         <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/home" element={<Home/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/tech-stack" element={<TechStack/>}/>
<Route path="/contact" element={<Contact/>}/>
<Route path="/resume" element={<Resume/>}/>
<Route path="/projects" element={<Projects/>}/>

          </Routes>

    </BrowserRouter>

  );
}

export default App;

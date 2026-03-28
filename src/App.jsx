import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './component/About';
import Contact from './component/Contact';
import Hero from "./component/Hero";
import Home from './component/Home';
import Navbar from './component/navbar';
import Project from './component/Project';
import Skill from './component/Skill';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/skills" element={<Skill />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
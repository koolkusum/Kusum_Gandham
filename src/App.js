import React from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";
import Education from "./components/Education";
import Experience from "./components/Experience";

export default function App() {
  return  (
    
    <main className="text-gray-400 bg-gray-900 body-font">

      
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education/>
      <Timeline />
    </main>
  );
}
import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";

import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [active, setActive] = useState("About");

  const handleNav = (section) => {
    // Map nav label → section id
    const idMap = {
      About: "about",
      Skills: "skills",
      Projects: "projects",
      Achievements: "achievements",
      Contact: "contact",
    };
    document.getElementById(idMap[section])?.scrollIntoView({ behavior: "smooth" });
    setActive(section);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      <Navbar active={active} onNav={handleNav} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-20">
        <Hero onNav={handleNav} />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
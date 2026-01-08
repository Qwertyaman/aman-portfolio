import React, { useState } from "react";
import { Mail, Linkedin, Github, ExternalLink, Menu, X } from "lucide-react";
import NavBar from "./components/NavBar";
import About from "./pages/about";
import Projects from "./pages/projects";
import Skills from "./pages/Skills";
import Achievement from "./pages/Achievement";
import Footer from "./components/Footer";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };
  return (
    <>
      <NavBar
        scrollToSection={scrollToSection}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <About />
      <Projects />
      <Skills />
      <Achievement />
      <Footer />
    </>
  );
}

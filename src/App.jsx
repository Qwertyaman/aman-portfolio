import React, { useState } from "react";
import { Mail, Linkedin, Github, ExternalLink, Menu, X } from "lucide-react";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Details from "./pages/Details";
import Projects from "./pages/Projects";
import Achievement from "./pages/Achievement";
import Footer from "./components/Footer";
import Contact from "./pages/contact";

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
      <Details/>
      <Projects />
      <Achievement />
      <Contact/>
      <Footer />
    </>
  );
}

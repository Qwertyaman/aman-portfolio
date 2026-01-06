import React, { useState } from "react";
import { Mail, Linkedin, Github, ExternalLink, Menu, X } from "lucide-react";
import NavBar from "./components/NavBar";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const projects = [
    {
      title: "VartalAPP - Indian Sign Language Translator",
      description:
        "Language translator application for specially-abled individuals with Sign↔Text↔Voice conversion features.",
      role: "Backend Developer",
      tech: ["Python", "Machine Learning", "NLP", "Flask"],
      github: "#",
      demo: "#",
    },
    {
      title: "BYE VIBHISHAN - Insider Threat Detection",
      description:
        "Security web application detecting insider threats using Random Forest ML model with real-time monitoring dashboard.",
      role: "Frontend Development & Model Training",
      tech: ["React.js", "Random Forest", "Scikit-learn", "MongoDB"],
      github: "#",
      demo: "#",
    },
    {
      title: "Sales Prediction System",
      description:
        "ML-powered sales forecasting application with interactive React dashboard for real-time predictions and data visualization.",
      role: "Full Stack Developer (Internship Project)",
      tech: ["Python", "Pandas", "NumPy", "React.js", "Scikit-learn"],
      github: "#",
      demo: "#",
    },
  ];

  const skills = {
    "AI & Machine Learning": [
      "TensorFlow",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "OpenCV",
      "NLP",
      "Transformers",
    ],
    "Web Development": ["React.js", "Flask", "HTML/CSS", "JavaScript"],
    Programming: ["Python", "C++", "Java", "C"],
    "Tools & Platforms": ["GitHub", "Power BI", "Jupyter", "MySQL", "MongoDB"],
  };

  const achievements = [
    "1st Position - Gen AI Hackathon (National Level, 2024)",
    "1st Position - Technicia 2025 Ideathon (National Level)",
    "Published Book Chapter - AI/ML in Atmospheric Studies (Cambridge Publishers)",
    "Microsoft Azure Data Fundamentals Certified (DP-900)",
    "Core Technical Team Lead - CUAC",
  ];

  return (
    <>
      <NavBar
        scrollToSection={scrollToSection}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <div>
        <section id="about" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                Hi, I'm Aman Srivastava
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                AI/ML Engineer & Full Stack Developer
              </p>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                Computer Science student specializing in Big Data Analytics with
                expertise in Machine Learning, Data Science, and AI-driven
                solutions. I build intelligent applications that solve
                real-world problems.
              </p>

              <div className="flex justify-center gap-4 mb-8">
                <a
                  href="mailto:aksrivastava031104@gmail.com"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
                >
                  <Mail size={20} />
                  Contact Me
                </a>
                <a
                  href="https://www.linkedin.com/in/amansrivastava03"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border-2 border-gray-800 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-800 hover:text-white transition"
                >
                  <Linkedin size={20} />
                  LinkedIn
                </a>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6 max-w-2xl mx-auto">
                <h3 className="font-semibold text-gray-800 mb-2">Education</h3>
                <p className="text-gray-700">
                  B.Tech in Computer Science Engineering (Big Data Analytics)
                </p>
                <p className="text-gray-600">
                  Chandigarh University | CGPA: 8.54
                </p>
                <p className="text-sm text-gray-500">2023 - 2027</p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Featured Projects
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <p className="text-sm text-blue-600 font-medium mb-4">
                    Role: {project.role}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      className="text-gray-600 hover:text-gray-900 flex items-center gap-1"
                    >
                      <Github size={18} /> Code
                    </a>
                    <a
                      href={project.demo}
                      className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
                    >
                      <ExternalLink size={18} /> Demo
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Technical Skills
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {Object.entries(skills).map(([category, skillList]) => (
                <div
                  key={category}
                  className="bg-white rounded-lg p-6 shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, i) => (
                      <span
                        key={i}
                        className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section
          id="achievements"
          className="py-16 px-4 sm:px-6 lg:px-8 bg-white"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Achievements & Recognition
            </h2>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg p-6 shadow-sm flex items-start gap-3"
                >
                  <div className="text-blue-600 text-2xl">🏆</div>
                  <p className="text-gray-700">{achievement}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-blue-50 rounded-lg p-6 max-w-3xl mx-auto">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Experience
              </h3>
              <div className="text-gray-700">
                <p className="font-medium">Python Developer Intern (AI-ML)</p>
                <p className="text-gray-600">
                  Aqlob Tech Pvt. Ltd., Mohali, Punjab
                </p>
                <p className="text-sm text-gray-500 mb-2">
                  June - July 2024 (45 Days)
                </p>
                <p className="text-sm">
                  Implemented ML models for sales prediction and developed
                  React.js frontend dashboard for real-time visualization.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Let's Work Together
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Available for freelance projects in AI/ML, web development, and
              data science. Let's build something amazing together!
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="mailto:aksrivastava031104@gmail.com"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition text-lg"
              >
                <Mail size={20} />
                Email Me
              </a>
              <a
                href="https://www.linkedin.com/in/amansrivastava03"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition text-lg"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-8 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-gray-400">
              © 2025 Aman Srivastava. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}

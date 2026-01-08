import React from "react";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projectList = [
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

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {project.title}
              </h3>

              <p className="text-gray-600 mb-4">
                {project.description}
              </p>

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
  );
};

export default Projects;

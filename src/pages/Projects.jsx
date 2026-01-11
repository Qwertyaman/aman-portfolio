import React, { useState, useEffect } from "react";
import { Github, ExternalLink, Code2, Briefcase } from "lucide-react";

const Projects = () => {
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    // Stagger animation for cards
    projectList.forEach((_, index) => {
      setTimeout(() => {
        setVisibleCards((prev) => [...prev, index]);
      }, index * 150);
    });
  }, []);

  const projectList = [
    {
      title: "Accurate Predictions",
      description:
        "A fully developed web App based on Deep Learning Model which analyzes image and description of a product and gives output of expected pricing and details of change of rate ",
      role: "Full Stack Developer",
      tech: ["Transformers", "Clip and Mlp", "Python", "FastAPI", "React.js"],
      github: "https://github.com/accuratepredictions11/Accurate-Backend",
      demo: "#",
      color: "from-amber-500 to-cyan-500 ",
    },
    {
      title: "VartalAPP - Indian Sign Language Translator",
      description:
        "Language translator application for specially-abled individuals with Sign↔Text↔Voice conversion features.",
      role: "Backend Developer",
      tech: [
        "Deep Learning (CNN)",
        "Machine Learning",
        "NLP",
        "Flask",
        "Python",
      ],
      github: "https://github.com/AstroIshu/Pulse_Vartalapp",
      demo: "#",
      color: "from-blue-500 to-purple-500",
    },
    {
      title: "BYE VIBHISHAN - Insider Threat Detection",
      description:
        "Security web application detecting insider threats using Random Forest ML model with real-time monitoring dashboard.",
      role: "Frontend Development & Model Training",
      tech: ["React.js", "Random Forest", "Scikit-learn", "MongoDB"],
      github: "https://github.com/yourusername/bye-vibhishan",
      demo: "#",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Sales Prediction System",
      description:
        "ML-powered sales forecasting application with interactive React dashboard for real-time predictions and data visualization.",
      role: "Model Trainer (Internship Project)",
      tech: ["Python", "Pandas", "NumPy", "React.js", "Scikit-learn"],
      // github: "https://github.com/yourusername/sales-prediction",
      demo: "#",
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "BRACKET-AI",
      description:
        "An intelligent appication which works on Voice Commands and can perform any task given by user.",
      role: "Python Developer",
      tech: ["Python", "Streamlit"],
      github: "https://github.com/Qwertyaman/BRACKET_AI",
      demo: "#",
      color: "from-green-400 to-blue-500",
    },
  ];

  return (
    <section
      id="projects"
      className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Blurred Background with Gradient Orbs */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-30 left-30 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-30 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        {/* <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div> */}

        {/* Noise Texture Overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full text-blue-300 text-sm italic [font-family:var(--font-savate)]">
              My Work
            </span>
          </div>

          <h2 className="text-5xl sm:text-6xl font-bold italic text-white mb-4">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Projects
            </span>
          </h2>

          <p className="text-gray-200 text-base italic max-w-2xl mx-auto">
            Showcasing AI/ML applications and full-stack solutions that solve
            real-world problems
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectList.map((project, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-700 transform ${
                visibleCards.includes(index)
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              {/* Glass Card with Bottom-Left Light */}
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 h-full hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:border-white/20 shadow-2xl overflow-hidden">
                {/* Bottom-Left Light Shine Effect */}
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-tr from-white/20 via-white/5 to-transparent rounded-full blur-2xl group-hover:w-48 group-hover:h-48 transition-all duration-500"></div>

                {/* Gradient Top Border */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.color} rounded-t-2xl opacity-80`}
                ></div>

                {/* Glass Reflection Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

                {/* Content */}
                <div className="relative flex flex-col h-full z-10">
                  {/* Icon */}
                  <div className="mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center shadow-lg`}
                    >
                      <Code2 className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl font-bold italic text-white mb-3 group-hover:text-blue-300 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-200 mb-4 text-sm italic leading-relaxed flex-grow">
                    {project.description}
                  </p>

                  {/* Role Badge */}
                  <div className="mb-4">
                    <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-lg px-3 py-1.5 italic">
                      <Briefcase size={14} className="text-blue-400" />
                      <span className="text-sm text-blue-300 font-medium">
                        {project.role}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-white/5 backdrop-blur-sm border border-white/10 text-gray-200 text-sm px-3 py-1.5 rounded-full hover:bg-white/10 hover:border-white/20 transition-all italic"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 pt-4 border-t border-white/10">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors group/link"
                    >
                      <div className="p-1.5 rounded-lg bg-white/5 group-hover/link:bg-white/10 transition-colors">
                        <Github
                          size={18}
                          className="group-hover/link:scale-110 transition-transform"
                        />
                      </div>
                      <span className="text-sm font-medium">Code</span>
                    </a>

                    {project.demo !== "#" && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors group/link"
                      >
                        <div className="p-1.5 rounded-lg bg-blue-500/10 group-hover/link:bg-blue-500/20 transition-colors">
                          <ExternalLink
                            size={18}
                            className="group-hover/link:scale-110 transition-transform"
                          />
                        </div>
                        <span className="text-sm font-medium">Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl -z-10`}
                ></div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="https://github.com/Qwertyaman"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-xl border-2 border-white/10 text-white px-8 py-3 rounded-xl font-medium hover:bg-white/10 hover:border-white/20 transform hover:scale-105 transition-all duration-300 shadow-xl"
          >
            <Github size={20} />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;

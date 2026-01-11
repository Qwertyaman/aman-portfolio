import React, { useState, useEffect } from "react";
import {
  Mail,
  Linkedin,
  Github,
  ChevronDown,
  Sparkles,
  Code,
  Brain,
  Zap,
} from "lucide-react";
import bgImage from "../assets/image.png"

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const roles = [
    "AI/ML Engineer",
    "Full Stack Developer",
    "Data Scientist",
    "Problem Solver",
  ];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt="Background"
          className="w-full h-full object-cover"
        />
        {/* Animated overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/60 to-transparent"></div>
      </div>

      {/* Animated particles
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div> */}

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="max-w-7xl mx-auto">
          <div
            className={`transition-all duration-1000 transform ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            {/* Greeting Badge */}
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 italic bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full text-blue-300 text-sm font-semibold shadow-lg">
                Welcome to my digital space
              </span>
            </div>

            {/* Name with gradient animation */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-4 tracking-tight leading-tight">
              <span className="inline-block hover:scale-105 transition-transform duration-300 font-thin italic">
                Aman
              </span>{" "}
              <span className="inline-block text-transparent italic font-thin bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 hover:scale-105 transition-transform duration-300">
                Srivastava
              </span>
            </h1>

            {/* Animated Role with typing effect */}
            <div className="flex items-center gap-3 mb-6">
              <Code className="text-blue-400 animate-pulse" size={24} />
              <p className="text-lg sm:text-xl text-gray-200 tracking-wide font-medium">
                <span className="text-blue-400 font-bold italic">
                  Big Data Analytics Student
                </span>
              </p>
            </div>

            {/* Quick Stats */}
            <div className="flex text-sm flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-105 cursor-default">
                <Code size={18} className="text-blue-400" />
                <span className="text-white font-semibold">5+ Projects</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-105 cursor-default">
                <Zap size={18} className="text-yellow-400" />
                <span className="text-white font-semibold">
                  National Winner
                </span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-105 cursor-default">
                <Brain size={18} className="text-purple-400" />
                <span className="text-white font-semibold">
                  Works on Ml and Data Science
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-base text-gray-300 max-w-2xl mb-8 leading-relaxed italic">
              Passionate about leveraging{" "}
              <span className="text-blue-200 font-semibold">
                Machine Learning
              </span>{" "}
              and{" "}
              <span className="text-purple-200 font-semibold">Big Data</span> to
              solve real-world problems. Building intelligent applications that
              make a difference.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=aksrivastava031104@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-blue-500/50"
              >
                <Mail
                  size={20}
                  className="group-hover:rotate-12 transition-transform duration-300"
                />
                Let's Connect
              </a>

              <a
                href="https://www.linkedin.com/in/amansrivastava03"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/20 hover:border-blue-400/50 transform hover:scale-105 transition-all duration-300"
              >
                <Linkedin
                  size={20}
                  className="group-hover:rotate-12 transition-transform duration-300"
                />
                LinkedIn
              </a>

              <a
                href="https://github.com/Qwertyaman"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/20 hover:border-purple-400/50 transform hover:scale-105 transition-all duration-300"
              >
                <Github
                  size={20}
                  className="group-hover:rotate-12 transition-transform duration-300"
                />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="flex flex-col items-center gap-2 cursor-pointer hover:scale-110 transition-transform duration-300">
          <span className="text-white/60 text-sm font-medium">
            Explore More
          </span>
          <ChevronDown className="text-blue-400" size={32} />
        </div>
      </div>
    </section>
  );
};

export default About;

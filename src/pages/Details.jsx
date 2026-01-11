import React, { useState, useEffect } from "react";
import myImage from "../assets/my.jpg"
import { Code2, Sparkles, Rocket, Award, BookOpen } from "lucide-react";

const Details = () => {
  const [visibleSkills, setVisibleSkills] = useState([]);

  useEffect(() => {
    // Stagger animation for skill cards
    techStack.forEach((_, index) => {
      setTimeout(() => {
        setVisibleSkills((prev) => [...prev, index]);
      }, index * 80);
    });
  }, []);

  const techStack = [
    { name: "Python", icon: "🐍", color: "from-blue-500 to-yellow-500" },
    { name: "C/C++", icon: "⚙️", color: "from-blue-600 to-cyan-500" },
    { name: "Java", icon: "☕", color: "from-red-500 to-orange-500" },
    { name: "TensorFlow", icon: "🧠", color: "from-orange-500 to-yellow-500" },
    { name: "NumPy", icon: "🔢", color: "from-blue-400 to-cyan-400" },
    { name: "Pandas", icon: "🐼", color: "from-purple-500 to-blue-500" },
    { name: "Scikit-learn", icon: "📊", color: "from-orange-400 to-blue-400" },
    { name: "OpenCV", icon: "👁️", color: "from-green-500 to-blue-500" },
    { name: "React.js", icon: "⚛️", color: "from-cyan-400 to-blue-500" },
    { name: "Flask", icon: "🌶️", color: "from-gray-600 to-gray-400" },
    { name: "MongoDB", icon: "🍃", color: "from-green-600 to-green-400" },
    { name: "MySQL", icon: "🐬", color: "from-blue-500 to-cyan-600" },
    { name: "Power BI", icon: "📈", color: "from-yellow-500 to-orange-500" },
    { name: "GitHub", icon: "🔧", color: "from-purple-500 to-pink-500" },
    { name: "NLP", icon: "💬", color: "from-purple-400 to-pink-500" },
    { name: "Transformers", icon: "🤖", color: "from-blue-500 to-purple-600" },
  ];

  console.log("My Image Path:", myImage);
  return (

    <section
      id="about"
      className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900">
        <div className="absolute top-30 left-40 w-96 h-96 bg-purple-700/20 rounded-full blur-3xl"></div>
        <div className="absolute top-30 right-40 w-96 h-96 bg-purple-700/20 rounded-full blur-3xl"></div>
        {/* <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl "
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"
        ></div> */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-purple-500/20 backdrop-blur-sm border border-purple-400/30 rounded-full text-purple-300 text-sm italic [font-family:var(--font-savate)]">
              Get To Know Me
            </span>
          </div>

          <h2 className="text-5xl sm:text-6xl font-normal text-white mb-4 italic">
            Who am{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
              I ?
            </span>
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div className="flex justify-center lg:justify-center lg:-translate-x-15">
            <div className="relative group">
              {/* <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div> */}
              {/* <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-2 hover:bg-white/10 transition-all duration-500 hover:scale-105 shadow-2xl"> */}
                <div className="relative w-80 h-96 rounded-2xl overflow-hidden">
                  {/* Uncomment and use your image */}
                  <img src={myImage} alt="Aman Srivastava" className="w-full h-full object-cover" />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
                </div>
              
            </div>
          </div>

          {/* Right: Bio Card */}
          <div className="space-y-6">
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 shadow-2xl">
              {/* Bottom-Left Light Shine Effect */}
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-tr from-white/20 via-white/5 to-transparent rounded-full blur-2xl"></div>

              {/* Gradient Top Border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-t-2xl"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  {/* <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center shadow-lg">
                    <Rocket className="w-5 h-5 text-white" />
                  </div> */}
                  <h3 className="text-3xl font-bold italic text-white">
                    Good To see You, I'm Aman
                  </h3>
                </div>

                <div className="space-y-4 text-gray-100 leading-relaxed font-sans text-base italic">
                  <p>
                    I am a Computer Science student specializing in Big Data
                    Analytics with a strong passion for Machine Learning, Data
                    Science, and Artificial Intelligence. Currently pursuing my
                    B.Tech from Chandigarh University with a CGPA of 8.5+.
                  </p>

                  <p>
                    With hands-on experience in AI-driven research projects and
                    backend development, I completed a Python Developer
                    Internship at Aqlob Tech Pvt. Ltd., where I implemented
                    machine learning models for sales prediction and developed
                    interactive React.js dashboards for real-time data
                    visualization.
                  </p>

                  <p>
                    I have successfully built multiple AI/ML projects including
                    VartalAPP, an Indian Sign Language Translator, and BYE
                    VIBHISHAN, an Insider Threat Detection System using Random
                    Forest algorithm. My work demonstrates proficiency in
                    full-stack development, model training, and deployment.
                  </p>

                  <p>
                    Recognized with 1st position in multiple national-level
                    hackathons and ideathons, I am passionate about advancing
                    applied research in data-driven technologies. As a Core
                    Technical Team Lead at CUAC, I continuously strive to solve
                    real-world problems through innovative AI solutions.
                  </p>
                </div>

                {/* Achievements Highlight */}
                <div className="mt-6 grid grid-cols-2 gap-4 italic">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all">
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="w-5 h-5 text-yellow-400" />
                      <h4 className="text-white font-semibold text-sm italic">
                        Achievements
                      </h4>
                    </div>
                    <p className="text-gray-400 text-xs italic">
                      {" "}
                      National Level Winner
                    </p>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all">
                    <div className="flex items-center gap-2 mb-2">
                      <BookOpen className="w-5 h-5 text-blue-400" />
                      <h4 className="text-white font-semibold text-sm">
                        Research
                      </h4>
                    </div>
                    <p className="text-gray-400 text-xs">
                      Published Author (Cambridge UK)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold font-sans italic text-white mb-2 flex items-center justify-center gap-3">
              <Code2 className="w-8 h-8 text-purple-400" />
              Tech Stack I work with
            </h3>
            <p className="text-gray-200 text-base italic" >
              AI/ML frameworks, programming languages, and development tools
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className={`transition-all duration-700 transform ${
                  visibleSkills.includes(index)
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                <div className="relative group">
                  {/* Glass Card */}
                  <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-110 hover:border-white/20 shadow-xl">
                    {/* Bottom Light Shine */}
                    <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-gradient-to-tr from-white/20 via-white/5 to-transparent rounded-full blur-xl group-hover:w-24 group-hover:h-24 transition-all duration-300"></div>

                    {/* Gradient Top Border */}
                    <div
                      className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${tech.color} rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    ></div>

                    <div className="relative z-10 text-center">
                      <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                        {tech.icon}
                      </div>
                      <p className="text-white text-sm  italic font-medium group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300">
                        {tech.name}
                      </p>
                    </div>

                    {/* Hover Glow Effect */}
                    <div
                      className={`absolute inset-0 rounded-xl bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl -z-10`}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;

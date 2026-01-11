import React, { useState, useEffect } from "react";
import { Trophy, Award, BookOpen, Shield, Briefcase, Calendar, MapPin } from "lucide-react";

const Achievement = () => {
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    // Stagger animation for achievement cards
    achievements.forEach((_, index) => {
      setTimeout(() => {
        setVisibleCards((prev) => [...prev, index]);
      }, index * 150);
    });
  }, []);

  const achievements = [
    {
      title: "Gen AI Hackathon Winner",
      description: "1st Position - National Level (Tech-Event 2024)",
      year: "2024",
      icon: Trophy,
      color: "from-yellow-500 to-orange-500",
    },
    {
      title: "Technicia 2025 Ideathon",
      description: "1st Position - National Level (Tech-Event 2025)",
      year: "2025",
      icon: Award,
      color: "from-blue-500 to-purple-500",
    },
    {
      title: "ThinkLab Ideathon 2025",
      description: "1st Position - Regional Level",
      year: "2025",
      icon: Award,
      color: "from-amber-500 to-purple-500",
    },
    {
      title: "200+ Leetcode questions",
      description: "Solved 200+ DSA questions on leetcode",
      year: "2025",
      icon: Award,
      color: "from-amber-500 to-purple-500",
    },
    {
      title: "Published Author",
      description: "Book Chapter: AI/ML in Atmospheric Studies - Cambridge Publishers (UK)",
      year: "2024",
      icon: BookOpen,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Microsoft Azure Certified",
      description: "Data Fundamentals (DP-900)",
      year: "2025",
      icon: Shield,
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "Core Technical Team Lead",
      description: "CUAC - Chandigarh University",
      year: "2024-2025",
      icon: Award,
      color: "from-green-500 to-teal-500",
    },
  ];

  return (
    <section id="achievements" className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900">
        <div className="absolute top-30 left-20 w-96 h-96 bg-yellow-600/20 rounded-full blur-3xl"></div>
        <div className="absolute top-30 right-20 w-96 h-96 bg-yellow-600/20 rounded-lg blur-3xl"></div>
        {/* <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div> */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-yellow-500/20 backdrop-blur-sm border border-yellow-400/30 rounded-full text-yellow-300 text-sm italic [font-family:var(--font-savate)]">
              Milestones
            </span>
          </div>
          
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-4 italic">
            Achievements & <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Recognition</span>
          </h2>
          
          <p className="text-gray-200 text-base italic max-w-2xl mx-auto">
            Awards, certifications, and recognitions earned through dedication and innovation
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <div
                key={index}
                className={`group relative transition-all duration-700 transform ${
                  visibleCards.includes(index)
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 h-full hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:border-white/20 shadow-2xl overflow-hidden">
                  <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-tr from-white/20 via-white/5 to-transparent rounded-full blur-2xl group-hover:w-48 group-hover:h-48 transition-all duration-500"></div>
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${achievement.color} rounded-t-2xl opacity-80`}></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                  <div className="relative flex flex-col h-full z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${achievement.color} flex items-center justify-center shadow-lg`}>
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>
                      <span className="bg-white/10 backdrop-blur-sm border border-white/20 text-gray-200 text-xs px-3 py-1.5 rounded-full font-medium">
                        {achievement.year}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold italic text-white mb-3 group-hover:text-yellow-300 transition-colors">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-200 text-sm italic leading-relaxed flex-grow">
                      {achievement.description}
                    </p>
                  </div>
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl -z-10`}></div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-4xl font-bold italic text-white mb-2 flex items-center justify-center gap-3">
              <Briefcase className="w-8 h-8 text-blue-400" />
              Professional Experience
            </h3>
          </div>

          <div className="relative group">
            {/* Glowing Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
            
            {/* Glass Card */}
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 shadow-2xl overflow-hidden">
              
              {/* Bottom-Left Light Shine Effect */}
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-tr from-white/20 via-white/5 to-transparent rounded-full blur-2xl group-hover:w-48 group-hover:h-48 transition-all duration-500"></div>
              
              {/* Gradient Top Border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-t-2xl"></div>
              
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-6 flex-wrap gap-4">
                  <div>
                    <h4 className="text-2xl font-bold italic text-white mb-2 group-hover:text-blue-300 transition-colors">
                      Python Developer Intern (AI-ML)
                    </h4>
                    <p className="text-blue-400 font-medium italic text-lg">
                      Aqlob Tech Pvt. Ltd.
                    </p>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-3 py-2">
                      <MapPin size={16} className="text-purple-400" />
                      <span className="text-gray-300 text-sm">Mohali, Punjab</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-3 py-2">
                      <Calendar size={16} className="text-blue-400" />
                      <span className="text-gray-300 text-sm">June - July 2024</span>
                    </div>
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="inline-block mb-6">
                  <span className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-400/30 text-blue-300 px-4 py-2 rounded-full text-sm font-medium">
                    45 Days Internship
                  </span>
                </div>

                {/* Responsibilities */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3 group/item">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 mt-2 group-hover/item:scale-150 transition-transform"></div>
                    <p className="text-gray-300 leading-relaxed italic">
                      Implemented machine learning models for sales prediction using Python, Pandas, NumPy, and Scikit-learn on collected datasets
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-3 group/item">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 mt-2 group-hover/item:scale-150 transition-transform"></div>
                    <p className="text-gray-300 leading-relaxed italic">
                      Developed React.js frontend dashboard for real-time data visualization and model inference
                    </p>
                  </div>
                </div>

                {/* Tech Stack Used */}
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-gray-400 text-sm mb-3">Technologies Used:</p>
                  <div className="flex flex-wrap gap-2">
                    {['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'React.js', 'Data Visualization'].map((tech, i) => (
                      <span
                        key={i}
                        className="bg-white/5 backdrop-blur-sm border border-white/10 text-gray-200 text-xs px-3 py-1.5 rounded-full hover:bg-white/10 hover:border-white/20 transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievement;
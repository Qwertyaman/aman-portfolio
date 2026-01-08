import React from "react";
import { Mail, Linkedin } from "lucide-react";

const About = () => {
  return (
    <>
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
                {/* Contact Button */}
                <a
                  href="mailto:aksrivastava031104@gmail.com"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
                >
                  <Mail size={20} />
                  Contact Me
                </a>

                {/* LinkedIn Button */}
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
                <h3 className="font-semibold text-gray-800 mb-2">
                  Education
                </h3>
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
      </div>
    </>
  );
};

export default About;

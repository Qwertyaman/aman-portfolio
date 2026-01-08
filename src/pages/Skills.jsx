import React from "react";

const Skills = () => {
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
  return (
    <div>
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Technical Skills
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="bg-white rounded-lg p-6 shadow-sm">
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
    </div>
  );
};

export default Skills;

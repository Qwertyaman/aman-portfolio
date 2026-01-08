import React from "react";

const Achievement = () => {
  const achievements = [
    "1st Position - Gen AI Hackathon (National Level, 2024)",
    "1st Position - Technicia 2025 Ideathon (National Level)",
    "Published Book Chapter - AI/ML in Atmospheric Studies (Cambridge Publishers)",
    "Microsoft Azure Data Fundamentals Certified (DP-900)",
    "Core Technical Team Lead - CUAC",
  ];
  return (
    <>
      <div>
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
      </div>
    </>
  );
};

export default Achievement;

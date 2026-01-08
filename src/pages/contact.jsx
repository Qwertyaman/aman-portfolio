import React from "react";

const contact = () => {
   
  return (
    <>
      <div>
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
      </div>
    </>
  );
};

export default contact;

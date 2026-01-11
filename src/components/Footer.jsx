import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer
        className="
          bg-black
          backdrop-blur-lg
          border-t border-white/10
          text-white/80
          py-4 px-4
        "
      >
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* Left: copyright */}
          <p className="text-sm sm:text-base text-white/70 text-center sm:text-left">
            © 2025 Aman Srivastava. All rights reserved.
          </p>

          {/* Right: social links */}
          <div className="flex items-center gap-4">
            <a
              href="https://x.com/Aman_03011"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm text-white/70 hover:text-white transition-colors"
            >
              X
            </a>
            <a
              href="https://github.com/Qwertyaman"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm text-white/70 hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/amansrivastava03/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm text-white/70 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

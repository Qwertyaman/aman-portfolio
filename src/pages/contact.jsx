import React, { useState } from "react";
import { Mail, MapPin, Github, Linkedin, Instagram, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = () => {
  const { name, email, subject, message } = formData;

  // Hardcoded recipient
  const recipient = "amansrivastava02036@gmail.com";

  // Prepare subject and body safely
  const mailSubject = subject || "New Contact Form Message";
  const mailBody = `
Name: ${name || "N/A"}
Email: ${email || "N/A"}

${message || "No message provided."}
`;

  // Gmail compose URL
  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    recipient
  )}&su=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;

  // Open Gmail compose in a new tab
  window.open(gmailLink, "_blank");

  // Reset form
  setFormData({ name: "", email: "", subject: "", message: "" });
};



  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "amansrivastava02036@gmail.com",
      link: "mailto:amansrivastava02036@gmail.com",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Chandigarh, India",
      color: "from-purple-500 to-pink-500",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      url: "https://github.com/Qwertyaman",
      color: "hover:bg-purple-500/20 hover:border-purple-400/30 hover:text-purple-400",
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/amansrivastava03",
      color: "hover:bg-blue-500/20 hover:border-blue-400/30 hover:text-blue-400",
    },
    {
      icon: Instagram,
      name: "Instagram",
      url: "https://instagram.com/aman_03srivastava",
      color: "hover:bg-pink-500/20 hover:border-pink-400/30 hover:text-pink-400",
    },
  ];

  return (
    <section id="contact" className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Blurred Background with Gradient Orbs */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl " style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Noise Texture Overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 italic bg-cyan-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-full text-cyan-300 text-sm font-medium">
              Let's Talk
            </span>
          </div>
          
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-4 italic">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r italic from-cyan-400 to-blue-500">Touch</span>
          </h2>
          
          <p className="text-gray-200 text-base italic max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? Drop me a message!
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left: Contact Info */}
          <div className="space-y-8">
            {/* Contact Info Title */}
            <div>
              <h3 className="text-2xl font-bold italic text-white mb-6">Contact Info</h3>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4 italic">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div
                    key={index}
                    className="relative group"
                  >
                    <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 hover:scale-105 shadow-2xl overflow-hidden">
                      {/* Bottom-Left Light Shine Effect */}
                      <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-tr from-white/20 via-white/5 to-transparent rounded-full blur-2xl group-hover:w-48 group-hover:h-48 transition-all duration-500"></div>
                      
                      {/* Gradient Top Border */}
                      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${info.color} rounded-t-2xl opacity-80`}></div>
                      
                      <div className="relative z-10 flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center shadow-lg`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="text-gray-200 text-sm mb-1">{info.label}</p>
                          {info.link ? (
                            <a
                              href={info.link}
                              className="text-white font-medium hover:text-cyan-400 transition-colors"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-white font-medium">{info.value}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h4 className="text-xl font-bold text-white mb-4">Connect with me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-4 transition-all duration-300 ${social.color}`}
                    >
                      <IconComponent className="w-6 h-6 text-gray-300 group-hover:scale-110 transition-transform" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="relative group">
            {/* Glowing Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
            
            {/* Glass Card */}
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 shadow-2xl overflow-hidden">
              
              {/* Bottom-Left Light Shine Effect */}
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-tr from-white/20 via-white/5 to-transparent rounded-full blur-2xl group-hover:w-48 group-hover:h-48 transition-all duration-500"></div>
              
              {/* Gradient Top Border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-t-2xl"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
                
                <div className="space-y-6">
                  {/* Name Input */}
                  <div>
                    <label className="block text-gray-300 text-sm mb-2">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/50 focus:bg-white/10 transition-all"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-gray-300 text-sm mb-2">Your Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/50 focus:bg-white/10 transition-all"
                    />
                  </div>

                  {/* Subject Input */}
                  <div>
                    <label className="block text-gray-300 text-sm mb-2">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry"
                      className="w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/50 focus:bg-white/10 transition-all"
                    />
                  </div>

                  {/* Message Textarea */}
                  <div>
                    <label className="block text-gray-300 text-sm mb-2">Your Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      rows="5"
                      className="w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/50 focus:bg-white/10 transition-all resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    onClick={handleSubmit}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold px-6 py-3 rounded-xl hover:from-cyan-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 shadow-xl flex items-center justify-center gap-2 group/btn"
                  >
                    Send Message
                    <Send size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
import React from 'react';

const About: React.FC = () => {
  const skills = [
    { name: "React", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "Python", level: 90 },
    { name: "JavaScript", level: 95 },
    { name: "Tailwind CSS", level: 85 },
    { name: "Node.js", level: 75 },
    { name: "Git", level: 85 },
    { name: "Linux", level: 80 }
  ];

  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Tech Company",
      period: "2022 - Present",
      description: "Developing web applications using React, TypeScript, and Python."
    },
    {
      title: "Software Engineer",
      company: "Startup Inc.",
      period: "2020 - 2022",
      description: "Built scalable web applications and APIs using modern technologies."
    },
    {
      title: "Junior Developer",
      company: "Digital Agency",
      period: "2019 - 2020",
      description: "Learned the fundamentals of web development and worked on client projects."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About Me</h1>
        <p className="text-lg text-gray-600">
          Get to know more about my background, skills, and passion for development.
        </p>
      </div>

      {/* Profile Section */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
          <div className="w-48 h-48 bg-gray-300 rounded-full flex items-center justify-center">
            <span className="text-4xl text-gray-600">👨‍💻</span>
          </div>
          
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Hello, I'm Marcos!</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              I'm a passionate full-stack developer with a love for creating innovative web applications. 
              I enjoy working with modern technologies like React, TypeScript, and Python to build 
              user-friendly and efficient solutions.
            </p>
            <p className="text-gray-700 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source 
              projects, or sharing my knowledge through blog posts and tutorials.
            </p>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Technical Skills</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-700 font-medium">{skill.name}</span>
                <span className="text-gray-500">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience Section */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-4 border-blue-500 pl-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                <span className="text-sm text-gray-500">{exp.period}</span>
              </div>
              <p className="text-blue-600 font-medium mb-2">{exp.company}</p>
              <p className="text-gray-700">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <span className="text-blue-500">📧</span>
                <span className="text-gray-700">your.email@example.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-blue-500">🐙</span>
                <span className="text-gray-700">github.com/yourusername</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-blue-500">💼</span>
                <span className="text-gray-700">linkedin.com/in/yourusername</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Let's Connect</h3>
            <p className="text-gray-700 mb-4">
              I'm always interested in new opportunities and collaborations. 
              Feel free to reach out if you'd like to discuss a project or just say hello!
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
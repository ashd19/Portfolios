"use client";
import React from 'react';

import { ExternalLink, Mail, Video, Code, Shield, Zap, Users, Bot } from 'lucide-react';

const Projects = () => {


  const projects = [
    {
      id: 1,
      title: "Email Assistant",
      link: "#",
      technologies: ["Spring Boot", "React.js", "Gemini AI", "JWT", "REST APIs", "Spring Security"],
      description: "Built a full-stack AI-powered productivity tool to streamline email management and composition workflows. Integrated Google Gemini AI to generate context-aware email drafts, smart replies, and real-time summaries based on thread content and user intent.",
      highlights: [
        "Secure and modular backend using Spring Boot",
        "Authentication & authorization with Spring Security and JWT",
        "Responsive React.js frontend with dynamic inbox rendering",
        "AI-enhanced compose flow with real-time tone adjustment",
        "Asynchronous API calls with loading state management"
      ],
      icon: Mail,
      gradient: "from-blue-500 to-purple-600",
      accentColor: "blue"
    },
    {
      id: 2,
      title: "Video Call Web Application",
      link: "#",
      technologies: ["React", "Spring Boot", "REST APIs", "JWT Auth", "WebRTC"],
      description: "Developed and deployed robust 1-on-1 and group video calling features using the ZegoCloud SDK, enabling real-time audio/video communication with minimal latency.",
      highlights: [
        "Dynamic React frontend for seamless user experience",
        "Secure, scalable backend services using Spring Boot",
        "RESTful APIs for room creation and session management",
        "JWT-based authentication with real-time updates",
        "Cross-device compatibility and concurrent multi-user sessions"
      ],
      icon: Video,
      gradient: "from-green-500 to-teal-600",
      accentColor: "green"
    }
  ];

  const techIcons : Record<string, React.ComponentType<any>>= {
    "Spring Boot": Shield,
    "React.js": Code,
    "React": Code,
    "Gemini AI": Bot,
    "JWT": Shield,
    "REST APIs": Zap,
    "Spring Security": Shield,
    "JWT Auth": Shield,
    "WebRTC": Video
  };
  return <div id="projects">
 <div className="min-h-screen bg-black text-white p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Featured Projects
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A collection of full-stack applications showcasing modern web development practices and cutting-edge technologies
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900 to-black hover:border-gray-600 transition-all duration-500 ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Background Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <div className={`relative flex flex-col md:flex-row ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                {/* Project Icon & Visual Side */}
                <div className="md:w-1/3 p-8 md:p-12 flex items-center justify-center">
                  <div className={`relative p-8 rounded-2xl bg-gradient-to-br ${project.gradient} shadow-2xl group-hover:scale-105 transition-transform duration-300`}>
                    <project.icon size={80} className="text-white drop-shadow-lg" />
                    <div className="absolute inset-0 rounded-2xl bg-white opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-300"></div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="md:w-2/3 p-8 md:p-12">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
                      {project.title}
                    </h2>
                    {/* <a
                      href={project.link}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r ${project.gradient} hover:shadow-lg hover:shadow-${project.accentColor}-500/25 transition-all duration-300 group-hover:scale-105`}
                    >
                      <ExternalLink size={16} />
                      <span className="font-medium">View Project</span>
                    </a> */}
                  </div>

                  <p className="text-gray-300 text-lg leading-relaxed mb-8">
                    {project.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4 text-gray-200">Key Features:</h3>
                    <ul className="space-y-3">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-300">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.gradient} mt-2 flex-shrink-0`}></div>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-gray-200">Technologies Used:</h3>
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tech, idx) => {
                        const IconComponent = techIcons[tech]|| Code;
                        return (
                          <div
                            key={idx}
                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 hover:border-gray-600 hover:bg-gray-750 transition-all duration-300 group/tech"
                          >
                            <IconComponent size={16} className="text-gray-400 group-hover/tech:text-white transition-colors duration-300" />
                            <span className="text-sm font-medium text-gray-300 group-hover/tech:text-white transition-colors duration-300">
                              {tech}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        {/* <div className="text-center mt-20">
          <div className="inline-block p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-gray-600 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4">Interested in Working Together?</h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Let's discuss how we can bring your next project to life with modern technologies and best practices.
            </p>
            <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 font-medium">
              Get In Touch
            </button>
          </div>
        </div> */}
      </div>
    </div>

    
  </div>;
};

export default Projects;

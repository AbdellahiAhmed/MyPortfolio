import React from 'react';
import { ArrowLeft, Github, ExternalLink, Server, Users, BookOpen, Database, Shield, Settings } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';

interface LMDSystemShowcaseProps {
  onBack: () => void;
}

const LMDSystemShowcase: React.FC<LMDSystemShowcaseProps> = ({ onBack }) => {
  const { t } = useTranslation();

  const screenshots = [
    {
      id: 1,
      title: "Student Dashboard",
      description: "Main dashboard showing student information, courses, and academic progress",
      image: "/lmd-system/student-dashboard.png",
      alt: "LMD System Student Dashboard"
    },
    {
      id: 2,
      title: "Course Management",
      description: "Interface for managing courses, schedules, and academic content",
      image: "/lmd-system/course-management.png",
      alt: "Course Management Interface"
    },
    {
      id: 3,
      title: "Admin Panel",
      description: "Administrative interface for managing students, faculty, and system settings",
      image: "/lmd-system/admin-panel.png",
      alt: "Admin Panel Interface"
    },
    {
      id: 4,
      title: "Grade Management",
      description: "System for recording and managing student grades and academic records",
      image: "/lmd-system/grade-management.png",
      alt: "Grade Management System"
    }
  ];

  const features = [
    {
      icon: Users,
      title: "Student Management",
      description: "Comprehensive student information and enrollment management"
    },
    {
      icon: BookOpen,
      title: "Course Management",
      description: "Full CRUD operations for courses, schedules, and academic content"
    },
    {
      icon: Database,
      title: "Database Integration",
      description: "MySQL database with optimized queries and data relationships"
    },
    {
      icon: Shield,
      title: "Role-Based Access",
      description: "Secure authentication and authorization for different user types"
    },
    {
      icon: Settings,
      title: "Form Validation",
      description: "Client and server-side validation for data integrity"
    },
    {
      icon: Server,
      title: "Web Technologies",
      description: "Modern web stack with HTML, CSS, JavaScript, PHP, and MySQL"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black dark:bg-slate-900 dark:text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <button
              onClick={onBack}
              className="flex items-center space-x-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Portfolio</span>
            </button>
          </div>
          
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center">
                <Server className="h-10 w-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">LMD System</h1>
            <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-3xl mx-auto">
              University platform for student and course management with comprehensive academic features
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="https://github.com/AbdellahiAhmed/Syst-me_LMD"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-6 py-3 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
              >
                <Github className="h-5 w-5" />
                <span>View Code</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Project Overview */}
      <section className="py-16 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                LMD System is a comprehensive university management platform designed to streamline 
                academic operations. Built with modern web technologies, it provides a complete 
                solution for student enrollment, course management, and academic record keeping.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
                The system features role-based access control, form validation, and a user-friendly 
                interface that simplifies complex academic processes for students, faculty, and administrators.
              </p>
              
              <div className="flex flex-wrap gap-3">
                {["HTML", "CSS", "JavaScript", "PHP", "MySQL", "CRUD Operations"].map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-green-500/20 text-green-600 dark:text-green-400 rounded-full text-sm font-medium border border-green-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-white dark:bg-slate-700 rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-4">Key Achievements</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span>Implemented complete CRUD operations for all entities</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span>Designed responsive user interface for all devices</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span>Built secure authentication and role-based access</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span>Optimized database queries and relationships</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span>Implemented comprehensive form validation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Key Features</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Comprehensive academic management capabilities
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700"
              >
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-green-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-slate-600 dark:text-slate-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section className="py-16 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Project Screenshots</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Visual overview of the LMD System interface and functionality
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {screenshots.map((screenshot) => (
              <div
                key={screenshot.id}
                className="bg-white dark:bg-slate-700 rounded-xl overflow-hidden shadow-lg"
              >
                <div className="aspect-video bg-slate-200 dark:bg-slate-600 overflow-hidden">
                  <img
                    src={screenshot.image}
                    alt={screenshot.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `
                          <div class="flex items-center justify-center h-full text-center">
                            <div>
                              <svg class="h-16 w-16 text-slate-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                              </svg>
                              <p class="text-slate-500 dark:text-slate-400">Screenshot not found</p>
                              <p class="text-sm text-slate-400 mt-2">Expected: ${screenshot.image}</p>
                            </div>
                          </div>
                        `;
                      }
                    }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{screenshot.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300">{screenshot.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Technical Implementation</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-3">Frontend Technologies</h3>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                    <li>• HTML5 semantic markup for accessibility</li>
                    <li>• CSS3 with responsive design principles</li>
                    <li>• JavaScript for interactive functionality</li>
                    <li>• Modern UI/UX design patterns</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-3">Backend Architecture</h3>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                    <li>• PHP server-side scripting and logic</li>
                    <li>• MySQL database with optimized queries</li>
                    <li>• RESTful API design principles</li>
                    <li>• Secure authentication and session management</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6">Project Impact</h2>
              <div className="space-y-6">
                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6">
                  <h3 className="text-lg font-bold mb-2 text-green-800 dark:text-green-200">
                    Academic Efficiency
                  </h3>
                  <p className="text-green-700 dark:text-green-300">
                    Streamlined student enrollment and course management processes
                  </p>
                </div>
                
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
                  <h3 className="text-lg font-bold mb-2 text-blue-800 dark:text-blue-200">
                    Data Management
                  </h3>
                  <p className="text-blue-700 dark:text-blue-300">
                    Centralized academic records with secure data handling
                  </p>
                </div>
                
                <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6">
                  <h3 className="text-lg font-bold mb-2 text-purple-800 dark:text-purple-200">
                    User Experience
                  </h3>
                  <p className="text-purple-700 dark:text-purple-300">
                    Intuitive interface reducing administrative workload
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="bg-slate-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-400">
            LMD System - University Management Platform | Full-Stack Web Development
          </p>
        </div>
      </div>
    </div>
  );
};

export default LMDSystemShowcase;

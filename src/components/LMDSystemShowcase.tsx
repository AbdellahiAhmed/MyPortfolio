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
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <button
              onClick={onBack}
              className="flex items-center space-x-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors backdrop-blur-sm"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Portfolio</span>
            </button>
          </div>

          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-md border border-white/20">
                <Server className="h-10 w-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">LMD System</h1>
            <p className="text-xl md:text-2xl text-emerald-100 mb-8 max-w-3xl mx-auto">
              University platform for student and course management with comprehensive academic features
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="https://github.com/AbdellahiAhmed/Syst-me_LMD"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors backdrop-blur-sm border border-white/20"
              >
                <Github className="h-5 w-5" />
                <span>View Code</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Project Overview */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">Project Overview</h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                LMD System is a comprehensive university management platform designed to streamline
                academic operations. Built with modern web technologies, it provides a complete
                solution for student enrollment, course management, and academic record keeping.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                The system features role-based access control, form validation, and a user-friendly
                interface that simplifies complex academic processes for students, faculty, and administrators.
              </p>

              <div className="flex flex-wrap gap-3">
                {["HTML", "CSS", "JavaScript", "PHP", "MySQL", "CRUD Operations"].map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-full text-sm font-medium border border-emerald-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass-card bg-white/50 dark:bg-slate-800/50 rounded-2xl p-8 shadow-xl border border-slate-200 dark:border-slate-700">
              <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">Key Achievements</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                  <span className="text-slate-700 dark:text-slate-300">Implemented complete CRUD operations for all entities</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                  <span className="text-slate-700 dark:text-slate-300">Designed responsive user interface for all devices</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                  <span className="text-slate-700 dark:text-slate-300">Built secure authentication and role-based access</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                  <span className="text-slate-700 dark:text-slate-300">Optimized database queries and relationships</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                  <span className="text-slate-700 dark:text-slate-300">Implemented comprehensive form validation</span>
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
            <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">Key Features</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Comprehensive academic management capabilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="glass-card bg-white/50 dark:bg-slate-800/50 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 hover:border-emerald-500/30 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">{feature.title}</h3>
                <p className="text-slate-600 dark:text-slate-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">Project Screenshots</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Visual overview of the LMD System interface and functionality
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {screenshots.map((screenshot) => (
              <div
                key={screenshot.id}
                className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700"
              >
                <div className="aspect-video bg-slate-200 dark:bg-slate-700 overflow-hidden relative group">
                  <img
                    src={screenshot.image}
                    alt={screenshot.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `
                          <div class="flex items-center justify-center h-full text-center p-6">
                            <div>
                              <div class="w-16 h-16 bg-slate-300 dark:bg-slate-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <BookOpen className="h-8 w-8 text-slate-500 dark:text-slate-400" />
                              </div>
                              <p class="text-slate-500 dark:text-slate-400 font-medium">Screenshot Preview</p>
                              <p class="text-xs text-slate-400 mt-2 font-mono">${screenshot.image}</p>
                            </div>
                          </div>
                        `;
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">{screenshot.title}</h3>
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
              <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">Technical Implementation</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-3 text-slate-800 dark:text-slate-200">Frontend Technologies</h3>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                    <li>• HTML5 semantic markup for accessibility</li>
                    <li>• CSS3 with responsive design principles</li>
                    <li>• JavaScript for interactive functionality</li>
                    <li>• Modern UI/UX design patterns</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3 text-slate-800 dark:text-slate-200">Backend Architecture</h3>
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
              <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">Project Impact</h2>
              <div className="space-y-6">
                <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-6 border border-emerald-100 dark:border-emerald-800">
                  <h3 className="text-lg font-bold mb-2 text-emerald-800 dark:text-emerald-200">
                    Academic Efficiency
                  </h3>
                  <p className="text-emerald-700 dark:text-emerald-300">
                    Streamlined student enrollment and course management processes
                  </p>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border border-blue-100 dark:border-blue-800">
                  <h3 className="text-lg font-bold mb-2 text-blue-800 dark:text-blue-200">
                    Data Management
                  </h3>
                  <p className="text-blue-700 dark:text-blue-300">
                    Centralized academic records with secure data handling
                  </p>
                </div>

                <div className="bg-teal-50 dark:bg-teal-900/20 rounded-lg p-6 border border-teal-100 dark:border-teal-800">
                  <h3 className="text-lg font-bold mb-2 text-teal-800 dark:text-teal-200">
                    User Experience
                  </h3>
                  <p className="text-teal-700 dark:text-teal-300">
                    Intuitive interface reducing administrative workload
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="bg-slate-950 text-white py-8 border-t border-slate-800">
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

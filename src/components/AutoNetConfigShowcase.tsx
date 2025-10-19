import React from 'react';
import { ArrowLeft, Github, ExternalLink, Network, Server, Shield, Zap, Monitor, Database } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';

interface AutoNetConfigShowcaseProps {
  onBack: () => void;
}

const AutoNetConfigShowcase: React.FC<AutoNetConfigShowcaseProps> = ({ onBack }) => {
  const { t } = useTranslation();

  const screenshots = [
    {
      id: 1,
      title: "Dashboard Overview",
      description: "Real-time network monitoring dashboard showing device status and connectivity",
      image: "/autonetconfig/dashboard.png",
      alt: "AutoNetConfig Dashboard"
    },
    {
      id: 2,
      title: "Device Configuration",
      description: "Automated device configuration interface with EVE-NG integration",
      image: "/autonetconfig/device-config.png",
      alt: "Device Configuration Interface"
    },
    {
      id: 3,
      title: "Network Topology",
      description: "Visual network topology mapping and device relationships",
      image: "/autonetconfig/topology.png",
      alt: "Network Topology View"
    },
    {
      id: 4,
      title: "Automation Scripts",
      description: "Python automation scripts for network configuration management",
      image: "/autonetconfig/scripts.png",
      alt: "Automation Scripts Interface"
    }
  ];

  const features = [
    {
      icon: Network,
      title: "Real-time Monitoring",
      description: "Live network device status and performance metrics"
    },
    {
      icon: Zap,
      title: "Automated Configuration",
      description: "Python-based automation for network device setup"
    },
    {
      icon: Server,
      title: "EVE-NG Integration",
      description: "Seamless integration with EVE-NG virtual lab environment"
    },
    {
      icon: Monitor,
      title: "Web Interface",
      description: "Modern Flask-based web dashboard for easy management"
    },
    {
      icon: Database,
      title: "Data Management",
      description: "Comprehensive device inventory and configuration tracking"
    },
    {
      icon: Shield,
      title: "Security Features",
      description: "Secure device access and configuration validation"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black dark:bg-slate-900 dark:text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
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
                <Network className="h-10 w-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">AutoNetConfig</h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Hybrid real-time visualization and automation tool for network infrastructure
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="https://github.com/AbdellahiAhmed/AutoNetConfig"
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
                AutoNetConfig is a comprehensive network automation platform developed during my internship at Moov Mauritel. 
                It combines real-time network monitoring with automated configuration management using modern web technologies 
                and Python scripting.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
                Built with Flask, EVE-NG integration, and Python automation scripts, this tool streamlines network 
                administration tasks and provides real-time visibility into network infrastructure.
              </p>
              
              <div className="flex flex-wrap gap-3">
                {["Python", "Flask", "EVE-NG", "Nmap", "Linux", "Network Automation"].map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-blue-500/20 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium border border-blue-500/30"
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
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span>Designed scalable network automation architecture</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span>Implemented real-time device monitoring and alerting</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span>Created Python scripts for automated configuration management</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span>Integrated with EVE-NG virtual lab environment</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span>Collaborated with engineering teams for deployment</span>
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
              Comprehensive network automation and monitoring capabilities
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700"
              >
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-blue-500" />
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
              Visual overview of the AutoNetConfig interface and functionality
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
                  <h3 className="text-xl font-bold mb-3">Backend Architecture</h3>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                    <li>• Flask web framework for API and web interface</li>
                    <li>• Python automation scripts for device configuration</li>
                    <li>• EVE-NG integration for virtual lab management</li>
                    <li>• Nmap integration for network discovery and scanning</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-3">Frontend Technologies</h3>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                    <li>• Modern responsive web interface</li>
                    <li>• Real-time data visualization</li>
                    <li>• Interactive network topology mapping</li>
                    <li>• Mobile-friendly dashboard design</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6">Project Impact</h2>
              <div className="space-y-6">
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
                  <h3 className="text-lg font-bold mb-2 text-blue-800 dark:text-blue-200">
                    Efficiency Improvement
                  </h3>
                  <p className="text-blue-700 dark:text-blue-300">
                    Reduced network configuration time by 70% through automation
                  </p>
                </div>
                
                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6">
                  <h3 className="text-lg font-bold mb-2 text-green-800 dark:text-green-200">
                    Error Reduction
                  </h3>
                  <p className="text-green-700 dark:text-green-300">
                    Minimized configuration errors with automated validation
                  </p>
                </div>
                
                <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6">
                  <h3 className="text-lg font-bold mb-2 text-purple-800 dark:text-purple-200">
                    Real-time Monitoring
                  </h3>
                  <p className="text-purple-700 dark:text-purple-300">
                    Enhanced network visibility and proactive issue detection
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
            AutoNetConfig - Network Automation Platform | Developed at Moov Mauritel
          </p>
        </div>
      </div>
    </div>
  );
};

export default AutoNetConfigShowcase;

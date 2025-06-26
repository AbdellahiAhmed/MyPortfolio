import { Network, Server, Shield, Github, ExternalLink } from 'lucide-react';

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="px-4 py-2 bg-orange-500/20 text-orange-400 rounded-full text-sm font-medium border border-orange-500/30">
            Featured Projects
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-6">
            <span className="text-black dark:bg-gradient-to-r dark:from-white dark:to-slate-300 dark:bg-clip-text dark:text-transparent">
              My Work
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* AutoNetConfig Project */}
          <div className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center border border-blue-500/30 mr-4">
                  <Network className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-black dark:text-white">AutoNetConfig</h3>
              </div>
              <p className="text-black dark:text-slate-300 mb-6 leading-relaxed">
                Advanced network automation tool for configuring and managing network devices at scale. 
                Features automated backup, configuration deployment, and real-time monitoring.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full border border-blue-500/30">Python</span>
                <span className="px-3 py-1 bg-green-500/20 text-green-300 text-sm rounded-full border border-green-500/30">Network Automation</span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full border border-purple-500/30">CLI</span>
              </div>
              <div className="flex space-x-4">
                <a  className="flex items-center text-purple-400 hover:text-purple-300 transition-colors">
                  <Github className="h-4 w-4 mr-2" />
                  Code
                </a>
                <a  className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Will be available Soon!
                </a>
              </div>
            </div>
          </div>

          {/* LMD System Project */}
          <div className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-green-500/50 transition-all duration-300 hover:scale-105">
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center border border-green-500/30 mr-4">
                  <Server className="h-6 w-6 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-black dark:text-white">LMD System</h3>
              </div>
              <p className="text-black dark:text-slate-300 mb-6 leading-relaxed">
                University student and course management system built with HTML, CSS, JavaScript, and PHP. Supports CRUD
                operations, form validation, and role-based access.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full border border-blue-500/30">HTML/CSS/JS</span>
                <span className="px-3 py-1 bg-red-500/20 text-red-300 text-sm rounded-full border border-red-500/30">PHP</span>
                <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 text-sm rounded-full border border-yellow-500/30">MySQL</span>
              </div>
              <div className="flex space-x-4">
                <a  className="flex items-center text-purple-400 hover:text-purple-300 transition-colors">
                  <Github className="h-4 w-4 mr-2" />
                  Code
                </a>
                <a  className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Live Demo
                </a>
              </div>
            </div>
          </div>

          {/* Bank Management System */}
          <div className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-orange-500/50 transition-all duration-300 hover:scale-105">
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-xl flex items-center justify-center border border-orange-500/30 mr-4">
                  <Shield className="h-6 w-6 text-orange-400" />
                </div>
                <h3 className="text-xl font-bold text-black dark:text-white">Bank Management System</h3>
              </div>
              <p className="text-black dark:text-slate-300 mb-6 leading-relaxed">
                Full-featured banking application with secure authentication, transaction management, 
                and comprehensive reporting. Built with modern security practices.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-orange-500/20 text-orange-300 text-sm rounded-full border border-orange-500/30">Java</span>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full border border-blue-500/30">Swing</span>
                <span className="px-3 py-1 bg-green-500/20 text-green-300 text-sm rounded-full border border-green-500/30">MySQL</span>
              </div>
              <div className="flex space-x-4">
                <a href="https://github.com/AbdellahiAhmed/Syst-me_de_Gestion_du_Bank" className="flex items-center text-purple-400 hover:text-purple-300 transition-colors">
                  <Github className="h-4 w-4 mr-2" />
                  Code
                </a>
                <a href="https://github.com/AbdellahiAhmed/Syst-me_de_Gestion_du_Bank/blob/main/README.md" className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Documentation
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://github.com/AbdellahiAhmed?tab=repositories" 
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-slate-700 to-slate-600 hover:from-slate-600 hover:to-slate-500 text-white rounded-xl transition-all duration-300 hover:scale-105 border border-slate-600"
          >
            <Github className="h-5 w-5 mr-3" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

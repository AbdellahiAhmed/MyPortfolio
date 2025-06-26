import { Server, Code, Terminal, BookOpen } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium border border-purple-500/30">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-6">
            <span className="text-black dark:bg-gradient-to-r dark:from-white dark:to-slate-300 dark:bg-clip-text dark:text-transparent">
              My Journey
            </span>
          </h2>
          <p className="text-xl text-black dark:text-slate-300 max-w-3xl mx-auto">
            From networking enthusiast to aspiring full-stack developer
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50">
              <h3 className="text-2xl font-bold mb-6 text-black dark:bg-gradient-to-r dark:from-purple-400 dark:to-cyan-400 dark:bg-clip-text dark:text-transparent">
                My Story
              </h3>
              <div className="space-y-4 text-black dark:text-slate-300 leading-relaxed">
                <p>
                  As a dedicated networking student, I've immersed myself in the world of network infrastructure, 
                  automation, and system administration. My passion for technology drives me to continuously 
                  learn and build tools that solve real-world problems.
                </p>
                <p>
                  Currently pursuing my journey to become both a network administrator and full-stack developer, 
                  I'm working on exciting projects that combine network automation with modern web technologies. 
                  My experience with Linux systems, Python programming, and network simulation tools like GNS3 
                  and EVE-NG gives me a unique perspective on infrastructure and development.
                </p>
                <p>
                  I believe in the power of automation and clean code to transform how we manage and interact 
                  with network infrastructure. Every project I work on is an opportunity to learn, grow, and 
                  contribute to the tech community.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 group">
              <div className="mb-4 relative">
                <Server className="h-12 w-12 text-purple-400 group-hover:scale-110 transition-transform" />
                <div className="absolute inset-0 bg-purple-400/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <h4 className="font-semibold text-black dark:text-white mb-2">Network Admin</h4>
              <p className="text-sm text-slate-700 dark:text-slate-400">
                Specializing in network automation and infrastructure management
              </p>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 group">
              <div className="mb-4 relative">
                <Code className="h-12 w-12 text-cyan-400 group-hover:scale-110 transition-transform" />
                <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <h4 className="font-semibold text-black dark:text-white mb-2">Full-Stack Dev</h4>
              <p className="text-sm text-slate-700 dark:text-slate-400">
                Building web applications with Python Flask and modern frontend frameworks
              </p>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-green-500/50 transition-all duration-300 group">
              <div className="mb-4 relative">
                <Terminal className="h-12 w-12 text-green-400 group-hover:scale-110 transition-transform" />
                <div className="absolute inset-0 bg-green-400/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <h4 className="font-semibold text-black dark:text-white mb-2">Linux Enthusiast</h4>
              <p className="text-sm text-slate-700 dark:text-slate-400">
                Deep expertise in Linux systems and command-line automation
              </p>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-orange-500/50 transition-all duration-300 group">
              <div className="mb-4 relative">
                <BookOpen className="h-12 w-12 text-orange-400 group-hover:scale-110 transition-transform" />
                <div className="absolute inset-0 bg-orange-400/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <h4 className="font-semibold text-black dark:text-white mb-2">Continuous Learner</h4>
              <p className="text-sm text-slate-700 dark:text-slate-400">
                Always exploring new technologies and sharing knowledge with the community
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

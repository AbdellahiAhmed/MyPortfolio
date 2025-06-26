import React from 'react';
import { ChevronDown, Terminal, MessageSquare } from 'lucide-react';

const HeroSection = () => {
  const scrollTo = (elementId: string) => {
    document.getElementById(elementId)?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section id="home" className="pt-16 min-h-screen flex items-center justify-center relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center relative z-10">
        <div className="mb-8">
          <div className="relative inline-block mb-8">
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 p-1 mx-auto">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center overflow-hidden">
                <img src="/profile.jpg" alt="Profile" className="w-full h-full object-cover rounded-full" />
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-cyan-500/30 rounded-full blur-xl animate-pulse"></div>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="text-black dark:bg-gradient-to-r dark:from-white dark:to-slate-300 dark:bg-clip-text dark:text-transparent">
            Hi, I'm <span className="text-purple-700 dark:text-purple-400">
            Abdellahi.
          </span>
          </span>
          <br />
          <span className="text-black dark:bg-gradient-to-r dark:from-purple-400 dark:to-cyan-400 dark:bg-clip-text dark:text-transparent">
            Network Architect
          </span>
          <br />
          <span className="text-3xl md:text-4xl text-black dark:bg-gradient-to-r dark:from-slate-300 dark:to-slate-400 dark:bg-clip-text dark:text-transparent">
            & Full-Stack Developer
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-black dark:text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
          I'm not just learning tech - I'm building real tools to shape my world.
          Driven by purpose, discipline, and vision, I specialize in <span className="text-cyan-700 dark:text-cyan-400">Network Engineering</span>, 
          <span className="text-purple-700 dark:text-purple-400"> Linux</span>, and  
          <span className="text-cyan-700 dark:text-cyan-400"> Backend Development </span>
          I believe in deep learning, creating impact, and never giving up.  
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button
            onClick={() => scrollTo('projects')}
            className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 flex items-center space-x-3"
          >
            <Terminal className="h-5 w-5 group-hover:rotate-12 transition-transform" />
            <span>View My Work</span>
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="group px-8 py-4 border-2 border-purple-500/50 hover:border-purple-400 rounded-xl font-semibold transition-all duration-300 hover:bg-purple-500/10 flex items-center space-x-3"
          >
            <MessageSquare className="h-5 w-5 group-hover:scale-110 transition-transform" />
            <span>Get In Touch</span>
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-slate-400" />
      </div>
    </section>
  );
};

export default HeroSection;

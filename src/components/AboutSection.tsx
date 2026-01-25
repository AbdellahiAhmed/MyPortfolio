import { User, Code, Globe, Coffee, Quote, TrendingUp, BarChart3, Zap, Target } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

const AboutSection = () => {
  const { t } = useTranslation();
  const [stats, setStats] = useState({ experience: 0, projects: 0, clients: 0, code: 0 });

  // Animate counters on mount
  useEffect(() => {
    const duration = 2000;
    const fps = 60;
    const frames = (duration / 1000) * fps;
    const targets = { experience: 5, projects: 20, clients: 10, code: 50000 };

    let frame = 0;
    const interval = setInterval(() => {
      frame++;
      const progress = frame / frames;

      setStats({
        experience: Math.floor(targets.experience * progress),
        projects: Math.floor(targets.projects * progress),
        clients: Math.floor(targets.clients * progress),
        code: Math.floor(targets.code * progress),
      });

      if (frame >= frames) {
        setStats(targets);
        clearInterval(interval);
      }
    }, 1000 / fps);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-black">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,255,217,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,255,217,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Glowing Orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-lime-500/20 rounded-full blur-3xl animate-pulse-slow delay-1000" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mb-16 animate-slide-up-fade">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-black/60 border-2 border-cyan-500/50 rounded-lg mb-6 font-mono backdrop-blur-sm">
            <User className="h-4 w-4 text-cyan-400" />
            <span className="text-sm font-bold text-cyan-400 tracking-wider uppercase">{t('about.section')}</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">
            <span className="bg-gradient-to-r from-cyan-400 via-lime-400 to-amber-400 bg-clip-text text-transparent drop-shadow-[0_0_50px_rgba(0,255,217,0.5)]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              {t('about.title')}
            </span>
          </h2>
        </div>

        {/* Stats Dashboard */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16 animate-slide-up-fade delay-100">
          <div className="bg-black/60 border border-cyan-500/30 rounded-lg p-6 backdrop-blur-sm hover:border-cyan-400 transition-all group hover:shadow-[0_0_30px_rgba(0,255,217,0.3)]">
            <div className="flex items-center justify-between mb-3">
              <TrendingUp className="h-6 w-6 text-cyan-400" />
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            </div>
            <div className="text-4xl font-bold text-white font-mono mb-2">{stats.experience}+</div>
            <div className="text-sm text-cyan-400/70 uppercase tracking-wider font-mono">Years Exp</div>
            <div className="mt-3 h-1 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-cyan-400 shadow-[0_0_10px_rgba(0,255,217,0.5)] animate-pulse" style={{ width: '100%' }} />
            </div>
          </div>

          <div className="bg-black/60 border border-lime-500/30 rounded-lg p-6 backdrop-blur-sm hover:border-lime-400 transition-all group hover:shadow-[0_0_30px_rgba(57,255,20,0.3)]">
            <div className="flex items-center justify-between mb-3">
              <BarChart3 className="h-6 w-6 text-lime-400" />
              <div className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
            </div>
            <div className="text-4xl font-bold text-white font-mono mb-2">{stats.projects}+</div>
            <div className="text-sm text-lime-400/70 uppercase tracking-wider font-mono">Projects</div>
            <div className="mt-3 h-1 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-lime-400 shadow-[0_0_10px_rgba(57,255,20,0.5)] animate-pulse" style={{ width: '85%' }} />
            </div>
          </div>

          <div className="bg-black/60 border border-amber-500/30 rounded-lg p-6 backdrop-blur-sm hover:border-amber-400 transition-all group hover:shadow-[0_0_30px_rgba(255,176,0,0.3)]">
            <div className="flex items-center justify-between mb-3">
              <Target className="h-6 w-6 text-amber-400" />
              <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            </div>
            <div className="text-4xl font-bold text-white font-mono mb-2">{stats.clients}+</div>
            <div className="text-sm text-amber-400/70 uppercase tracking-wider font-mono">Clients</div>
            <div className="mt-3 h-1 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-amber-400 shadow-[0_0_10px_rgba(255,176,0,0.5)] animate-pulse" style={{ width: '90%' }} />
            </div>
          </div>

          <div className="bg-black/60 border border-white/20 rounded-lg p-6 backdrop-blur-sm hover:border-white/40 transition-all group">
            <div className="flex items-center justify-between mb-3">
              <Code className="h-6 w-6 text-white/60" />
              <div className="w-2 h-2 rounded-full bg-white/60 animate-pulse" />
            </div>
            <div className="text-4xl font-bold text-white font-mono mb-2">{stats.code.toLocaleString()}+</div>
            <div className="text-sm text-white/50 uppercase tracking-wider font-mono">Lines Code</div>
            <div className="mt-3 h-1 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-white/60 shadow-[0_0_10px_rgba(255,255,255,0.3)] animate-pulse" style={{ width: '95%' }} />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left Column - Story */}
          <div className="space-y-6 animate-slideInLeft">
            <div className="bg-black/60 border border-cyan-500/30 rounded-lg p-8 backdrop-blur-sm hover:border-cyan-400 transition-all hover:shadow-[0_0_30px_rgba(0,255,217,0.2)]">
              <div className="flex items-center space-x-3 mb-6">
                <User className="h-6 w-6 text-cyan-400" />
                <h3 className="text-2xl font-bold text-white font-mono">{t('about.storyTitle')}</h3>
              </div>

              <div className="space-y-4 text-white/70 leading-relaxed font-mono text-sm">
                <p className="border-l-2 border-cyan-500/30 pl-4">
                  <span className="text-cyan-400">&gt;</span> {t('about.story1')}
                </p>
                <p className="border-l-2 border-lime-500/30 pl-4">
                  <span className="text-lime-400">&gt;</span> {t('about.story2')}
                </p>
                <p className="border-l-2 border-amber-500/30 pl-4">
                  <span className="text-amber-400">&gt;</span> {t('about.story3')}
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {['Problem Solver', 'Team Player', 'Continuous Learner', 'Tech Enthusiast'].map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 text-white/70 rounded text-sm font-mono hover:border-white/30 hover:text-white transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Quote Section */}
            <div className="relative bg-black/80 border-2 border-lime-500/50 rounded-lg p-8 backdrop-blur-sm overflow-hidden group hover:shadow-[0_0_30px_rgba(57,255,20,0.3)] transition-all">
              <Quote className="absolute top-4 right-4 h-16 w-16 text-lime-400/10" />
              <blockquote className="relative z-10">
                <div className="text-xs font-mono text-lime-400/60 mb-3 uppercase tracking-wider">
                  <span className="text-white/40">$</span> quote.txt
                </div>
                <p className="text-lg font-medium text-white mb-4 leading-relaxed">
                  "Innovation distinguishes between a leader and a follower. Quality is not an act, it is a habit."
                </p>
                <footer className="text-lime-400 font-mono text-sm">
                  — Steve Jobs / Aristotle
                </footer>
              </blockquote>
            </div>
          </div>

          {/* Right Column - Values Grid */}
          <div className="grid grid-cols-2 gap-4 animate-slideInRight">
            <div className="bg-black/60 border border-cyan-500/30 rounded-lg p-6 backdrop-blur-sm hover:border-cyan-400 transition-all hover:shadow-[0_0_20px_rgba(0,255,217,0.2)] group">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-cyan-500/10 border border-cyan-500/30 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Code className="h-6 w-6 text-cyan-400" />
                </div>
              </div>
              <h4 className="font-bold text-white mb-1 text-center font-mono">Clean Code</h4>
              <p className="text-xs text-white/60 text-center font-mono">Maintainable & Scalable</p>
            </div>

            <div className="bg-black/60 border border-lime-500/30 rounded-lg p-6 backdrop-blur-sm hover:border-lime-400 transition-all hover:shadow-[0_0_20px_rgba(57,255,20,0.2)] group mt-8">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-lime-500/10 border border-lime-500/30 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Globe className="h-6 w-6 text-lime-400" />
                </div>
              </div>
              <h4 className="font-bold text-white mb-1 text-center font-mono">Global Mindset</h4>
              <p className="text-xs text-white/60 text-center font-mono">International Standards</p>
            </div>

            <div className="bg-black/60 border border-amber-500/30 rounded-lg p-6 backdrop-blur-sm hover:border-amber-400 transition-all hover:shadow-[0_0_20px_rgba(255,176,0,0.2)] group -mt-8">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-amber-500/10 border border-amber-500/30 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Zap className="h-6 w-6 text-amber-400" />
                </div>
              </div>
              <h4 className="font-bold text-white mb-1 text-center font-mono">Fast Delivery</h4>
              <p className="text-xs text-white/60 text-center font-mono">Agile & Efficient</p>
            </div>

            <div className="bg-black/60 border border-white/20 rounded-lg p-6 backdrop-blur-sm hover:border-white/40 transition-all group">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-white/5 border border-white/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Coffee className="h-6 w-6 text-white/60" />
                </div>
              </div>
              <h4 className="font-bold text-white mb-1 text-center font-mono">Dedicated</h4>
              <p className="text-xs text-white/60 text-center font-mono">24/7 Commitment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

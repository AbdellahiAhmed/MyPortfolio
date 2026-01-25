import { ExternalLink, Github, Code, Layers, Layout, Sparkles, ArrowUpRight, Code2, Terminal, FolderOpen, FileCode } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

interface Project {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  image?: string;
  featured?: boolean;
}

const ProjectsSection = () => {
  const { t } = useTranslation();
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = t('projects.items', { returnObjects: true }) as Project[];

  // Image mapping for projects
  const projectImages: Record<string, string> = {
    "AutoNetConfig": "/autonetconfig/dashboard.png",
    "LMD System": "/lmd-system/admin-panel.png"
  };

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-black">
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
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl animate-pulse-slow delay-1000" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mb-16 animate-slide-up-fade">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-black/60 border-2 border-lime-500/50 rounded-lg mb-6 font-mono backdrop-blur-sm">
            <FolderOpen className="h-4 w-4 text-lime-400" />
            <span className="text-sm font-bold text-lime-400 tracking-wider uppercase">{t('projects.section')}</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">
            <span className="bg-gradient-to-r from-cyan-400 via-lime-400 to-amber-400 bg-clip-text text-transparent drop-shadow-[0_0_50px_rgba(57,255,20,0.5)]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              {t('projects.title')}
            </span>
          </h2>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <p className="text-xl text-white/60 max-w-3xl font-mono">
              <span className="text-lime-400">$</span> {t('projects.subtitle')}
            </p>
            <a
              href="https://github.com/AbdellahiAhmed"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-5 py-3 bg-black/60 border-2 border-cyan-500/50 text-cyan-400 rounded-lg font-bold font-mono uppercase tracking-wider hover:shadow-[0_0_30px_rgba(0,255,217,0.5)] transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm"
            >
              <Github className="h-5 w-5" />
              <span>{t('projects.all_projects')}</span>
            </a>
          </div>
        </div>

        {/* Featured Projects - Terminal Style */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {featuredProjects.map((project, index) => {
            const image = projectImages[project.title];
            const borderColor = index === 0 ? 'border-cyan-500/50' : 'border-lime-500/50';
            const textColor = index === 0 ? 'text-cyan-400' : 'text-lime-400';
            const glowColor = index === 0 ? 'shadow-[0_0_30px_rgba(0,255,217,0.3)]' : 'shadow-[0_0_30px_rgba(57,255,20,0.3)]';

            return (
              <div
                key={index}
                className={`relative bg-black/80 border-2 ${borderColor} rounded-lg overflow-hidden backdrop-blur-sm transition-all duration-500 hover:${glowColor} group animate-slide-up-fade`}
                style={{ animationDelay: `${index * 150}ms` }}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Terminal Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/10">
                  <div className="flex items-center space-x-3">
                    <div className="flex space-x-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-amber-400" />
                      <div className="w-3 h-3 rounded-full bg-lime-400" />
                    </div>
                    <Terminal className={`h-4 w-4 ${textColor}`} />
                    <span className="text-xs font-mono text-white/60">project_{index + 1}.sh</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Sparkles className={`h-4 w-4 ${textColor} animate-pulse`} />
                    <span className={`text-xs font-mono ${textColor} uppercase tracking-wider font-bold`}>
                      {t('projects.case_study')}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-5">
                  {/* Title */}
                  <div>
                    <div className={`text-sm font-mono ${textColor} mb-2`}>
                      <span className="text-white/40">$</span> cat project_info.txt
                    </div>
                    <h3 className="text-3xl font-bold text-white font-mono mb-3">
                      {project.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed font-mono text-sm">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono text-white/60 uppercase tracking-wider">
                        <span className={textColor}>&gt;</span> stack.config
                      </span>
                      <span className="flex items-center space-x-1 text-xs font-mono text-white/60">
                        <Code className="h-3.5 w-3.5" />
                        <span>{project.tags.length} technologies</span>
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-white/5 border border-white/10 rounded text-xs font-mono text-white/80 hover:border-white/30 hover:text-white transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Image - Terminal Window */}
                  {image && (
                    <div className="relative rounded-lg overflow-hidden border border-white/10">
                      <div className="h-7 bg-white/5 flex items-center px-3 border-b border-white/10">
                        <FileCode className="h-3.5 w-3.5 text-white/40 mr-2" />
                        <span className="text-xs font-mono text-white/40 truncate">
                          {project.github?.split('/').pop() || 'preview.png'}
                        </span>
                      </div>
                      <div className="aspect-video bg-black relative overflow-hidden">
                        <img
                          src={image}
                          alt={project.title}
                          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-${hoveredProject === index ? '60' : '40'} transition-opacity`} />
                      </div>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center space-x-2 px-4 py-2.5 bg-${index === 0 ? 'cyan' : 'lime'}-500/10 border border-${index === 0 ? 'cyan' : 'lime'}-500/50 ${textColor} rounded-lg font-mono text-sm font-bold uppercase tracking-wider hover:shadow-[0_0_20px_rgba(${index === 0 ? '0,255,217' : '57,255,20'},0.4)] transition-all hover:-translate-y-0.5`}
                      >
                        <Github className="h-4 w-4" />
                        <span>{t('projects.view_repo')}</span>
                      </a>
                    )}
                    {project.demo ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 px-4 py-2.5 bg-white/5 border border-white/20 text-white rounded-lg font-mono text-sm font-bold uppercase tracking-wider hover:border-white/40 transition-all hover:-translate-y-0.5"
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span>{t('projects.view_demo')}</span>
                      </a>
                    ) : (
                      <div className="inline-flex items-center space-x-2 px-4 py-2.5 bg-white/5 border border-white/10 text-white/40 rounded-lg font-mono text-sm font-bold uppercase tracking-wider">
                        <ExternalLink className="h-4 w-4" />
                        <span>{t('projects.coming_soon')}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Projects - File System View */}
        <div className="mt-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-2 font-mono flex items-center space-x-3">
                <Layout className="h-6 w-6 text-amber-400" />
                <span>
                  <span className="text-amber-400">//</span> {t('projects.more')}
                </span>
              </h3>
              <p className="text-white/60 font-mono text-sm flex items-center space-x-2">
                <ArrowUpRight className="h-4 w-4 text-amber-400" />
                <span>{t('projects.more_caption')}</span>
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <div
                key={index}
                className="bg-black/60 border border-white/10 rounded-lg p-5 backdrop-blur-sm hover:border-amber-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,176,0,0.2)] group animate-slide-up-fade"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center space-x-2">
                    <FolderOpen className="h-5 w-5 text-amber-400" />
                    <span className="text-xs uppercase tracking-wider text-white/40 font-mono">
                      PROJECT
                    </span>
                  </div>
                  <Code2 className="h-5 w-5 text-white/40 group-hover:text-amber-400 transition-colors" />
                </div>

                <h4 className="text-xl font-bold text-white mb-2 font-mono group-hover:text-amber-400 transition-colors">
                  {project.title}
                </h4>

                <p className="text-sm text-white/70 leading-relaxed mb-4 font-mono">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs font-mono text-white/70 hover:border-white/30 hover:text-white transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center space-x-4 pt-3 border-t border-white/10">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 text-cyan-400 hover:text-cyan-300 font-mono text-sm font-bold transition-colors"
                    >
                      <Github className="h-4 w-4" />
                      <span>{t('projects.code')}</span>
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 text-white/60 hover:text-white font-mono text-sm font-bold transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>{t('projects.live_demo')}</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

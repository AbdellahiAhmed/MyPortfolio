import { ExternalLink, Github, Code, Layers, Layout, Sparkles, ArrowUpRight, Code2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

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

  const projects = t('projects.items', { returnObjects: true }) as Project[];

  // Image mapping for projects
  const projectImages: Record<string, string> = {
    "AutoNetConfig": "/autonetconfig/dashboard.png",
    "LMD System": "/lmd-system/admin-panel.png"
  };

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-200px] right-[-150px] w-[420px] h-[420px] bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-150px] left-[-120px] w-[380px] h-[380px] bg-amber-500/10 rounded-full blur-3xl"></div>
        <div className="absolute inset-x-0 top-20 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-16 animate-slide-up-fade">
          <div>
            <span className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium border border-blue-500/20">
              {t('projects.section')}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-3">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
                {t('projects.title')}
              </span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl">
              {t('projects.subtitle')}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://github.com/AbdellahiAhmed"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              <Github className="h-5 w-5" />
              <span>{t('projects.all_projects')}</span>
            </a>
          </div>
        </div>

        {/* Featured Case Studies */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {featuredProjects.map((project, index) => {
            const image = projectImages[project.title];

            return (
              <div
                key={index}
                className="relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 shadow-xl hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-indigo-600/5 to-amber-500/10 opacity-80"></div>
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-amber-500"></div>
                <div className="relative p-7 space-y-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2">
                      <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-600/10 text-blue-700 dark:text-blue-300 border border-blue-500/20 text-xs font-semibold">
                        <Sparkles className="h-3.5 w-3.5" />
                        <span>{t('projects.case_study')}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    <div className="p-3 rounded-xl bg-white/80 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60 shadow-sm">
                      <Layers className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200/60 dark:border-slate-800/60 bg-white/60 dark:bg-slate-900/50 p-4">
                    <div className="flex items-center justify-between text-sm font-semibold text-slate-700 dark:text-slate-200 mb-3">
                      <span>{t('projects.stack')}</span>
                      <span className="flex items-center space-x-1 text-blue-600 dark:text-blue-400">
                        <Code className="h-4 w-4" />
                        <span>{project.tags.length} tech</span>
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-sm font-medium text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {image && (
                    <div className="relative rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-lg">
                      <div className="h-8 bg-slate-100 dark:bg-slate-800 flex items-center px-3 space-x-1 text-xs text-slate-500 dark:text-slate-400">
                        <div className="flex space-x-1">
                          <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                        </div>
                        <div className="ml-3 font-mono truncate">{project.github || 'localhost'}</div>
                      </div>
                      <div className="aspect-video bg-slate-900 relative overflow-hidden">
                        <img
                          src={image}
                          alt={project.title}
                          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent"></div>
                      </div>
                    </div>
                  )}

                  <div className="flex flex-wrap items-center gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
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
                        className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-semibold hover:border-blue-500 dark:hover:border-blue-500 transition-all"
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span>{t('projects.view_demo')}</span>
                      </a>
                    ) : (
                      <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 font-semibold">
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

        {/* Additional Work */}
        <div className="mt-12">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <Layout className="h-6 w-6 text-blue-500" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{t('projects.more')}</h3>
            </div>
            <div className="text-sm text-slate-500 dark:text-slate-400 flex items-center space-x-2">
              <ArrowUpRight className="h-4 w-4" />
              <span>{t('projects.more_caption')}</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <div
                key={index}
                className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col space-y-4 animate-slide-up-fade"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400 mb-1">
                      {t('projects.section')}
                    </p>
                    <h4 className="text-xl font-semibold text-slate-900 dark:text-white">{project.title}</h4>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-900/5 dark:bg-white/5 border border-slate-200 dark:border-slate-800">
                    <Code2 className="h-4 w-4 text-blue-500" />
                  </div>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center space-x-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 text-blue-600 dark:text-blue-400 font-semibold hover:underline"
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
                      className="inline-flex items-center space-x-1 text-slate-600 dark:text-slate-300 font-semibold hover:underline"
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

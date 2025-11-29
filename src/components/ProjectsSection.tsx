import { ExternalLink, Github, Code, Layers, Layout } from 'lucide-react';
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

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 relative overflow-hidden bg-slate-50 dark:bg-slate-900/50">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 animate-slide-up-fade">
          <span className="px-4 py-2 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium border border-blue-500/20 inline-block">
            {t('projects.section')}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
              {t('projects.title')}
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Showcase of my latest work and technical experiments.
          </p>
        </div>

        {/* Featured Projects - Zig Zag Layout */}
        <div className="space-y-32 mb-32">
          {featuredProjects.map((project, index) => {
            const isEven = index % 2 === 0;
            const image = projectImages[project.title];

            return (
              <div key={index} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20`}>
                {/* Image Side */}
                <div className="w-full lg:w-3/5 group perspective-1000">
                  <div className={`relative rounded-xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700 bg-slate-900 transform transition-all duration-500 hover:scale-[1.02] ${isEven ? 'hover:rotate-y-2' : 'hover:-rotate-y-2'}`}>
                    {/* Browser Toolbar */}
                    <div className="h-8 bg-slate-800 flex items-center px-4 space-x-2 border-b border-slate-700">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <div className="ml-4 flex-1 h-5 bg-slate-900/50 rounded text-xs text-slate-500 flex items-center px-2 font-mono overflow-hidden">
                        {project.github || 'localhost:3000'}
                      </div>
                    </div>
                    {/* Project Screenshot */}
                    <div className="relative aspect-video overflow-hidden">
                      {image ? (
                        <img
                          src={image}
                          alt={project.title}
                          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                          <Code className="h-16 w-16 text-slate-600" />
                        </div>
                      )}
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-300"></div>
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-2/5 space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-500/10 rounded-lg">
                      <Layers className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <span className="text-blue-600 dark:text-blue-400 font-bold tracking-wider text-sm uppercase">Featured Project</span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                    {project.title}
                  </h3>

                  <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium border border-slate-200 dark:border-slate-700">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-4 pt-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all shadow-lg shadow-blue-500/25 flex items-center space-x-2"
                      >
                        <Github className="h-5 w-5" />
                        <span>Source Code</span>
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-white dark:bg-slate-800 text-slate-700 dark:text-white border border-slate-200 dark:border-slate-700 rounded-xl font-semibold hover:border-blue-500 dark:hover:border-blue-500 transition-all flex items-center space-x-2"
                      >
                        <ExternalLink className="h-5 w-5" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Other Projects - Grid Layout */}
        <div className="mt-32">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-12 flex items-center">
            <Layout className="h-6 w-6 mr-3 text-blue-500" />
            Other Noteworthy Projects
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <div
                key={index}
                className="group glass-card rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-blue-500/10 rounded-xl text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Code className="h-6 w-6" />
                  </div>
                  <div className="flex space-x-3">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-500 transition-colors">
                        <Github className="h-5 w-5" />
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-500 transition-colors">
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>

                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h4>

                <p className="text-slate-600 dark:text-slate-400 mb-6 flex-1 leading-relaxed text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs font-mono text-slate-500 dark:text-slate-400">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <a
            href="https://github.com/AbdellahiAhmed"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
          >
            <Github className="h-5 w-5" />
            <span>View All Projects on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

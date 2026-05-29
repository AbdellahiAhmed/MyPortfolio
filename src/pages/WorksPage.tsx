import { ArrowUpRight, ArrowLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';

interface Project {
  title: string;
  description: string;
  tags: string[];
  category?: string;
  image?: string;
  github?: string;
  demo?: string;
  featured?: boolean;
  type?: 'mobile' | 'web';
  displayUrl?: string;
  hideUrl?: boolean;
}

const WorksPage = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);

  const projects = t('projects.items', { returnObjects: true }) as Project[];
  const categories = t('projects.categories', { returnObjects: true }) as string[];

  const categoryCounts = useMemo(() => {
    const counts: number[] = [projects.length];
    for (let i = 1; i < categories.length; i++) {
      counts.push(projects.filter((p) => p.category === categories[i]).length);
    }
    return counts;
  }, [projects, categories]);

  const filteredProjects = useMemo(() => {
    return activeCategory === 0
      ? projects
      : projects.filter((p) => p.category === categories[activeCategory]);
  }, [activeCategory, projects, categories]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsVisible(true);
  }, []);

  return (
    <main className="bg-white dark:bg-slate-950 pt-32 pb-24 md:pt-40">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">

        {/* Back link */}
        <Link
          to="/"
          className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-slate-500 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white transition-colors"
        >
          <ArrowLeft className="h-3 w-3 transition-transform group-hover:-translate-x-0.5" strokeWidth={1.75} />
          {t('projects.back_to_works')}
        </Link>

        {/* Header */}
        <div
          className={`mt-10 mb-16 max-w-3xl transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="flex items-center gap-4">
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
              Index — {t('projects.section')}
            </span>
            <span className="h-px flex-1 max-w-[120px] bg-slate-300 dark:bg-slate-700" />
            <span className="font-mono text-[11px] tabular-nums text-slate-400 dark:text-slate-500">
              {String(projects.length).padStart(2, '0')} {t('projects.projects_count')}
            </span>
          </div>
          <h1 className="mt-6 font-serif text-5xl leading-tight text-slate-950 dark:text-white sm:text-6xl md:text-7xl">
            {t('projects.all_projects_text')}
          </h1>
          <p className="mt-5 text-base leading-7 text-slate-500 dark:text-slate-400 max-w-2xl">
            {t('projects.subtitle')}
          </p>
        </div>

        {/* Filter — plain text */}
        <div className="mb-16 flex flex-wrap items-center gap-x-6 gap-y-2 border-y border-slate-200 dark:border-slate-800 py-4">
          {categories.map((cat, index) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(index)}
              className={`font-mono text-[11px] uppercase tracking-[0.2em] transition-colors ${
                activeCategory === index
                  ? 'text-slate-950 dark:text-white'
                  : 'text-slate-400 hover:text-slate-700 dark:text-slate-500 dark:hover:text-slate-300'
              }`}
            >
              {cat}
              <span className="ml-1.5 tabular-nums text-slate-300 dark:text-slate-600">
                {String(categoryCounts[index]).padStart(2, '0')}
              </span>
            </button>
          ))}
        </div>

        {/* Editorial grid */}
        <ul className="grid gap-x-10 gap-y-24 md:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <li
              key={project.title}
              className={`group transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${100 + index * 80}ms` }}
            >
              {/* Tiny corner index */}
              <div className="mb-3 flex items-baseline gap-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-400 dark:text-slate-500">
                  / {String(index + 1).padStart(2, '0')}
                </span>
                <span className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
              </div>

              {/* Thumbnail — full image, adapted aspect */}
              <div
                className={`relative overflow-hidden border border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900 ${
                  project.type === 'mobile' ? 'aspect-[4/5]' : 'aspect-[16/10]'
                }`}
              >
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.02] ${
                      project.type === 'mobile'
                        ? 'object-contain p-6'
                        : 'object-contain p-2 sm:p-3'
                    }`}
                    loading="lazy"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center">
                    <span className="font-serif text-7xl italic text-slate-300 dark:text-slate-700 select-none">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                )}
              </div>

              {/* Metadata */}
              <div className="mt-6">
                <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
                  <span>{project.category}</span>
                  <span className="text-slate-300 dark:text-slate-600">·</span>
                  <span>
                    {project.type === 'mobile'
                      ? t('projects.mobile_platform')
                      : t('projects.web_platform')}
                  </span>
                </div>

                <h3 className="mt-3 font-serif text-2xl leading-tight text-slate-950 dark:text-white md:text-3xl">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300 max-w-prose">
                  {project.description}
                </p>

                <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                  {project.tags.slice(0, 5).join(' · ')}
                  {project.tags.length > 5 && (
                    <span className="text-slate-300 dark:text-slate-600"> +{project.tags.length - 5}</span>
                  )}
                </p>

                {/* Links */}
                <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 border-b border-slate-950 pb-0.5 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-950 transition-colors hover:text-amber-700 hover:border-amber-700 dark:border-white dark:text-white dark:hover:text-amber-400 dark:hover:border-amber-400"
                    >
                      {project.type === 'mobile' ? t('projects.app_store') : t('projects.view_demo')}
                      <ArrowUpRight className="h-3 w-3" strokeWidth={1.75} />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500 transition-colors hover:text-slate-950 dark:text-slate-400 dark:hover:text-white"
                    >
                      {t('projects.view_repo')}
                      <ArrowUpRight className="h-3 w-3" strokeWidth={1.75} />
                    </a>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default WorksPage;

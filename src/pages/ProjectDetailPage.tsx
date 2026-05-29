import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tags: string[];
  category?: string;
  image?: string;
  github?: string;
  demo?: string;
  type?: 'mobile' | 'web';
}

const ProjectDetailPage = () => {
  const { slug } = useParams();
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const projects = t('projects.items', { returnObjects: true }) as Project[];

  const project =
    projects.find(
      (p) => p.title.toLowerCase().replace(/\s+/g, '-') === slug
    ) || projects[0];

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, [slug]);

  const otherProjects = projects
    .filter((p) => p.title !== project.title)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 pt-32 pb-24 md:pt-40">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">

        {/* Back link */}
        <Link
          to="/works"
          className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-slate-500 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white transition-colors"
        >
          <ArrowLeft className="h-3 w-3 transition-transform group-hover:-translate-x-0.5" strokeWidth={1.75} />
          {t('projects.back_to_works')}
        </Link>

        {/* Header */}
        <div
          className={`mt-10 mb-16 max-w-4xl transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
            <span>{project.category}</span>
            <span className="text-slate-300 dark:text-slate-600">·</span>
            <span>
              {project.type === 'mobile'
                ? t('projects.mobile_platform')
                : t('projects.web_platform')}
            </span>
          </div>
          <h1 className="mt-5 font-serif text-5xl leading-tight text-slate-950 dark:text-white sm:text-6xl md:text-7xl">
            {project.title}
          </h1>
          <p className="mt-6 text-base leading-7 text-slate-600 dark:text-slate-300 md:text-lg max-w-3xl">
            {project.description}
          </p>

          {/* Links */}
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 border-b border-slate-950 pb-0.5 font-serif text-xl italic text-slate-950 transition-colors hover:text-amber-700 hover:border-amber-700 dark:border-white dark:text-white dark:hover:text-amber-400 dark:hover:border-amber-400"
              >
                {project.type === 'mobile' ? t('projects.app_store') : t('projects.view_demo')}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.75} />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-slate-500 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white transition-colors"
              >
                {t('projects.view_repository')}
                <ArrowUpRight className="h-3 w-3" strokeWidth={1.75} />
              </a>
            )}
          </div>
        </div>

        {/* Project image — full, contained */}
        <div
          className={`relative overflow-hidden border border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900 ${
            project.type === 'mobile' ? 'aspect-[4/5] max-w-md mx-auto' : 'aspect-[16/10]'
          } transition-all duration-700 ease-out delay-150 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className={`h-full w-full ${
                project.type === 'mobile' ? 'object-contain p-8' : 'object-contain p-4'
              }`}
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <span className="font-serif text-8xl italic text-slate-300 dark:text-slate-700 select-none">
                {project.title.charAt(0)}
              </span>
            </div>
          )}
        </div>

        {/* Tech stack */}
        <section className="mt-24 grid gap-8 md:grid-cols-[200px_1fr] md:gap-16">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
            {t('projects.tech_stack')}
          </h2>
          <ul className="space-y-px border-t border-slate-200 dark:border-slate-800">
            {project.tags.map((tag, i) => (
              <li
                key={tag}
                className="grid grid-cols-[auto_1fr] gap-x-6 items-baseline border-b border-slate-200 py-4 dark:border-slate-800"
              >
                <span className="font-mono text-[10px] tabular-nums text-slate-400 dark:text-slate-600">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="font-serif text-xl text-slate-950 dark:text-white">
                  {tag}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* My role */}
        <section className="mt-24 grid gap-8 md:grid-cols-[200px_1fr] md:gap-16">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
            {t('projects.my_role')}
          </h2>
          <div>
            <p className="font-serif text-2xl italic leading-snug text-slate-950 dark:text-white">
              {t('projects.role_description')}
            </p>
            <ul className="mt-8 space-y-3">
              {(t('projects.responsibilities', { returnObjects: true }) as string[]).map(
                (resp, i) => (
                  <li key={i} className="grid grid-cols-[auto_1fr] gap-x-4 items-baseline">
                    <span className="font-mono text-[10px] text-slate-400 dark:text-slate-600">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
                      {resp}
                    </p>
                  </li>
                )
              )}
            </ul>
          </div>
        </section>

        {/* Other projects */}
        {otherProjects.length > 0 && (
          <section className="mt-24 border-t border-slate-200 dark:border-slate-800 pt-16">
            <div className="flex items-center gap-4 mb-12">
              <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                {t('projects.other_projects')}
              </span>
              <span className="h-px flex-1 max-w-[120px] bg-slate-300 dark:bg-slate-700" />
            </div>

            <ul className="grid gap-x-10 gap-y-12 md:grid-cols-3">
              {otherProjects.map((other) => (
                <li key={other.title}>
                  <Link
                    to={`/project/${other.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="group block"
                  >
                    <div
                      className={`relative overflow-hidden border border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900 ${
                        other.type === 'mobile' ? 'aspect-[4/5]' : 'aspect-[16/10]'
                      }`}
                    >
                      {other.image && (
                        <img
                          src={other.image}
                          alt={other.title}
                          className={`h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.02] ${
                            other.type === 'mobile' ? 'object-contain p-4' : 'object-contain p-2'
                          }`}
                          loading="lazy"
                        />
                      )}
                    </div>
                    <h3 className="mt-4 font-serif text-lg leading-snug text-slate-950 dark:text-white group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                      {other.title}
                    </h3>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </main>
  );
};

export default ProjectDetailPage;

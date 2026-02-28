import { useTranslation } from 'react-i18next';
import { useState, useEffect, useRef, useCallback, useMemo } from 'react';

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
}

const WorksPage = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [isFiltering, setIsFiltering] = useState(false);
  const [canTilt, setCanTilt] = useState(false);
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });

  const projects = t('projects.items', { returnObjects: true }) as Project[];
  const categories = t('projects.categories', { returnObjects: true }) as string[];

  const categoryCounts = useMemo(() => {
    const counts: number[] = [projects.length];
    for (let i = 1; i < categories.length; i++) {
      counts.push(projects.filter((p) => p.category === categories[i]).length);
    }
    return counts;
  }, [projects, categories]);

  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
    setCanTilt(mq.matches);
    const handler = (e: MediaQueryListEvent) => setCanTilt(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
    setFilteredProjects(projects);
  }, []);

  const updateUnderline = useCallback(() => {
    const tab = tabsRef.current[activeCategory];
    if (tab) {
      const rect = tab.getBoundingClientRect();
      const parentRect = tab.parentElement?.getBoundingClientRect();
      if (parentRect) {
        setUnderlineStyle({
          left: rect.left - parentRect.left,
          width: rect.width,
        });
      }
    }
  }, [activeCategory]);

  useEffect(() => {
    updateUnderline();
  }, [activeCategory, updateUnderline, isVisible]);

  useEffect(() => {
    window.addEventListener('resize', updateUnderline);
    return () => window.removeEventListener('resize', updateUnderline);
  }, [updateUnderline]);

  const handleCategoryChange = (index: number) => {
    if (index === activeCategory) return;
    setIsFiltering(true);
    setTimeout(() => {
      setActiveCategory(index);
      const filtered =
        index === 0
          ? projects
          : projects.filter((p) => p.category === categories[index]);
      setFilteredProjects(filtered);
      setTimeout(() => setIsFiltering(false), 50);
    }, 300);
  };

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (!canTilt) return;
      const el = e.currentTarget;
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -5;
      const rotateY = ((x - centerX) / centerX) * 5;
      el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02,1.02,1.02)`;
      const shine = el.querySelector('[data-shine]') as HTMLElement;
      if (shine) {
        const px = (x / rect.width) * 100;
        const py = (y / rect.height) * 100;
        shine.style.background = `radial-gradient(circle at ${px}% ${py}%, rgba(255,255,255,0.15), transparent 50%)`;
        shine.style.opacity = '1';
      }
    },
    [canTilt]
  );

  const handleMouseLeave = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (!canTilt) return;
      e.currentTarget.style.transform = '';
      const shine = e.currentTarget.querySelector('[data-shine]') as HTMLElement;
      if (shine) shine.style.opacity = '0';
    },
    [canTilt]
  );

  const renderTags = (tags: string[], limit = 5) => (
    <div className="flex flex-wrap gap-2">
      {tags.slice(0, limit).map((tag) => (
        <span key={tag} className="px-3 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full font-medium">
          {tag}
        </span>
      ))}
      {tags.length > limit && (
        <span className="px-3 py-1 text-xs text-gray-400 dark:text-gray-600 font-medium">
          +{tags.length - limit}
        </span>
      )}
    </div>
  );

  const renderBrowserFrame = (project: Project) => (
    <div className="relative w-full max-w-[480px] mx-auto">
      <div
        className="rounded-xl overflow-hidden shadow-2xl bg-gray-100 dark:bg-gray-800 border border-gray-200/80 dark:border-gray-700/60"
        style={{ boxShadow: '0 25px 60px -12px rgba(0,0,0,0.25)' }}
      >
        <div className="flex items-center gap-2 px-4 py-2 bg-gray-200/80 dark:bg-gray-800 border-b border-gray-300/50 dark:border-gray-700/50">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
          </div>
          <div className="flex-1 mx-3">
            <div className="flex items-center gap-2 px-3 py-1 bg-white dark:bg-gray-900 rounded-md text-[10px] text-gray-400 dark:text-gray-500 font-mono">
              <svg className="w-2.5 h-2.5 text-gray-400 dark:text-gray-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span className="truncate">
                {project.github
                  ? project.github.replace('https://', '').replace('github.com/', '')
                  : `${project.title.toLowerCase().replace(/\s+/g, '')}.app`}
              </span>
            </div>
          </div>
        </div>
        <div className="relative overflow-y-auto overflow-x-hidden" style={{ maxHeight: '320px' }}>
          {project.image ? (
            <img src={project.image} alt={project.title} className="w-full h-auto block" loading="lazy" />
          ) : (
            <div className="w-full aspect-[16/10] relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-850 dark:to-gray-800" />
              <div
                className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
                style={{
                  backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
                  backgroundSize: '20px 20px',
                }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                <span className="text-7xl font-display font-bold text-gray-200/80 dark:text-gray-700/80 select-none leading-none">
                  {project.title.charAt(0)}
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-gray-400 dark:text-gray-600 font-medium">
                  {project.tags[0]}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const renderMobileCard = (project: Project, index: number) => (
    <div
      key={project.title}
      className={`col-span-full transition-all ease-out ${
        isFiltering ? 'opacity-0 scale-95 duration-200' : 'opacity-100 scale-100 duration-600'
      } ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
      style={{ transitionDelay: isFiltering ? '0ms' : `${200 + index * 120}ms` }}
    >
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group relative rounded-3xl overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-800/80 dark:via-gray-900 dark:to-gray-800/80 border border-gray-200/60 dark:border-gray-700/40 hover:shadow-2xl"
        style={{
          transition: 'transform 0.2s ease-out, box-shadow 0.5s ease',
          transformStyle: 'preserve-3d',
          willChange: 'transform',
        }}
      >
        <div data-shine className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 transition-opacity duration-300 z-10" />
        <div className="grid md:grid-cols-2 items-center gap-8 p-8 md:p-10">
          <div className="space-y-5 relative z-20 order-2 md:order-1">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 text-[10px] uppercase tracking-widest font-medium text-accent bg-accent/10 rounded-full border border-accent/20">
                {project.category}
              </span>
              <span className="text-[10px] uppercase tracking-widest text-gray-400 dark:text-gray-500 font-medium">
                iOS & Android
              </span>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-gray-900 dark:text-white mb-3 group-hover:text-accent transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {project.description}
              </p>
            </div>
            {renderTags(project.tags)}
            <div className="flex flex-wrap gap-3 pt-1">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-medium rounded-full hover:bg-accent dark:hover:bg-accent dark:hover:text-white transition-colors duration-300"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  App Store
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-full hover:border-accent hover:text-accent transition-colors duration-300"
                >
                  {t('projects.view_repo')}
                </a>
              )}
            </div>
          </div>
          <div className="relative z-20 flex justify-center order-1 md:order-2">
            <div className="relative group-hover:-translate-y-2 transition-transform duration-700 ease-out">
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="max-h-[450px] w-auto mx-auto drop-shadow-2xl"
                  loading="lazy"
                />
              )}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[180px] h-[50px] bg-accent/10 dark:bg-accent/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderWebCard = (project: Project, index: number) => (
    <div
      key={project.title}
      className={`col-span-full transition-all ease-out ${
        isFiltering ? 'opacity-0 scale-95 duration-200' : 'opacity-100 scale-100 duration-600'
      } ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
      style={{ transitionDelay: isFiltering ? '0ms' : `${200 + index * 120}ms` }}
    >
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group relative rounded-3xl overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-800/80 dark:via-gray-900 dark:to-gray-800/80 border border-gray-200/60 dark:border-gray-700/40 hover:shadow-2xl"
        style={{
          transition: 'transform 0.2s ease-out, box-shadow 0.5s ease',
          transformStyle: 'preserve-3d',
          willChange: 'transform',
        }}
      >
        <div data-shine className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 transition-opacity duration-300 z-10" />
        <div className="grid md:grid-cols-2 items-center gap-8 p-8 md:p-10">
          <div className="space-y-5 relative z-20 order-2 md:order-1">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 text-[10px] uppercase tracking-widest font-medium text-accent bg-accent/10 rounded-full border border-accent/20">
                {project.category}
              </span>
              <span className="text-[10px] uppercase tracking-widest text-gray-400 dark:text-gray-500 font-medium">
                Web Application
              </span>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-gray-900 dark:text-white mb-3 group-hover:text-accent transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {project.description}
              </p>
            </div>
            {renderTags(project.tags)}
            <div className="flex flex-wrap gap-3 pt-1">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-medium rounded-full hover:bg-accent dark:hover:bg-accent dark:hover:text-white transition-colors duration-300"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  {t('projects.view_repo')}
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-full hover:border-accent hover:text-accent transition-colors duration-300"
                >
                  {t('projects.view_demo')}
                </a>
              )}
            </div>
          </div>
          <div className="relative z-20 flex justify-center order-1 md:order-2">
            <div className="relative group-hover:-translate-y-2 transition-transform duration-700 ease-out w-full">
              {renderBrowserFrame(project)}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[250px] h-[50px] bg-accent/10 dark:bg-accent/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className={`mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-baseline gap-4 mb-4">
            <p className="text-sm uppercase tracking-wide text-gray-500 dark:text-gray-500">Portfolio</p>
            <span className="text-xs text-gray-400 dark:text-gray-600 tabular-nums">
              {String(projects.length).padStart(2, '0')} projects
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-gray-900 dark:text-white mb-6">
            {t('projects.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl">
            {t('projects.subtitle')}
          </p>
        </div>

        <div className={`mb-10 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="h-px bg-gray-200 dark:bg-gray-800" />
        </div>

        <div className={`mb-14 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative inline-flex gap-1 border-b border-gray-200 dark:border-gray-800">
            {categories.map((cat, index) => (
              <button
                key={cat}
                ref={(el) => { tabsRef.current[index] = el; }}
                onClick={() => handleCategoryChange(index)}
                className={`relative px-5 py-3 text-sm font-medium transition-colors duration-300 whitespace-nowrap ${
                  activeCategory === index
                    ? 'text-gray-900 dark:text-white'
                    : 'text-gray-500 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                }`}
              >
                {cat}
                <span className={`ml-1.5 text-xs tabular-nums transition-colors duration-300 ${
                  activeCategory === index ? 'text-accent' : 'text-gray-400 dark:text-gray-600'
                }`}>
                  ({categoryCounts[index]})
                </span>
              </button>
            ))}
            <div
              className="absolute bottom-0 h-0.5 bg-accent transition-all ease-out"
              style={{
                left: underlineStyle.left,
                width: underlineStyle.width,
                transitionDuration: '400ms',
              }}
            />
          </div>
        </div>

        {/* Projects */}
        <div className="grid grid-cols-1 gap-8">
          {filteredProjects.map((project, index) =>
            project.type === 'mobile'
              ? renderMobileCard(project, index)
              : renderWebCard(project, index)
          )}
        </div>

        <div className={`text-center mt-24 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <a
            href="https://github.com/AbdellahiAhmed"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-medium text-base hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            {t('projects.all_projects')}
          </a>
        </div>
      </div>
    </main>
  );
};

export default WorksPage;

import { useTranslation } from 'react-i18next';
import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
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

  const getSlug = (title: string) => title.toLowerCase().replace(/\s+/g, '-');

  const renderPlaceholder = (project: Project) => (
    <div className="absolute inset-0">
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-gray-50 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-800" />
      <div className="absolute inset-0 bg-gradient-to-tl from-accent/8 via-transparent to-transparent" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
        <span className="text-[8rem] md:text-[10rem] font-display font-bold text-gray-200/80 dark:text-gray-700/80 select-none leading-none">
          {project.title.charAt(0)}
        </span>
        <span className="text-[10px] uppercase tracking-[0.25em] text-gray-400 dark:text-gray-600 font-medium">
          {project.tags[0]}
        </span>
      </div>
    </div>
  );

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Page Title */}
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

        {/* Category Filter */}
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className={`transition-all ease-out ${
                isFiltering ? 'opacity-0 scale-95 duration-200' : 'opacity-100 scale-100 duration-600'
              } ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
              style={{ transitionDelay: isFiltering ? '0ms' : `${200 + index * 120}ms` }}
            >
              <div
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="group relative rounded-2xl"
                style={{
                  transition: 'transform 0.2s ease-out, box-shadow 0.5s ease',
                  transformStyle: 'preserve-3d',
                  willChange: 'transform',
                }}
              >
                <Link to={`/project/${getSlug(project.title)}`} className="block">
                  <div className="relative overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800 aspect-[4/3] shadow-sm group-hover:shadow-2xl transition-shadow duration-600">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top transition-transform duration-[1s] ease-out group-hover:scale-110"
                        loading="lazy"
                      />
                    ) : (
                      renderPlaceholder(project)
                    )}
                    <div
                      data-shine
                      className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 transition-opacity duration-300 z-10"
                    />
                    <div className="absolute inset-0 bg-gray-900/0 group-hover:bg-gray-900/50 dark:group-hover:bg-black/60 transition-all duration-500 flex items-center justify-center pointer-events-none z-20">
                      <span className="text-white text-sm font-medium tracking-wide opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-75">
                        View Project&ensp;→
                      </span>
                    </div>
                    {project.category && (
                      <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full text-[10px] uppercase tracking-wider font-medium text-gray-700 dark:text-gray-300 opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-400">
                        {project.category}
                      </div>
                    )}
                  </div>
                  <div className="pt-5 space-y-2.5">
                    <h3 className="text-xl md:text-2xl font-display font-bold text-gray-900 dark:text-white group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-3 py-1 text-xs text-gray-400 dark:text-gray-600 font-medium">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
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

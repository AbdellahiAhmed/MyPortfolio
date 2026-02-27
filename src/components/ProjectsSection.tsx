import { useTranslation } from 'react-i18next';
import { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import SpacedText from './utils/SpacedText';

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

const ProjectsSection = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [isFiltering, setIsFiltering] = useState(false);
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });

  const projects = t('projects.items', { returnObjects: true }) as Project[];
  const categories = t('projects.categories', { returnObjects: true }) as string[];

  // Initialize filtered projects
  useEffect(() => {
    setFilteredProjects(projects);
  }, [t]);

  // Intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('projects');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  // Update underline position
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

  // Resize listener for underline
  useEffect(() => {
    window.addEventListener('resize', updateUnderline);
    return () => window.removeEventListener('resize', updateUnderline);
  }, [updateUnderline]);

  const handleCategoryChange = (index: number) => {
    if (index === activeCategory) return;
    setIsFiltering(true);

    setTimeout(() => {
      setActiveCategory(index);
      if (index === 0) {
        setFilteredProjects(projects);
      } else {
        const categoryName = categories[index];
        setFilteredProjects(
          projects.filter((p) => p.category === categoryName)
        );
      }

      setTimeout(() => {
        setIsFiltering(false);
      }, 50);
    }, 250);
  };

  const getSlug = (title: string) =>
    title.toLowerCase().replace(/\s+/g, '-');

  return (
    <section
      id="projects"
      className="py-32 relative overflow-hidden bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div
          className={`mb-16 transition-all duration-700 ease-out ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-sm uppercase tracking-wide text-gray-500 dark:text-gray-500 mb-4">
            {t('projects.section')}
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 dark:text-white mb-6 max-w-4xl">
            {t('projects.title')}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl">
            {t('projects.subtitle')}
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div
          className={`mb-14 transition-all duration-700 ease-out delay-200 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
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
              </button>
            ))}

            {/* Animated underline */}
            <div
              className="absolute bottom-0 h-0.5 bg-accent transition-all duration-400 ease-out"
              style={{
                left: underlineStyle.left,
                width: underlineStyle.width,
                transitionDuration: '400ms',
              }}
            />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Link
              key={project.title}
              to={`/project/${getSlug(project.title)}`}
              className={`group block transition-all ease-out ${
                isFiltering
                  ? 'opacity-0 scale-95 duration-250'
                  : 'opacity-100 scale-100 duration-500'
              } ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-10 opacity-0'
              }`}
              style={{
                transitionDelay: isFiltering ? '0ms' : `${300 + index * 100}ms`,
              }}
            >
              {/* Card Image */}
              <div className="relative overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800 aspect-[4/3] mb-5 shadow-sm group-hover:shadow-xl transition-shadow duration-500">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  /* Styled placeholder for projects without images */
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-100 to-gray-50 dark:from-gray-800 dark:via-gray-750 dark:to-gray-900 flex items-center justify-center">
                    <span className="text-7xl md:text-8xl font-display font-bold text-gray-300/60 dark:text-gray-600/60 select-none group-hover:scale-110 transition-transform duration-700">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                )}

                {/* Hover overlay - subtle darkening */}
                <div className="absolute inset-0 bg-gray-900/0 group-hover:bg-gray-900/10 dark:group-hover:bg-black/20 transition-all duration-500 pointer-events-none" />

                {/* Category badge */}
                {project.category && (
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-700 dark:text-gray-300 opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-400">
                    {project.category}
                  </div>
                )}
              </div>

              {/* Card Info */}
              <div className="space-y-3">
                <h3 className="text-xl md:text-2xl font-display font-bold text-gray-900 dark:text-white group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-3 py-1 text-xs text-gray-400 dark:text-gray-500 font-medium">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All CTA */}
        <div
          className={`text-center mt-20 transition-all duration-700 ease-out delay-700 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-block">
            <Link
              to="/works"
              className="group/cta inline-flex flex-col items-center"
            >
              <span className="text-sm mb-2 text-gray-500 dark:text-gray-500">
                Explore More
              </span>
              <span className="text-2xl md:text-3xl font-display font-bold text-gray-900 dark:text-white group-hover/cta:text-accent transition-colors duration-300">
                <SpacedText text="All Projects" />
              </span>
              <div className="h-px bg-gray-900 dark:bg-white mt-2 w-0 group-hover/cta:w-full transition-all duration-500 ease-out" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

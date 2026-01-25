import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SpacedText from './utils/SpacedText';

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
  const [isVisible, setIsVisible] = useState(false);

  const projects = t('projects.items', { returnObjects: true }) as Project[];
  const featuredProjects = projects.filter(p => p.featured).slice(0, 3);

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

  return (
    <section id="projects" className="py-32 relative overflow-hidden bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header - Editorial Style */}
        <div className={`mb-20 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-sm uppercase tracking-wide text-gray-500 dark:text-gray-500 mb-4">
            Featured Work
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 dark:text-white mb-6 max-w-4xl">
            Discover my latest work and projects
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl">
            {t('projects.subtitle')}
          </p>
        </div>

        {/* Projects List - Editorial Layout */}
        <div className="space-y-24">
          {featuredProjects.map((project, index) => (
            <article
              key={index}
              className={`group transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Project Image */}
              <Link
                to={`/project/${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="block relative mb-8 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900 aspect-[16/9] group-hover:shadow-2xl transition-shadow duration-500"
              >
                {/* Gradient Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-accent/5 to-transparent"></div>

                {/* Hover Overlay - Minimal & Sophisticated */}
                <div className="absolute inset-0 bg-gray-900/0 group-hover:bg-gray-900/5 dark:group-hover:bg-white/5 transition-all duration-500"></div>

                {/* Project Number - Watermark Style */}
                <div className="absolute top-8 right-8 text-8xl md:text-9xl font-display font-bold text-gray-900/5 dark:text-white/5 select-none pointer-events-none">
                  0{index + 1}
                </div>
              </Link>

              {/* Project Info - Clean Typography */}
              <div className="grid md:grid-cols-12 gap-8 items-start">

                {/* Left Column - Title & Category */}
                <div className="md:col-span-7 space-y-4">
                  <div>
                    <p className="text-sm uppercase tracking-wide text-gray-500 dark:text-gray-500 mb-2">
                      {project.tags[0]}
                    </p>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 dark:text-white group-hover:text-accent dark:group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Spaced Link - Azizkhaldi.com Style */}
                  <Link
                    to={`/project/${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-block mt-4 text-sm text-gray-900 dark:text-white hover:text-accent dark:hover:text-accent transition-colors duration-300 group/link"
                  >
                    <SpacedText text="View Project" className="font-medium" />
                    <div className="h-px bg-gray-900 dark:bg-white mt-1 w-0 group-hover/link:w-full transition-all duration-500 ease-out"></div>
                  </Link>
                </div>

                {/* Right Column - Tech Stack */}
                <div className="md:col-span-5">
                  <p className="text-sm uppercase tracking-wide text-gray-500 dark:text-gray-500 mb-4">
                    Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* GitHub Link */}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-6 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
                    >
                      <SpacedText text="View Code" className="text-xs" />
                      →
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Works - Editorial CTA */}
        <div className={`text-center mt-32 transition-all duration-700 ease-out delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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
              <div className="h-px bg-gray-900 dark:bg-white mt-2 w-0 group-hover/cta:w-full transition-all duration-500 ease-out"></div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

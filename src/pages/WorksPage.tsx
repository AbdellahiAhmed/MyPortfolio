import { useTranslation } from 'react-i18next';
import { Github, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const WorksPage = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const projects = t('projects.items', { returnObjects: true }) as any[];

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Title */}
        <div className={`mb-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-gray-900 dark:text-white mb-6">
            My Work
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl">
            {t('projects.subtitle')}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link
              key={index}
              to={`/project/${project.title.toLowerCase().replace(/\s+/g, '-')}`}
              className={`group transition-all duration-700 delay-${Math.min(index * 100, 500)} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="relative overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800 aspect-[4/3] mb-4">
                {/* Placeholder for project image */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5"></div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gray-900/90 dark:bg-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <div className="p-3 bg-white dark:bg-gray-900 rounded-full">
                    <Github className="h-6 w-6 text-gray-900 dark:text-white" />
                  </div>
                  <div className="p-3 bg-white dark:bg-gray-900 rounded-full">
                    <ExternalLink className="h-6 w-6 text-gray-900 dark:text-white" />
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-2 group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                {project.description}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.slice(0, 3).map((tag: string, tagIndex: number) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default WorksPage;

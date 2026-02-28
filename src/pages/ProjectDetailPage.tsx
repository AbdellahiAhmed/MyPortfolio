import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Github, ExternalLink, ArrowLeft } from 'lucide-react';
import SpacedText from '../components/utils/SpacedText';

const ProjectDetailPage = () => {
  const { slug } = useParams();
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const projects = t('projects.items', { returnObjects: true }) as any[];

  // Find project by slug
  const project = projects.find(
    (p) => p.title.toLowerCase().replace(/\s+/g, '-') === slug
  ) || projects[0];

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, [slug]);

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      {/* Back Navigation */}
      <div className="fixed top-24 left-8 z-50">
        <Link
          to="/works"
          className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
          <span className="text-sm uppercase tracking-wide">{t('projects.back_to_works')}</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative pt-20 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-gray-900 dark:text-white mb-6">
              {project.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-4">
              {project.description}
            </p>
            <p className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-500 mb-8">
              {t('projects.scroll_to_explore')}
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="h-8 w-px bg-gray-300 dark:bg-gray-700"></div>
        </div>
      </section>

      {/* Project Image */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800 aspect-video">
            <div className="w-full h-full bg-gradient-to-br from-accent/20 to-accent/5"></div>
          </div>
        </div>
      </section>

      {/* Project Description */}
      <section className="py-20 bg-surface-light dark:bg-surface-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-6">
                {t('projects.about_project')}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Live Website Link */}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full hover:scale-105 transition-transform duration-300"
              >
                <Github className="h-5 w-5" />
                <SpacedText text={t('projects.view_repository')} className="text-sm font-medium" />
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-8">
            {t('projects.tech_stack')}
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.tags.map((tag: string, index: number) => (
              <span
                key={index}
                className="px-6 py-3 text-base bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-full font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* My Role */}
      <section className="py-20 bg-surface-light dark:bg-surface-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-8">
            {t('projects.my_role')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            {t('projects.role_description')}
          </p>

          <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">
            {t('projects.key_responsibilities')}
          </h3>
          <ul className="space-y-3 text-lg text-gray-600 dark:text-gray-400">
            {(t('projects.responsibilities', { returnObjects: true }) as string[]).map((resp, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-accent">•</span>
                <span>{resp}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Other Projects */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white">
              {t('projects.other_projects')}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((otherProject, index) => (
              <Link
                key={index}
                to={`/project/${otherProject.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800 aspect-[4/3] mb-4">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5"></div>
                  <div className="absolute inset-0 bg-gray-900/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white group-hover:text-accent transition-colors">
                  {otherProject.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProjectDetailPage;

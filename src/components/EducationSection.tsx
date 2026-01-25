import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import SpacedText from './utils/SpacedText';

const EducationSection = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  const educationData = t('education.schools', { returnObjects: true }) as Array<{
    institution: string;
    degree: string;
    period: string;
    description: string;
    logo: string;
    link?: string;
  }>;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('education');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="education" className="py-32 relative overflow-hidden bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header - Editorial Style */}
        <div className={`mb-20 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-sm uppercase tracking-wide text-gray-500 dark:text-gray-500 mb-4">
            Academic Journey
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 dark:text-white mb-6 max-w-4xl">
            Explore my academic journey and continuous learning
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl">
            Building strong foundations through formal education and self-directed study
          </p>
        </div>

        {/* Education Timeline - Vertical Editorial Layout */}
        <div className="space-y-20">
          {educationData.map((edu, index) => (
            <article
              key={index}
              className={`group transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Timeline Structure */}
              <div className="grid md:grid-cols-12 gap-8 items-start">

                {/* Left Column - Period & Number */}
                <div className="md:col-span-3">
                  <div className="sticky top-32">
                    <p className="text-sm uppercase tracking-wide text-gray-500 dark:text-gray-500 mb-2">
                      {edu.period}
                    </p>
                    {/* Large Index Number - Editorial Style */}
                    <div className="text-7xl font-display font-bold text-gray-900/10 dark:text-white/10 select-none">
                      0{index + 1}
                    </div>
                  </div>
                </div>

                {/* Right Column - Institution Details */}
                <div className="md:col-span-9 space-y-6">
                  {/* Institution Name */}
                  <div>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 dark:text-white mb-3 group-hover:text-accent dark:group-hover:text-accent transition-colors duration-300">
                      {edu.institution}
                    </h3>
                    <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-medium">
                      {edu.degree}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
                    {edu.description}
                  </p>

                  {/* External Link - Spaced Style */}
                  {edu.link && (
                    <a
                      href={edu.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-sm text-gray-900 dark:text-white hover:text-accent dark:hover:text-accent transition-colors duration-300 group/link"
                    >
                      <SpacedText text="View Certificate" className="font-medium" />
                      <div className="h-px bg-gray-900 dark:bg-white mt-1 w-0 group-hover/link:w-full transition-all duration-500 ease-out"></div>
                    </a>
                  )}

                  {/* Divider Line */}
                  <div className="pt-8 mt-8 border-t border-gray-200 dark:border-gray-800">
                    <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-500">
                      Formal Education
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Continuous Learning Section */}
        <div className={`mt-32 transition-all duration-700 ease-out delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="border-t border-gray-200 dark:border-gray-800 pt-20">
            <div className="grid md:grid-cols-12 gap-8">

              {/* Left - Label */}
              <div className="md:col-span-3">
                <p className="text-sm uppercase tracking-wide text-gray-500 dark:text-gray-500">
                  Continuous Growth
                </p>
              </div>

              {/* Right - Content */}
              <div className="md:col-span-9">
                <h3 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-6">
                  Lifelong Learning
                </h3>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mb-8">
                  Beyond formal education, I continuously expand my knowledge through online courses, certifications, and hands-on projects in networking, automation, and software development. Learning never stops.
                </p>

                {/* Learning Areas - Clean Pills */}
                <div className="flex flex-wrap gap-3">
                  {[
                    'Online Courses',
                    'Certifications',
                    'Technical Books',
                    'Hands-on Projects',
                    'Community Learning',
                    'Documentation'
                  ].map((area, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;

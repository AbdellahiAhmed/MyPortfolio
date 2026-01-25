import { Network, Server, Code2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

const SkillsSection = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('skills');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const services = [
    {
      icon: Network,
      title: t('skills.pillars.network.title'),
      description: t('skills.pillars.network.subtitle'),
    },
    {
      icon: Server,
      title: t('skills.pillars.automation.title'),
      description: t('skills.pillars.automation.subtitle'),
    },
    {
      icon: Code2,
      title: t('skills.pillars.frontend.title'),
      description: t('skills.pillars.frontend.subtitle'),
    },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-7xl font-bold mb-6" style={{ fontFamily: "'Righteous', cursive" }}>
            <span className="text-gray-900 dark:text-white">Services</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t('skills.subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="mb-6">
                <service.icon className="h-12 w-12 text-gray-900 dark:text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white" style={{ fontFamily: "'Righteous', cursive" }}>
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}

          {/* Add 4th card for balance */}
          <div
            className={`group p-8 bg-gradient-to-br from-gray-900 to-gray-800 dark:from-white dark:to-gray-100 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: '450ms' }}
          >
            <div className="mb-6">
              <div className="h-12 w-12 flex items-center justify-center text-white dark:text-gray-900 text-3xl group-hover:scale-110 transition-transform duration-300">
                ✨
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white dark:text-gray-900" style={{ fontFamily: "'Righteous', cursive" }}>
              & More
            </h3>
            <p className="text-gray-300 dark:text-gray-600 leading-relaxed">
              Always learning and expanding my skill set to deliver the best solutions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

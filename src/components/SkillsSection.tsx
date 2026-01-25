import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import SpacedText from './utils/SpacedText';

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
      number: '01',
      title: t('skills.pillars.network.title'),
      description: t('skills.pillars.network.subtitle'),
      details: t('skills.pillars.network.points', { returnObjects: true }) as string[],
    },
    {
      number: '02',
      title: t('skills.pillars.automation.title'),
      description: t('skills.pillars.automation.subtitle'),
      details: t('skills.pillars.automation.points', { returnObjects: true }) as string[],
    },
    {
      number: '03',
      title: t('skills.pillars.frontend.title'),
      description: t('skills.pillars.frontend.subtitle'),
      details: t('skills.pillars.frontend.points', { returnObjects: true }) as string[],
    },
  ];

  return (
    <section id="skills" className="py-32 relative overflow-hidden bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header - Editorial Style */}
        <div className={`mb-20 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-sm uppercase tracking-wide text-gray-500 dark:text-gray-500 mb-4">
            What I Do
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 dark:text-white mb-6 max-w-4xl">
            Services I provide for your success
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl">
            {t('skills.subtitle')}
          </p>
        </div>

        {/* Services List - Numbered Editorial Layout */}
        <div className="space-y-24">
          {services.map((service, index) => (
            <article
              key={index}
              className={`group transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Service Structure */}
              <div className="grid md:grid-cols-12 gap-8 items-start">

                {/* Left Column - Number */}
                <div className="md:col-span-2">
                  <div className="sticky top-32">
                    {/* Large Service Number - Editorial Style */}
                    <div className="text-8xl md:text-9xl font-display font-bold text-gray-900/10 dark:text-white/10 select-none leading-none">
                      {service.number}
                    </div>
                  </div>
                </div>

                {/* Right Column - Service Details */}
                <div className="md:col-span-10 space-y-6">
                  {/* Service Title */}
                  <div>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 dark:text-white mb-3 group-hover:text-accent dark:group-hover:text-accent transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 font-medium">
                      {service.description}
                    </p>
                  </div>

                  {/* Service Details - Key Points */}
                  {service.details && service.details.length > 0 && (
                    <div className="space-y-3 pt-4">
                      {service.details.map((detail, i) => (
                        <div key={i} className="flex items-start gap-4 group/item">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 group-hover/item:scale-150 transition-transform duration-300"></div>
                          <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed flex-1">
                            {detail}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Divider Line */}
                  <div className="pt-8 mt-8 border-t border-gray-200 dark:border-gray-800">
                    <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-500">
                      Service {service.number}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Tech Stack Section */}
        <div className={`mt-32 transition-all duration-700 ease-out delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="border-t border-gray-200 dark:border-gray-800 pt-20">
            <div className="grid md:grid-cols-12 gap-8">

              {/* Left - Label */}
              <div className="md:col-span-2">
                <p className="text-sm uppercase tracking-wide text-gray-500 dark:text-gray-500">
                  Tech Stack
                </p>
              </div>

              {/* Right - Technologies */}
              <div className="md:col-span-10">
                <h3 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-6">
                  Tools & Technologies
                </h3>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mb-8">
                  A curated selection of technologies and tools I work with to deliver exceptional results
                </p>

                {/* Tech Categories */}
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Networking */}
                  <div>
                    <p className="text-sm uppercase tracking-wide text-gray-500 dark:text-gray-500 mb-4">
                      Networking & Infrastructure
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {['Cisco IOS', 'BGP/OSPF', 'VLAN/VXLAN', 'GNS3', 'EVE-NG', 'Wireshark'].map((tech, i) => (
                        <span
                          key={i}
                          className="px-4 py-2 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Development */}
                  <div>
                    <p className="text-sm uppercase tracking-wide text-gray-500 dark:text-gray-500 mb-4">
                      Development & Automation
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {['Python', 'Flask/FastAPI', 'React', 'TypeScript', 'Node.js', 'Docker'].map((tech, i) => (
                        <span
                          key={i}
                          className="px-4 py-2 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Availability CTA */}
        <div className={`text-center mt-32 transition-all duration-700 ease-out delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block">
            <a
              href="#contact"
              className="group/cta inline-flex flex-col items-center"
            >
              <span className="text-sm mb-2 text-gray-500 dark:text-gray-500">
                Let's Work Together
              </span>
              <span className="text-2xl md:text-3xl font-display font-bold text-gray-900 dark:text-white group-hover/cta:text-accent transition-colors duration-300">
                <SpacedText text="Get In Touch" />
              </span>
              <div className="h-px bg-gray-900 dark:bg-white mt-2 w-0 group-hover/cta:w-full transition-all duration-500 ease-out"></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

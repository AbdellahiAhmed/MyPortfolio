import { User } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

const AboutSection = () => {
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

    const section = document.getElementById('about');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-7xl font-bold mb-4" style={{ fontFamily: "'Righteous', cursive" }}>
            <span className="text-gray-900 dark:text-white">My Short Story</span>
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Profile Image */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative">
              <img
                src="/MyProfile.PNG"
                alt="Abdellahi Ahmed"
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          {/* Right - Story Text */}
          <div className={`space-y-6 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                {t('about.story1')}
              </p>
              <p>
                {t('about.story2')}
              </p>
              <p>
                {t('about.story3')}
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              <div>
                <div className="text-5xl font-bold text-gray-900 dark:text-white mb-2" style={{ fontFamily: "'Righteous', cursive" }}>
                  5+
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">
                  Years of Experience
                </div>
              </div>
              <div>
                <div className="text-5xl font-bold text-gray-900 dark:text-white mb-2" style={{ fontFamily: "'Righteous', cursive" }}>
                  20+
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">
                  Projects Completed
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

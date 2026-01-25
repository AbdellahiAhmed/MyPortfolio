interface MarqueeSectionProps {
  variant?: 'primary' | 'secondary';
}

const MarqueeSection = ({ variant = 'primary' }: MarqueeSectionProps) => {
  const isPrimary = variant === 'primary';

  return (
    <section className={`py-12 overflow-hidden ${isPrimary ? 'bg-gray-900 dark:bg-white' : 'bg-white dark:bg-gray-900'}`}>
      <div className="relative flex">
        {/* First marquee */}
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center mx-8">
              <span className={`text-4xl md:text-6xl font-bold ${isPrimary ? 'text-white dark:text-gray-900' : 'text-gray-900 dark:text-white'}`} style={{ fontFamily: "'Righteous', cursive" }}>
                FULL-STACK DEVELOPER
              </span>
              <span className={`mx-8 ${isPrimary ? 'text-white dark:text-gray-900' : 'text-gray-900 dark:text-white'} text-2xl`}>•</span>
              <span className={`text-4xl md:text-6xl font-bold ${isPrimary ? 'text-white dark:text-gray-900' : 'text-gray-900 dark:text-white'}`} style={{ fontFamily: "'Righteous', cursive" }}>
                NETWORK ENGINEER
              </span>
              <span className={`mx-8 ${isPrimary ? 'text-white dark:text-gray-900' : 'text-gray-900 dark:text-white'} text-2xl`}>•</span>
              <span className={`text-4xl md:text-6xl font-bold ${isPrimary ? 'text-white dark:text-gray-900' : 'text-gray-900 dark:text-white'}`} style={{ fontFamily: "'Righteous', cursive" }}>
                UI & UX DESIGNER
              </span>
              <span className={`mx-8 ${isPrimary ? 'text-white dark:text-gray-900' : 'text-gray-900 dark:text-white'} text-2xl`}>•</span>
            </div>
          ))}
        </div>

        {/* Second marquee for seamless loop */}
        <div className="flex animate-marquee whitespace-nowrap absolute left-0" aria-hidden="true">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center mx-8">
              <span className={`text-4xl md:text-6xl font-bold ${isPrimary ? 'text-white dark:text-gray-900' : 'text-gray-900 dark:text-white'}`} style={{ fontFamily: "'Righteous', cursive" }}>
                FULL-STACK DEVELOPER
              </span>
              <span className={`mx-8 ${isPrimary ? 'text-white dark:text-gray-900' : 'text-gray-900 dark:text-white'} text-2xl`}>•</span>
              <span className={`text-4xl md:text-6xl font-bold ${isPrimary ? 'text-white dark:text-gray-900' : 'text-gray-900 dark:text-white'}`} style={{ fontFamily: "'Righteous', cursive" }}>
                NETWORK ENGINEER
              </span>
              <span className={`mx-8 ${isPrimary ? 'text-white dark:text-gray-900' : 'text-gray-900 dark:text-white'} text-2xl`}>•</span>
              <span className={`text-4xl md:text-6xl font-bold ${isPrimary ? 'text-white dark:text-gray-900' : 'text-gray-900 dark:text-white'}`} style={{ fontFamily: "'Righteous', cursive" }}>
                UI & UX DESIGNER
              </span>
              <span className={`mx-8 ${isPrimary ? 'text-white dark:text-gray-900' : 'text-gray-900 dark:text-white'} text-2xl`}>•</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;

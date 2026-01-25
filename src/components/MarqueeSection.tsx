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
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center shrink-0">
              <span className={`text-4xl md:text-6xl font-display font-bold ${isPrimary ? 'text-white dark:text-gray-900' : 'text-gray-900 dark:text-white'} px-6`}>
                FULL-STACK DEVELOPER
              </span>
              <span className={`${isPrimary ? 'text-white dark:text-gray-900' : 'text-gray-900 dark:text-white'} text-2xl px-6`}>•</span>
              <span className={`text-4xl md:text-6xl font-display font-bold ${isPrimary ? 'text-white dark:text-gray-900' : 'text-gray-900 dark:text-white'} px-6`}>
                NETWORK ENGINEER
              </span>
              <span className={`${isPrimary ? 'text-white dark:text-gray-900' : 'text-gray-900 dark:text-white'} text-2xl px-6`}>•</span>
              <span className={`text-4xl md:text-6xl font-display font-bold ${isPrimary ? 'text-white dark:text-gray-900' : 'text-gray-900 dark:text-white'} px-6`}>
                UI & UX DESIGNER
              </span>
              <span className={`${isPrimary ? 'text-white dark:text-gray-900' : 'text-gray-900 dark:text-white'} text-2xl px-6`}>•</span>
            </div>
          ))}
        </div>

        {/* Second marquee for seamless loop - positioned after first */}
        <div className="flex animate-marquee whitespace-nowrap absolute left-full" aria-hidden="true">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center shrink-0">
              <span className={`text-4xl md:text-6xl font-display font-bold ${isPrimary ? 'text-white dark:text-gray-900' : 'text-gray-900 dark:text-white'} px-6`}>
                FULL-STACK DEVELOPER
              </span>
              <span className={`${isPrimary ? 'text-white dark:text-gray-900' : 'text-gray-900 dark:text-white'} text-2xl px-6`}>•</span>
              <span className={`text-4xl md:text-6xl font-display font-bold ${isPrimary ? 'text-white dark:text-gray-900' : 'text-gray-900 dark:text-white'} px-6`}>
                NETWORK ENGINEER
              </span>
              <span className={`${isPrimary ? 'text-white dark:text-gray-900' : 'text-gray-900 dark:text-white'} text-2xl px-6`}>•</span>
              <span className={`text-4xl md:text-6xl font-display font-bold ${isPrimary ? 'text-white dark:text-gray-900' : 'text-gray-900 dark:text-white'} px-6`}>
                UI & UX DESIGNER
              </span>
              <span className={`${isPrimary ? 'text-white dark:text-gray-900' : 'text-gray-900 dark:text-white'} text-2xl px-6`}>•</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;

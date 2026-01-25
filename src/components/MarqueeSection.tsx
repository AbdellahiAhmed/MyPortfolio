interface MarqueeSectionProps {
  variant?: 'primary' | 'secondary';
}

const MarqueeSection = ({ variant = 'primary' }: MarqueeSectionProps) => {
  const isPrimary = variant === 'primary';

  // Content to repeat
  const MarqueeContent = () => (
    <>
      <span className={`text-4xl md:text-6xl font-display font-bold ${isPrimary ? 'text-white dark:text-gray-900' : 'text-gray-900 dark:text-white'} inline-block px-8`}>
        FULL-STACK DEVELOPER
      </span>
      <span className={`${isPrimary ? 'text-white dark:text-gray-900' : 'text-gray-900 dark:text-white'} text-3xl inline-block px-8`}>•</span>
      <span className={`text-4xl md:text-6xl font-display font-bold ${isPrimary ? 'text-white dark:text-gray-900' : 'text-gray-900 dark:text-white'} inline-block px-8`}>
        NETWORK ENGINEER
      </span>
      <span className={`${isPrimary ? 'text-white dark:text-gray-900' : 'text-gray-900 dark:text-white'} text-3xl inline-block px-8`}>•</span>
      <span className={`text-4xl md:text-6xl font-display font-bold ${isPrimary ? 'text-white dark:text-gray-900' : 'text-gray-900 dark:text-white'} inline-block px-8`}>
        UI & UX DESIGNER
      </span>
      <span className={`${isPrimary ? 'text-white dark:text-gray-900' : 'text-gray-900 dark:text-white'} text-3xl inline-block px-8`}>•</span>
    </>
  );

  return (
    <section className={`py-12 overflow-hidden ${isPrimary ? 'bg-gray-900 dark:bg-white' : 'bg-white dark:bg-gray-900'}`}>
      <div className="relative flex">
        {/* First scrolling group */}
        <div className="flex animate-marquee whitespace-nowrap items-center min-w-full shrink-0">
          <MarqueeContent />
          <MarqueeContent />
          <MarqueeContent />
          <MarqueeContent />
        </div>

        {/* Duplicate group for seamless loop - starts right after first group */}
        <div className="flex animate-marquee whitespace-nowrap items-center min-w-full shrink-0" aria-hidden="true">
          <MarqueeContent />
          <MarqueeContent />
          <MarqueeContent />
          <MarqueeContent />
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;

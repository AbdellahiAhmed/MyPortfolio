interface MarqueeSectionProps {
  variant?: 'primary' | 'secondary';
}

const PRIMARY_TOKENS = [
  'NEXT.JS',
  'REACT',
  'FLUTTER',
  'SUPABASE',
  'DOLIBARR ERP',
  'PHP · MYSQL',
  'CCNA',
  'PYTHON · NMAP',
  'APP STORE SHIPPED',
];

const SECONDARY_TOKENS = [
  'FULL-STACK DEVELOPER',
  'ERP MODULES · DOLIBARR',
  'NETWORK AUTOMATION',
  'CCNA · EVE-NG · GNS3',
  'NOUAKCHOTT · MAURITANIA',
];

const MarqueeSection = ({ variant = 'primary' }: MarqueeSectionProps) => {
  const isPrimary = variant === 'primary';
  const tokens = isPrimary ? PRIMARY_TOKENS : SECONDARY_TOKENS;

  const MarqueeContent = () => (
    <>
      {tokens.map((token) => (
        <span key={token} className="flex items-center">
          <span
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-display font-bold ${
              isPrimary ? 'text-white dark:text-gray-900' : 'text-gray-900 dark:text-white'
            } inline-block px-4 sm:px-6 md:px-8`}
          >
            {token}
          </span>
          <span
            className={`${
              isPrimary ? 'text-white/60 dark:text-gray-900/60' : 'text-gray-900/60 dark:text-white/60'
            } text-xl sm:text-2xl md:text-3xl inline-block`}
          >
            •
          </span>
        </span>
      ))}
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

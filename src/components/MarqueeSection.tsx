interface MarqueeSectionProps {
  variant?: 'primary' | 'secondary';
}

const PRIMARY_TOKENS = [
  'Next.js',
  'React',
  'Flutter',
  'Supabase',
  'Dolibarr',
  'PHP',
  'MySQL',
  'CCNA',
  'Python',
];

const SECONDARY_TOKENS = [
  'Full-stack developer',
  'Dolibarr ERP modules',
  'CCNA · EVE-NG · GNS3',
  'Nouakchott, Mauritania',
];

const MarqueeSection = ({ variant = 'primary' }: MarqueeSectionProps) => {
  const isPrimary = variant === 'primary';
  const tokens = isPrimary ? PRIMARY_TOKENS : SECONDARY_TOKENS;

  const MarqueeContent = () => (
    <>
      {tokens.map((token) => (
        <span key={token} className="flex items-center shrink-0">
          <span
            className={`font-serif text-3xl italic md:text-4xl lg:text-5xl px-6 md:px-10 ${
              isPrimary
                ? 'text-slate-950 dark:text-white'
                : 'text-slate-500 dark:text-slate-400'
            }`}
          >
            {token}
          </span>
          <span
            className={`text-base ${
              isPrimary ? 'text-slate-400 dark:text-slate-600' : 'text-slate-300 dark:text-slate-700'
            }`}
            aria-hidden="true"
          >
            ✦
          </span>
        </span>
      ))}
    </>
  );

  return (
    <section
      className={`border-y py-10 overflow-hidden ${
        isPrimary
          ? 'border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950'
          : 'border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900'
      }`}
    >
      <div className="relative flex">
        <div className="flex animate-marquee whitespace-nowrap items-center min-w-full shrink-0">
          <MarqueeContent />
          <MarqueeContent />
          <MarqueeContent />
        </div>
        <div
          className="flex animate-marquee whitespace-nowrap items-center min-w-full shrink-0"
          aria-hidden="true"
        >
          <MarqueeContent />
          <MarqueeContent />
          <MarqueeContent />
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;

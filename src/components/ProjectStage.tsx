interface ProjectStageProps {
  title: string;
  image: string;
  mobileImage?: string;
  type?: 'mobile' | 'web';
  address?: string;
  animate: boolean;
}

// The screen pans from top to bottom and back, so a long page reads as the product in use.
// Hover pauses it for anyone who wants to read a detail.
const screenClass = (animate: boolean) =>
  `h-full w-full object-cover object-top ${animate ? 'animate-screen-pan group-hover:[animation-play-state:paused]' : ''}`;

const Phone = ({ src, alt, animate, className = '' }: { src: string; alt: string; animate: boolean; className?: string }) => (
  <div
    className={`aspect-[9/19] rounded-[1.6rem] border-[5px] border-slate-900 dark:border-slate-700 bg-slate-900 shadow-xl overflow-hidden ${className}`}
  >
    <span className="absolute top-1.5 left-1/2 -translate-x-1/2 h-1.5 w-12 rounded-full bg-slate-900 dark:bg-slate-700 z-10" />
    <img src={src} alt={alt} loading="lazy" decoding="async" className={screenClass(animate)} />
  </div>
);

const ProjectStage = ({ title, image, mobileImage, type, address, animate }: ProjectStageProps) => {
  if (type === 'mobile') {
    return (
      <div className="mb-9 flex justify-center lg:justify-start">
        {/* Mobile screenshots ship as finished device mockups; a second frame would double the bezel. */}
        <img src={image} alt={`${title} — screen`} loading="lazy" decoding="async" className="w-[230px] h-auto" />
      </div>
    );
  }

  return (
    <div className={`group relative mb-9 ${mobileImage ? 'pb-8 sm:pr-14' : ''}`}>
      <div className="rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 shadow-sm overflow-hidden">
        <div className="flex items-center gap-3 px-3 py-2 border-b border-slate-200 dark:border-slate-800">
          <span className="flex gap-1.5" aria-hidden="true">
            <span className="h-2 w-2 rounded-full bg-slate-300 dark:bg-slate-700" />
            <span className="h-2 w-2 rounded-full bg-slate-300 dark:bg-slate-700" />
            <span className="h-2 w-2 rounded-full bg-slate-300 dark:bg-slate-700" />
          </span>
          <span className="flex-1 truncate rounded bg-white dark:bg-slate-950 px-2.5 py-0.5 font-mono text-[10px] text-slate-500 dark:text-slate-400">
            {address ?? title}
          </span>
        </div>
        <div className="aspect-[16/10] bg-white dark:bg-slate-950">
          <img src={image} alt={`${title} — screen`} loading="lazy" decoding="async" className={screenClass(animate)} />
        </div>
      </div>
      {mobileImage && (
        <Phone
          src={mobileImage}
          alt={`${title} — phone screen`}
          animate={animate}
          className="absolute bottom-0 right-0 w-[22%] min-w-[96px] max-w-[150px]"
        />
      )}
    </div>
  );
};

export default ProjectStage;

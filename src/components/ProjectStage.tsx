import { useState, type CSSProperties } from 'react';

interface ProjectStageProps {
  title: string;
  image: string;
  mobileImage?: string;
  type?: 'mobile' | 'web';
  address?: string;
  animate: boolean;
}

const BROWSER_RATIO = 16 / 10;
const PHONE_RATIO = 9 / 19;

// Never crop a screenshot sideways (that is what cut sidebars off). A wider image sets the frame height;
// a taller one fills the width and pans from top to bottom so the whole page is seen.
const useFit = (frameRatio: number) => {
  const [imageRatio, setImageRatio] = useState<number | null>(null);
  const onLoad = (e: React.SyntheticEvent<HTMLImageElement>) =>
    setImageRatio(e.currentTarget.naturalWidth / e.currentTarget.naturalHeight);
  const pans = imageRatio !== null && imageRatio < frameRatio;
  const frameStyle: CSSProperties = { aspectRatio: String(imageRatio && !pans ? imageRatio : frameRatio) };
  const panStyle = pans ? ({ '--pan': `-${(1 - imageRatio! / frameRatio) * 100}%` } as CSSProperties) : undefined;
  return { onLoad, pans, frameStyle, panStyle };
};

const Screen = ({ src, alt, frameRatio, animate }: { src: string; alt: string; frameRatio: number; animate: boolean }) => {
  const { onLoad, pans, frameStyle, panStyle } = useFit(frameRatio);
  return (
    <div className="relative w-full overflow-hidden bg-white dark:bg-slate-950" style={frameStyle}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={onLoad}
        style={panStyle}
        className={`absolute inset-x-0 top-0 w-full h-auto ${
          pans && animate ? 'animate-screen-pan group-hover:[animation-play-state:paused]' : ''
        }`}
      />
    </div>
  );
};

const ProjectStage = ({ title, image, mobileImage, type, address, animate }: ProjectStageProps) => {
  if (type === 'mobile') {
    return (
      <div className="mb-10 flex justify-center">
        {/* Device mockups come with their own frame and a transparent background. */}
        <img
          src={image}
          alt={`${title} — screen`}
          loading="lazy"
          decoding="async"
          className="h-[440px] sm:h-[500px] w-auto drop-shadow-[0_24px_40px_rgba(15,23,42,0.22)]"
        />
      </div>
    );
  }

  return (
    <div className={`group relative mb-10 ${mobileImage ? 'pb-8 sm:pr-14' : ''}`}>
      <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 shadow-[0_18px_40px_-18px_rgba(15,23,42,0.25)] overflow-hidden">
        <div className="flex items-center gap-3 px-3.5 py-2.5 border-b border-slate-200 dark:border-slate-800">
          <span className="flex gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
          </span>
          <span className="flex-1 truncate rounded-md bg-white dark:bg-slate-950 px-3 py-1 font-mono text-[12px] text-slate-600 dark:text-slate-400">
            {address ?? title}
          </span>
        </div>
        <Screen src={image} alt={`${title} — screen`} frameRatio={BROWSER_RATIO} animate={animate} />
      </div>
      {mobileImage && (
        <div className="absolute bottom-0 right-0 w-[22%] min-w-[96px] max-w-[150px] rounded-[1.6rem] border-[5px] border-slate-900 dark:border-slate-700 bg-slate-900 shadow-xl overflow-hidden">
          <span className="absolute top-1.5 left-1/2 -translate-x-1/2 h-1.5 w-12 rounded-full bg-slate-900 dark:bg-slate-700 z-10" />
          <Screen src={mobileImage} alt={`${title} — phone screen`} frameRatio={PHONE_RATIO} animate={animate} />
        </div>
      )}
    </div>
  );
};

export default ProjectStage;

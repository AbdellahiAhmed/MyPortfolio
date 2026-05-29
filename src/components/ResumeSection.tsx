import { ArrowUpRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ResumeSection = () => {
  const { t } = useTranslation();
  const resumeHref = '/cv.pdf?v=2026-05-29-netmiko';

  return (
    <section id="resume" className="bg-white dark:bg-slate-950 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
            07 — {t('resume.section')}
          </span>
          <span className="h-px flex-1 max-w-[120px] bg-slate-300 dark:bg-slate-700" />
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <div className="max-w-2xl">
            <h2 className="font-serif text-4xl leading-tight text-slate-950 dark:text-white sm:text-5xl md:text-6xl">
              {t('resume.title')}
            </h2>
            <p className="mt-6 text-base leading-7 text-slate-600 dark:text-slate-300 md:text-lg">
              {t('resume.description')}
            </p>
            <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.22em] text-slate-400 dark:text-slate-500">
              {t('resume.lastUpdate')}
            </p>
          </div>

          <div className="flex flex-col items-start gap-5 lg:items-end">
            <a
              href={resumeHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 border-b border-slate-950 pb-2 font-serif text-2xl text-slate-950 transition-colors hover:text-amber-700 dark:border-white dark:text-white dark:hover:border-amber-400 dark:hover:text-amber-400"
            >
              <span>{t('resume.button')}</span>
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-slate-500 transition-colors hover:text-slate-950 dark:text-slate-400 dark:hover:text-white"
            >
              <span>{t('resume.contactButton')}</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;

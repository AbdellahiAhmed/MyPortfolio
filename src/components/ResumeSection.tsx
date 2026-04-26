import { ArrowRight, Download } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ResumeSection = () => {
  const { t } = useTranslation();
  const resumeHref = '/CV.pdf?v=2026-04-26-latest';

  return (
    <section id="resume" className="relative overflow-hidden py-16 md:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.08),_transparent_30%)] dark:bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.12),_transparent_32%)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-slate-200/80 bg-slate-950 text-white shadow-[0_30px_90px_-35px_rgba(15,23,42,0.8)] dark:border-white/10">
          <div className="grid gap-8 p-8 md:p-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-10 lg:p-12">
            <div className="max-w-3xl">
              <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-200">
                {t('resume.section')}
              </span>

              <h2 className="mt-6 text-3xl font-display font-extrabold tracking-[-0.04em] text-white sm:text-4xl md:text-5xl">
                {t('resume.title')}
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-300 md:text-lg">
                {t('resume.description')}
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                {t('resume.note')}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-slate-300">
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">{t('resume.cardTitle')}</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">{t('resume.lastUpdate')}</span>
              </div>
            </div>

            <div className="grid gap-3 sm:min-w-[240px]">
              <a
                href={resumeHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-base font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-100"
              >
                <span>{t('resume.button')}</span>
                <Download className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-4 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
              >
                <span>{t('resume.contactButton')}</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;

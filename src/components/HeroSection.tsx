import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import type { CSSProperties } from 'react';

// Entrance delay for the CSS classes in index.css (enter-rise, enter-line, enter-rule).
const delay = (ms: number) => ({ '--d': `${ms}ms` }) as CSSProperties;

const HeroSection = () => {
  const { t } = useTranslation();
  const resumeHref = '/cv.pdf?v=2026-10-14-summary';

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-white pt-24 dark:bg-slate-950"
    >
      {/* Faint grid texture — atmosphere without color */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035] dark:opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
          backgroundSize: '72px 72px',
        }}
      />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-6rem)] max-w-6xl flex-col justify-center px-6 py-20 sm:px-8 lg:px-10">
        {/* Vertical marginalia — section index, hidden on mobile */}
        <div className="pointer-events-none absolute left-0 top-1/2 hidden -translate-y-1/2 lg:block">
          <div className="flex flex-col items-center gap-3 [writing-mode:vertical-rl] rotate-180 font-mono text-[11.5px] uppercase tracking-[0.4em] text-slate-400 dark:text-slate-700">
            <span>§ 01 / 08</span>
          </div>
        </div>

        {/* Eyebrow */}
        <div className="flex items-center gap-4">
          <span style={delay(100)} className="enter-rise font-mono text-[12.5px] uppercase tracking-[0.3em] text-slate-600 dark:text-slate-400">
            01 — {t('hero.eyebrow_role')}
          </span>
          <span style={delay(200)} className="enter-rule h-px flex-1 max-w-[120px] bg-slate-300 dark:bg-slate-700" />
          <span style={delay(300)} className="enter-rise font-mono text-[12.5px] uppercase tracking-[0.3em] text-slate-600 dark:text-slate-400">
            {t('hero.eyebrow_location')}
          </span>
        </div>

        {/* Headline — single voice, no gradient */}
        <h1 className="mt-10 font-serif text-[clamp(2.5rem,6.2vw,5.5rem)] leading-[0.95] tracking-[-0.02em] text-slate-950 dark:text-white">
          <span className="enter-line">
            <span style={delay(180)}>{t('hero.headline_line1')}</span>
          </span>
          <span className="enter-line">
            <span style={delay(290)} className="italic text-slate-600 dark:text-slate-400">
              {t('hero.headline_line2')}
            </span>
          </span>
        </h1>

        {/* Body paragraph — editorial, one column */}
        <div style={delay(460)} className="enter-rise mt-10 max-w-2xl">
          <p className="text-base leading-[1.7] text-slate-700 dark:text-slate-300 md:text-lg">
            {t('hero.description')}
          </p>
        </div>

        {/* CTAs — two links, restrained */}
        <div style={delay(560)} className="enter-rise mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 border-b border-slate-950 pb-1 text-sm font-medium text-slate-950 transition-colors hover:text-amber-700 dark:border-white dark:text-white dark:hover:border-amber-400 dark:hover:text-amber-400"
          >
            <span>{t('hero.cta')}</span>
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <a
            href={resumeHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-slate-950 dark:text-slate-400 dark:hover:text-white"
          >
            <span>{t('resume.button')}</span>
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <a
            href="#contact"
            className="group inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-slate-950 dark:text-slate-400 dark:hover:text-white"
          >
            <span>{t('hero.cta_contact')}</span>
          </a>
        </div>

        {/* Footer row: socials + currently */}
        <div style={delay(700)} className="enter-rise mt-24 grid gap-8 border-t border-slate-200 pt-8 dark:border-slate-800 md:grid-cols-[1fr_auto] md:items-start">
          <div className="space-y-2">
            <p className="font-mono text-[12.5px] uppercase tracking-[0.28em] text-slate-500 dark:text-slate-500">
              {t('hero.currently_label')}
            </p>
            <p className="text-sm leading-7 text-slate-700 dark:text-slate-300 max-w-md">
              {t('hero.currently_text')}
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/AbdellahiAhmed"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 transition-colors hover:text-slate-950 dark:text-slate-500 dark:hover:text-white"
              aria-label="GitHub"
            >
              <Github className="h-[18px] w-[18px]" strokeWidth={1.5} />
            </a>
            <a
              href="https://www.linkedin.com/in/abdellahiahmedahmedbaba/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 transition-colors hover:text-slate-950 dark:text-slate-500 dark:hover:text-white"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-[18px] w-[18px]" strokeWidth={1.5} />
            </a>
            <a
              href="mailto:AbdellahiAhmedAhmedBaba@gmail.com"
              className="text-slate-500 transition-colors hover:text-slate-950 dark:text-slate-500 dark:hover:text-white"
              aria-label="Email"
            >
              <Mail className="h-[18px] w-[18px]" strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

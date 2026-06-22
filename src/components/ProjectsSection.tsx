import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowUpRight } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tags: string[];
  category?: string;
  image?: string;
  github?: string;
  demo?: string;
  featured?: boolean;
  type?: 'mobile' | 'web';
  displayUrl?: string;
  hideUrl?: boolean;
}

const ProjectsSection = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [contentVisible, setContentVisible] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [sectionVisible, setSectionVisible] = useState(false);
  const detailRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const projects = t('projects.items', { returnObjects: true }) as Project[];
  const active = projects[activeIndex];

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setSectionVisible(true); },
      { threshold: 0.06 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const handleSelect = (index: number) => {
    if (index === activeIndex) return;

    // On mobile, scroll to detail panel
    if (window.innerWidth < 1024 && detailRef.current) {
      detailRef.current.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'start' });
    }

    if (reducedMotion) {
      setActiveIndex(index);
      return;
    }
    setContentVisible(false);
    setTimeout(() => {
      setActiveIndex(index);
      setContentVisible(true);
    }, 180);
  };

  const pad = (i: number) => String(i + 1).padStart(2, '0');

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="bg-white dark:bg-slate-950 py-20 md:py-28 overflow-hidden"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">

        {/* ── Section header ─────────────────────────────────── */}
        <div
          className={`flex items-center gap-4 mb-16 transition-all duration-700 ${
            sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
            05 — {t('projects.section')}
          </span>
          <span className="h-px flex-1 max-w-[120px] bg-slate-300 dark:bg-slate-700" />
          <span className="font-mono text-[11px] tabular-nums text-slate-400 dark:text-slate-500">
            {String(projects.length).padStart(2, '0')} {t('projects.projects_count')}
          </span>
        </div>

        {/* ── Split layout ────────────────────────────────────── */}
        <div className="flex flex-col lg:flex-row lg:gap-0">

          {/* LEFT ─ directory index */}
          <div
            className={`lg:w-[38%] lg:pr-10 lg:border-r border-slate-100 dark:border-slate-800/70 transition-all duration-700 delay-100 ${
              sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            {/* Column label */}
            <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-slate-300 dark:text-slate-700 mb-4 pb-3 border-b border-slate-100 dark:border-slate-800/60">
              Index
            </p>

            <ul>
              {projects.map((project, i) => {
                const isActive = activeIndex === i;
                return (
                  <li key={project.title}>
                    <button
                      onClick={() => handleSelect(i)}
                      className={`
                        w-full text-left group flex items-center gap-4 py-3.5
                        border-b border-slate-50 dark:border-slate-800/40
                        transition-all duration-200 cursor-pointer
                        relative overflow-hidden
                      `}
                      aria-pressed={isActive}
                    >
                      {/* Active amber left bar */}
                      <span
                        className={`absolute left-0 top-0 h-full w-0.5 bg-amber-500 transition-all duration-300 ${
                          isActive ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
                        }`}
                        style={{ transformOrigin: 'top' }}
                      />

                      {/* Index number */}
                      <span
                        className={`font-mono text-[11px] tabular-nums flex-shrink-0 w-7 pl-3 transition-colors duration-200 ${
                          isActive
                            ? 'text-amber-500'
                            : 'text-slate-300 dark:text-slate-700 group-hover:text-slate-400 dark:group-hover:text-slate-500'
                        }`}
                      >
                        {pad(i)}
                      </span>

                      {/* Project name */}
                      <span
                        className={`flex-1 text-sm leading-snug transition-all duration-200 ${
                          isActive
                            ? 'font-semibold text-slate-950 dark:text-white'
                            : 'font-normal text-slate-500 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-300'
                        }`}
                      >
                        {project.title}
                      </span>

                      {/* Category pill — desktop only */}
                      <span
                        className={`hidden sm:block font-mono text-[9px] uppercase tracking-wider flex-shrink-0 transition-colors duration-200 ${
                          isActive
                            ? 'text-slate-400 dark:text-slate-500'
                            : 'text-slate-200 dark:text-slate-800'
                        }`}
                      >
                        {project.category}
                      </span>

                      {/* Arrow — appears on active */}
                      <ArrowUpRight
                        className={`w-3 h-3 flex-shrink-0 transition-all duration-200 ${
                          isActive
                            ? 'opacity-100 text-amber-500 translate-x-0'
                            : 'opacity-0 -translate-x-1'
                        }`}
                      />
                    </button>
                  </li>
                );
              })}
            </ul>

            {/* Bottom note */}
            <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-slate-200 dark:text-slate-800 mt-6">
              — select to explore
            </p>
          </div>

          {/* RIGHT ─ project detail */}
          <div
            ref={detailRef}
            className={`
              lg:w-[62%] lg:pl-14 mt-10 lg:mt-0
              relative min-h-[440px]
              transition-all duration-700 delay-200
              ${sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
            `}
          >
            {/* ── Ghost index — signature element ── */}
            <div
              aria-hidden="true"
              className="absolute top-[-1rem] right-0 font-serif leading-none select-none pointer-events-none text-slate-950 dark:text-white"
              style={{
                fontSize: 'clamp(7rem, 16vw, 13rem)',
                opacity: 0.04,
                lineHeight: 1,
                transition: reducedMotion ? 'none' : 'opacity 0.2s',
              }}
            >
              {pad(activeIndex)}
            </div>

            {/* ── Animated content panel ── */}
            <div
              className="relative"
              style={{
                opacity: contentVisible ? 1 : 0,
                transform: contentVisible ? 'translateY(0)' : 'translateY(10px)',
                transition: reducedMotion ? 'none' : 'opacity 0.22s ease-out, transform 0.22s ease-out',
              }}
            >
              {/* Category · Type header */}
              <div className="flex items-center gap-3 mb-5">
                <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-amber-500">
                  {active?.category}
                </span>
                <span className="h-px w-6 bg-amber-400/50" />
                <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-slate-400 dark:text-slate-500">
                  {active?.type === 'mobile'
                    ? t('projects.mobile_platform')
                    : t('projects.web_platform')}
                </span>
              </div>

              {/* Title */}
              <h2 className="font-serif text-4xl sm:text-[2.8rem] leading-tight text-slate-950 dark:text-white mb-5">
                {active?.title}
              </h2>

              {/* Thin rule */}
              <div className="w-10 h-px bg-slate-200 dark:bg-slate-700 mb-6" />

              {/* Description */}
              <p className="text-sm leading-[1.85] text-slate-600 dark:text-slate-300 max-w-[520px] mb-7">
                {active?.description}
              </p>

              {/* Stack tags */}
              <div className="flex flex-wrap gap-2 mb-9">
                {active?.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[9.5px] uppercase tracking-wider px-2.5 py-1 border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-500 hover:border-amber-300 dark:hover:border-amber-800 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-150"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex flex-wrap items-center gap-7">
                {active?.demo && (
                  <a
                    href={active.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.22em] text-slate-950 dark:text-white border-b border-slate-950 dark:border-white pb-0.5 hover:text-amber-600 hover:border-amber-500 dark:hover:text-amber-400 dark:hover:border-amber-400 transition-colors duration-150"
                  >
                    {active.type === 'mobile' ? t('projects.app_store') : t('projects.view_demo')}
                    <ArrowUpRight className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-150" strokeWidth={1.75} />
                  </a>
                )}
                {active?.github && (
                  <a
                    href={active.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.22em] text-slate-400 dark:text-slate-500 hover:text-slate-950 dark:hover:text-white transition-colors duration-150"
                  >
                    {t('projects.view_repo')}
                    <ArrowUpRight className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-150" strokeWidth={1.75} />
                  </a>
                )}
                {active?.displayUrl && !active.demo && !active.hideUrl && (
                  <span className="font-mono text-[11px] text-slate-300 dark:text-slate-700 tracking-wide">
                    {active.displayUrl}
                  </span>
                )}
              </div>

              {/* Progress dots — which project out of total */}
              <div className="flex items-center gap-1.5 mt-12">
                {projects.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => handleSelect(i)}
                    aria-label={`Project ${pad(i)}`}
                    className={`transition-all duration-200 rounded-full cursor-pointer ${
                      i === activeIndex
                        ? 'w-5 h-1.5 bg-amber-500'
                        : 'w-1.5 h-1.5 bg-slate-200 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-500'
                    }`}
                  />
                ))}
                <span className="font-mono text-[10px] text-slate-300 dark:text-slate-700 ml-3 tabular-nums">
                  {pad(activeIndex)} / {String(projects.length).padStart(2, '0')}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom CTA ─────────────────────────────────────── */}
        <div
          className={`mt-20 pt-10 border-t border-slate-100 dark:border-slate-800/60 transition-all duration-700 delay-300 ${
            sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <a
            href="https://github.com/AbdellahiAhmed"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-baseline gap-3 border-b border-slate-950 pb-1 font-serif text-2xl italic text-slate-950 dark:border-white dark:text-white hover:text-amber-700 hover:border-amber-700 dark:hover:text-amber-400 dark:hover:border-amber-400 transition-colors duration-200 md:text-3xl"
          >
            {t('projects.all_projects_text')}
            <span className="text-xl group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true">→</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;

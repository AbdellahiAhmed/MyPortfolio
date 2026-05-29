import { Github, Linkedin, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LiveClock from './utils/LiveClock';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 py-16">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
        {/* Top block — wordmark + tagline + clock */}
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="font-serif text-3xl italic text-slate-950 dark:text-white">
              Abdellahi Ahmed
            </p>
            <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
              {t('footer.subtitle')}
            </p>
          </div>
          <div className="flex flex-col items-start gap-1 md:items-end">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-400 dark:text-slate-500">
              {t('footer.local_time')} · {t('footer.location')}
            </p>
            <div className="font-mono text-xl text-slate-950 dark:text-white tabular-nums">
              <LiveClock timezone="Africa/Nouakchott" format="24h" />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 h-px bg-slate-200 dark:bg-slate-800" />

        {/* Bottom row */}
        <div className="flex flex-col-reverse gap-6 md:flex-row md:items-center md:justify-between">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
            © {currentYear} · {t('footer.credit')}
          </p>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/AbdellahiAhmed"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 transition-colors hover:text-slate-950 dark:text-slate-500 dark:hover:text-white"
              aria-label="GitHub"
            >
              <Github className="h-[18px] w-[18px]" strokeWidth={1.5} />
            </a>
            <a
              href="https://www.linkedin.com/in/abdellahiahmedahmedbaba/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 transition-colors hover:text-slate-950 dark:text-slate-500 dark:hover:text-white"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-[18px] w-[18px]" strokeWidth={1.5} />
            </a>
            <a
              href="mailto:AbdellahiAhmedAhmedBaba@gmail.com"
              className="text-slate-400 transition-colors hover:text-slate-950 dark:text-slate-500 dark:hover:text-white"
              aria-label="Email"
            >
              <Mail className="h-[18px] w-[18px]" strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

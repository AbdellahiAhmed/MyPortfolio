import { Send, CheckCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const ContactSection = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('success') === '1') {
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000);
      // Clean the URL so a refresh doesn't re-trigger the toast
      const cleanUrl = window.location.pathname + window.location.hash;
      window.history.replaceState({}, '', cleanUrl);
    }
  }, []);

  return (
    <section id="contact" className="py-20 md:py-28 relative bg-white dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">

        {/* Section header — editorial */}
        <div className="mb-16">
          <div className="flex items-center gap-4">
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
              08 — {t('contact.section')}
            </span>
            <span className="h-px flex-1 max-w-[120px] bg-slate-300 dark:bg-slate-700" />
          </div>
          <h2 className="mt-6 font-serif text-4xl leading-tight text-slate-950 dark:text-white sm:text-5xl md:text-6xl">
            {t('contact.title')}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-500 dark:text-slate-400">
            {t('contact.description')}
          </p>
        </div>

        {/* Success Message */}
        {showSuccess && (
          <div className="mb-8 flex items-center gap-3 border-l-2 border-slate-900 dark:border-white py-2 pl-4 text-sm text-slate-700 dark:text-slate-200">
            <CheckCircle className="h-4 w-4" strokeWidth={1.5} />
            <span>{t('contact.success')}</span>
          </div>
        )}

        {/* Two-column: form + direct contact strip */}
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-20">

          {/* Form — flat, no rounded soft card */}
          <form
            action="https://formsubmit.co/AbdellahiAhmedAhmedBaba@gmail.com"
            method="POST"
            className="space-y-6"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://abdellahiahmed.vercel.app/?success=1#contact" />
            <div style={{ display: 'none' }} aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
            </div>

            {/* Name + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400 mb-2" htmlFor="name">
                  {t('contact.form.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder={t('contact.form.name_placeholder')}
                  className="w-full bg-transparent border-0 border-b border-slate-300 dark:border-slate-700 px-0 py-2 text-base text-slate-950 dark:text-white placeholder:text-slate-400 focus:border-slate-950 dark:focus:border-white focus:outline-none focus:ring-0 transition-colors"
                />
              </div>
              <div>
                <label className="block font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400 mb-2" htmlFor="email">
                  {t('contact.form.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder={t('contact.form.email_placeholder')}
                  className="w-full bg-transparent border-0 border-b border-slate-300 dark:border-slate-700 px-0 py-2 text-base text-slate-950 dark:text-white placeholder:text-slate-400 focus:border-slate-950 dark:focus:border-white focus:outline-none focus:ring-0 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400 mb-2" htmlFor="subject">
                {t('contact.form.subject')}
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                placeholder={t('contact.form.subject_placeholder')}
                className="w-full bg-transparent border-0 border-b border-slate-300 dark:border-slate-700 px-0 py-2 text-base text-slate-950 dark:text-white placeholder:text-slate-400 focus:border-slate-950 dark:focus:border-white focus:outline-none focus:ring-0 transition-colors"
              />
            </div>

            <div>
              <label className="block font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400 mb-2" htmlFor="message">
                {t('contact.form.message')}
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder={t('contact.form.placeholder')}
                className="w-full bg-transparent border-0 border-b border-slate-300 dark:border-slate-700 px-0 py-2 text-base text-slate-950 dark:text-white placeholder:text-slate-400 focus:border-slate-950 dark:focus:border-white focus:outline-none focus:ring-0 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="group inline-flex items-center gap-3 border-b border-slate-950 dark:border-white pb-1 font-serif text-2xl text-slate-950 dark:text-white transition-colors hover:text-amber-700 dark:hover:text-amber-400 hover:border-amber-700 dark:hover:border-amber-400"
            >
              <span>{t('contact.form.button')}</span>
              <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={1.5} />
            </button>
          </form>

          {/* Direct contacts column — calm, single-color */}
          <aside className="space-y-8 lg:pt-3">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400 mb-2">
                {t('contact.email_label')}
              </p>
              <a
                href="mailto:AbdellahiAhmedAhmedBaba@gmail.com"
                className="font-serif text-lg italic text-slate-950 dark:text-white hover:text-amber-700 dark:hover:text-amber-400 transition-colors break-all"
              >
                AbdellahiAhmedAhmedBaba@gmail.com
              </a>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400 mb-2">
                {t('contact.linkedin_label')}
              </p>
              <a
                href="https://www.linkedin.com/in/abdellahiahmedahmedbaba/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-serif text-lg italic text-slate-950 dark:text-white hover:text-amber-700 dark:hover:text-amber-400 transition-colors"
              >
                /in/abdellahiahmedahmedbaba
              </a>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400 mb-2">
                {t('contact.whatsapp_label')}
              </p>
              <a
                href="https://wa.me/22243638670"
                target="_blank"
                rel="noopener noreferrer"
                className="font-serif text-lg italic text-slate-950 dark:text-white hover:text-amber-700 dark:hover:text-amber-400 transition-colors"
              >
                +222 43 63 86 70
              </a>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400 mb-2">
                Location
              </p>
              <p className="font-serif text-lg italic text-slate-700 dark:text-slate-300">
                Nouakchott, Mauritania
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

import { Github, Linkedin, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="py-12 border-t border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <span className="text-gray-600 dark:text-slate-400 text-sm">
              &copy; {new Date().getFullYear()} Abdellahi Ahmed. {t('footer.rights')}
            </span>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://github.com/AbdellahiAhmed"
              className="text-gray-600 dark:text-slate-400 hover:text-black dark:hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/abdellahiahmedahmedbaba/"
              className="text-gray-600 dark:text-slate-400 hover:text-black dark:hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:AbdellahiAhmedAhmedBaba@gmail.com"
              className="text-gray-600 dark:text-slate-400 hover:text-black dark:hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

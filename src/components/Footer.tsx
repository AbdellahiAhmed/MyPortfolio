import { Github, Linkedin, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import LiveClock from './utils/LiveClock';
import SpacedText from './utils/SpacedText';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-20 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid - 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Links */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-6">
              <SpacedText text={t('footer.links')} />
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm"
                >
                  {t('footer.home')}
                </Link>
              </li>
              <li>
                <Link
                  to="/works"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm"
                >
                  {t('footer.works')}
                </Link>
              </li>
              <li>
                <a
                  href="/#about"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm"
                >
                  {t('footer.about')}
                </a>
              </li>
              <li>
                <a
                  href="/#contact"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm"
                >
                  {t('footer.contact')}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Socials */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-6">
              <SpacedText text={t('footer.socials')} />
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:AbdellahiAhmedAhmedBaba@gmail.com"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('footer.email')}
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/abdellahiahmedahmedbaba/"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('footer.linkedin')}
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/22248602398"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('footer.whatsapp')}
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/AbdellahiAhmed"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('footer.github')}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Local Time */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-6">
              <SpacedText text={t('footer.local_time')} />
            </h3>
            <div className="text-2xl font-display font-bold text-gray-900 dark:text-white">
              <LiveClock timezone="Africa/Nouakchott" format="24h" />
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              {t('footer.location')}
            </p>
          </div>

          {/* Column 4: Version */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-6">
              <SpacedText text={t('footer.version')} />
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {currentYear} © {t('footer.edition')}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
              {t('footer.credit')}
            </p>
          </div>
        </div>

        {/* Bottom Section - Signature */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-2xl font-display font-bold text-gray-900 dark:text-white">
                Abdellahi Ahmed
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                {t('footer.subtitle')}
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/AbdellahiAhmed"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/abdellahiahmedahmedbaba/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:AbdellahiAhmedAhmedBaba@gmail.com"
                className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Github, Linkedin, Mail, Terminal, Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="py-12 border-t border-cyan-500/30 bg-black relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,255,217,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,255,217,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Left side */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-2">
              <Terminal className="h-4 w-4 text-cyan-400" />
              <span className="text-white/60 text-sm font-mono">
                <span className="text-cyan-400">$</span> portfolio --version 2.0.0
              </span>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-2 text-white/60 text-sm font-mono">
              <span>&copy; {new Date().getFullYear()} Abdellahi Ahmed.</span>
              <span className="hidden md:inline">•</span>
              <span className="flex items-center space-x-1">
                <span>Built with</span>
                <Heart className="h-3.5 w-3.5 text-red-500 fill-red-500 animate-pulse" />
                <span>& React</span>
              </span>
            </div>
          </div>

          {/* Right side - Social Links */}
          <div className="flex space-x-4">
            <a
              href="https://github.com/AbdellahiAhmed"
              className="p-3 bg-black/60 border border-white/10 rounded-lg text-white/60 hover:text-cyan-400 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(0,255,217,0.3)] transition-all"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/abdellahiahmedahmedbaba/"
              className="p-3 bg-black/60 border border-white/10 rounded-lg text-white/60 hover:text-lime-400 hover:border-lime-400/50 hover:shadow-[0_0_20px_rgba(57,255,20,0.3)] transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:AbdellahiAhmedAhmedBaba@gmail.com"
              className="p-3 bg-black/60 border border-white/10 rounded-lg text-white/60 hover:text-amber-400 hover:border-amber-400/50 hover:shadow-[0_0_20px_rgba(255,176,0,0.3)] transition-all"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Terminal prompt style message */}
        <div className="mt-8 pt-6 border-t border-white/10 text-center">
          <p className="text-white/40 text-xs font-mono">
            <span className="text-lime-400">&gt;</span> {t('footer.rights')} | Status: <span className="text-lime-400">ONLINE</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Mail, Send, CheckCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const ContactSection = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    if (window.location.href.includes('#contact')) {
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000);
    }
  }, []);

  const contacts = [
    {
      icon: FaGithub,
      title: "GitHub",
      subtitle: t("contact.cards.github"),
      link: "https://github.com/AbdellahiAhmed",
      gradient: "from-slate-700 to-slate-900",
      hoverColor: "hover:shadow-slate-500/30"
    },
    {
      icon: FaLinkedin,
      title: "LinkedIn",
      subtitle: t("contact.cards.linkedin"),
      link: "https://www.linkedin.com/in/abdellahiahmedahmedbaba/",
      gradient: "from-blue-600 to-blue-700",
      hoverColor: "hover:shadow-blue-500/30"
    },
    {
      icon: FaWhatsapp,
      title: "WhatsApp",
      subtitle: t("contact.cards.whatsapp"),
      link: "https://wa.me/+22243638670",
      gradient: "from-emerald-500 to-emerald-600",
      hoverColor: "hover:shadow-emerald-500/30"
    },
    {
      icon: Mail,
      title: t("contact.cards.email"),
      subtitle: t("contact.cards.write"),
      link: "mailto:AbdellahiAhmedAhmedBaba@gmail.com",
      gradient: "from-amber-500 to-orange-500",
      hoverColor: "hover:shadow-amber-500/30"
    }
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-black">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,255,217,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,255,217,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Glowing Orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-lime-500/20 rounded-full blur-3xl animate-pulse-slow delay-1000" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-16 animate-slide-up-fade">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-black/60 border-2 border-amber-500/50 rounded-lg mb-6 font-mono backdrop-blur-sm">
            <Mail className="h-4 w-4 text-amber-400" />
            <span className="text-sm font-bold text-amber-400 tracking-wider uppercase">{t("contact.section")}</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">
            <span className="bg-gradient-to-r from-cyan-400 via-lime-400 to-amber-400 bg-clip-text text-transparent drop-shadow-[0_0_50px_rgba(0,255,217,0.5)]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              {t("contact.title")}
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl font-mono">
            <span className="text-lime-400">$</span> {t("contact.description")}
          </p>
        </div>

        {/* Success Message */}
        {showSuccess && (
          <div className="mb-8 p-4 bg-black/60 border-2 border-lime-500/50 rounded-lg shadow-[0_0_30px_rgba(57,255,20,0.3)] backdrop-blur-sm text-center animate-slide-up-fade">
            <div className="flex items-center justify-center space-x-2 text-lime-400 font-mono font-bold">
              <CheckCircle className="h-5 w-5" />
              <span>&gt; {t("contact.success")}</span>
            </div>
          </div>
        )}

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contacts.map((contact, index) => {
            const borderColors = ['border-cyan-500/30 hover:border-cyan-400', 'border-lime-500/30 hover:border-lime-400', 'border-amber-500/30 hover:border-amber-400', 'border-white/20 hover:border-white/40'];
            const glowColors = ['hover:shadow-[0_0_30px_rgba(0,255,217,0.3)]', 'hover:shadow-[0_0_30px_rgba(57,255,20,0.3)]', 'hover:shadow-[0_0_30px_rgba(255,176,0,0.3)]', ''];
            const iconColors = ['text-cyan-400', 'text-lime-400', 'text-amber-400', 'text-white/60'];

            return (
              <a
                key={index}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group bg-black/60 border ${borderColors[index]} ${glowColors[index]} rounded-lg p-6 backdrop-blur-sm transition-all duration-300 hover:scale-105 animate-slide-up-fade`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 mb-4 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                    <contact.icon className={`h-8 w-8 ${iconColors[index]}`} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1 font-mono">{contact.title}</h3>
                  <p className="text-sm text-white/60 font-mono">{contact.subtitle}</p>
                </div>
              </a>
            );
          })}
        </div>

        {/* Contact Form - Terminal Style */}
        <div className="max-w-2xl mx-auto animate-slide-up-fade delay-500">
          <form
            action="https://formsubmit.co/AbdellahiAhmedAhmedBaba@gmail.com"
            method="POST"
            className="bg-black/80 border-2 border-cyan-500/50 rounded-lg p-8 backdrop-blur-sm space-y-6 shadow-[0_0_40px_rgba(0,255,217,0.2)]"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://abdellahiahmed.vercel.app/#contact" />

            {/* Honeypot field for spam protection */}
            <div style={{ display: 'none' }} aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
            </div>

            {/* Form Header - Terminal Style */}
            <div className="mb-6">
              <div className="flex items-center space-x-2 mb-4 pb-3 border-b border-cyan-500/30">
                <Send className="h-4 w-4 text-cyan-400" />
                <span className="text-xs text-cyan-400 tracking-wider font-mono uppercase">Message Terminal</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 font-mono">
                <span className="text-lime-400">$</span> send_message.sh
              </h3>
              <p className="text-white/60 font-mono text-sm">
                <span className="text-cyan-400">&gt;</span> Let's discuss your project or opportunity
              </p>
            </div>

            {/* Name and Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-cyan-400 mb-2 font-mono uppercase tracking-wider" htmlFor="name">
                  <span className="text-white/40">$</span> {t("contact.form.name")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Abdellahi Ahmed"
                  className="w-full bg-black/60 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(0,255,217,0.3)] transition-all outline-none font-mono"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-cyan-400 mb-2 font-mono uppercase tracking-wider" htmlFor="email">
                  <span className="text-white/40">$</span> {t("contact.form.email")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="email@example.com"
                  className="w-full bg-black/60 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(0,255,217,0.3)] transition-all outline-none font-mono"
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label className="block text-sm font-bold text-lime-400 mb-2 font-mono uppercase tracking-wider" htmlFor="subject">
                <span className="text-white/40">$</span> {t("contact.form.subject")}
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                placeholder="Project Inquiry"
                className="w-full bg-black/60 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:border-lime-400 focus:shadow-[0_0_20px_rgba(57,255,20,0.3)] transition-all outline-none font-mono"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-bold text-amber-400 mb-2 font-mono uppercase tracking-wider" htmlFor="message">
                <span className="text-white/40">$</span> {t("contact.form.message")}
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                placeholder={t("contact.form.placeholder")}
                className="w-full bg-black/60 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:border-amber-400 focus:shadow-[0_0_20px_rgba(255,176,0,0.3)] transition-all resize-none outline-none font-mono"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="group relative w-full bg-cyan-500/10 border-2 border-cyan-500/50 text-cyan-400 font-bold py-4 rounded-lg transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,255,217,0.5)] flex items-center justify-center space-x-2 overflow-hidden font-mono uppercase tracking-wider"
            >
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent animate-shimmer"></div>

              <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform relative z-10" />
              <span className="relative z-10">{t("contact.form.button")}</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

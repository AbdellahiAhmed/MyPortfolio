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
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up-fade">
          <span className="px-4 py-2 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium border border-blue-500/20 inline-block">
            {t("contact.section")}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
              {t("contact.title")}
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            {t("contact.description")}
          </p>
        </div>

        {/* Success Message */}
        {showSuccess && (
          <div className="mb-8 p-4 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-500/30 rounded-xl shadow-sm text-center animate-slide-up-fade">
            <div className="flex items-center justify-center space-x-2 text-emerald-700 dark:text-emerald-400 font-medium">
              <CheckCircle className="h-5 w-5" />
              <span>バ. {t("contact.success")}</span>
            </div>
          </div>
        )}

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group glass-card p-6 rounded-2xl hover:border-blue-500/30 transition-all duration-300 hover:scale-105 ${contact.hoverColor} hover:shadow-xl animate-slide-up-fade`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className={`w-16 h-16 mb-4 bg-gradient-to-r ${contact.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  <contact.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-1">{contact.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">{contact.subtitle}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto animate-slide-up-fade delay-500">
          <form
            action="https://formsubmit.co/AbdellahiAhmedAhmedBaba@gmail.com"
            method="POST"
            className="glass-card p-8 rounded-2xl space-y-6 border-t-4 border-t-blue-500"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://abdellahiahmed.vercel.app/#contact" />

            {/* Honeypot field for spam protection */}
            <div style={{ display: 'none' }} aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
            </div>

            {/* Form Header */}
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">
                Send a Message
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Let's discuss your project or opportunity
              </p>
            </div>

            {/* Name and Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2" htmlFor="name">
                  {t("contact.form.name")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Abdellahi Ahmed"
                  className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2" htmlFor="email">
                  {t("contact.form.email")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="email@example.com"
                  className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none"
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2" htmlFor="subject">
                {t("contact.form.subject")}
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                placeholder="Project Inquiry"
                className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2" htmlFor="message">
                {t("contact.form.message")}
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                placeholder={t("contact.form.placeholder")}
                className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none outline-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="group relative w-full bg-blue-600 text-white font-semibold py-4 rounded-xl transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30 flex items-center justify-center space-x-2 overflow-hidden"
            >
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>

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

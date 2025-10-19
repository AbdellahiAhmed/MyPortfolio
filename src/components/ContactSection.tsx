import { Mail } from 'lucide-react';
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
      color: "from-gray-800 to-gray-900"
    },
    {
      icon: FaLinkedin,
      title: "LinkedIn",
      subtitle: t("contact.cards.linkedin"),
      link: "https://www.linkedin.com/in/abdellahiahmedahmedbaba/",
      color: "from-blue-600 to-blue-700"
    },
    {
      icon: FaWhatsapp,
      title: "WhatsApp",
      subtitle: t("contact.cards.whatsapp"),
      link: "https://wa.me/+22243638670",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Mail,
      title: t("contact.cards.email"),
      subtitle: t("contact.cards.write"),
      link: "mailto:AbdellahiAhmedAhmedBaba@gmail.com",
      color: "from-red-500 to-red-600"
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium border border-cyan-500/30">
            {t("contact.section")}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-6">
            <span className="text-black dark:bg-gradient-to-r dark:from-purple-400 dark:to-cyan-400 dark:bg-clip-text dark:text-transparent">
              {t("contact.title")}
            </span>
          </h2>
          <p className="text-xl text-gray-800 dark:text-slate-300 max-w-3xl mx-auto">
            {t("contact.description")}
          </p>
        </div>

        {showSuccess && (
          <div className="mb-6 p-4 text-green-700 bg-green-100 border border-green-300 rounded-lg shadow-sm text-center font-medium">
            ✅ {t("contact.success")}
          </div>
        )}

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.link}
              className="group bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-300 dark:border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 shadow-md"
            >
              <div className="flex flex-col items-center">
                <div className={`w-16 h-16 mb-4 bg-gradient-to-r ${contact.color} rounded-xl flex items-center justify-center shadow-inner`}>
                  <contact.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{contact.title}</h3>
                <p className="text-sm text-gray-700 dark:text-slate-400">{contact.subtitle}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <form
            action="https://formsubmit.co/AbdellahiAhmedAhmedBaba@gmail.com"
            method="POST"
            className="space-y-6 bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-300 dark:border-slate-700/50 shadow-lg"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://abdellahiahmed.vercel.app/#contact" />
            {/* Honeypot field for spam protection */}
            <div style={{ display: 'none' }} aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-800 dark:text-slate-300 mb-2" htmlFor="name">
                  {t("contact.form.name")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Abdellahi Ahmed"
                  className="w-full bg-white dark:bg-slate-900/50 border border-gray-300 dark:border-slate-700 rounded-lg px-4 py-2.5 text-gray-900 dark:text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-800 dark:text-slate-300 mb-2" htmlFor="email">
                  {t("contact.form.email")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="email@example.com"
                  className="w-full bg-white dark:bg-slate-900/50 border border-gray-300 dark:border-slate-700 rounded-lg px-4 py-2.5 text-gray-900 dark:text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-800 dark:text-slate-300 mb-2" htmlFor="subject">
                {t("contact.form.subject")}
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                placeholder="Project Inquiry"
                className="w-full bg-white dark:bg-slate-900/50 border border-gray-300 dark:border-slate-700 rounded-lg px-4 py-2.5 text-gray-900 dark:text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-800 dark:text-slate-300 mb-2" htmlFor="message">
                {t("contact.form.message")}
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                placeholder={t("contact.form.placeholder")}
                className="w-full bg-white dark:bg-slate-900/50 border border-gray-300 dark:border-slate-700 rounded-lg px-4 py-2.5 text-gray-900 dark:text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold py-3 rounded-xl transition-all duration-300 hover:scale-[1.02] focus:scale-[0.98]"
            >
              {t("contact.form.button")}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

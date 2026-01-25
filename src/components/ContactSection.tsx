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
    <section id="contact" className="py-24 relative overflow-hidden bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold mb-6" style={{ fontFamily: "'Righteous', cursive" }}>
            <span className="text-gray-900 dark:text-white">Get In Touch</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t("contact.description")}
          </p>
        </div>

        {/* Success Message */}
        {showSuccess && (
          <div className="mb-8 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-500/30 rounded-xl text-center">
            <div className="flex items-center justify-center space-x-2 text-green-700 dark:text-green-400 font-medium">
              <CheckCircle className="h-5 w-5" />
              <span>{t("contact.success")}</span>
            </div>
          </div>
        )}

        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <Mail className="h-8 w-8 mx-auto mb-4 text-gray-900 dark:text-white" />
            <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">Email</h3>
            <a href="mailto:AbdellahiAhmedAhmedBaba@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
              contact@abdellahi.com
            </a>
          </div>
          <div className="text-center">
            <FaLinkedin className="h-8 w-8 mx-auto mb-4 text-gray-900 dark:text-white" />
            <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">LinkedIn</h3>
            <a href="https://www.linkedin.com/in/abdellahiahmedahmedbaba/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
              Connect with me
            </a>
          </div>
          <div className="text-center">
            <FaWhatsapp className="h-8 w-8 mx-auto mb-4 text-gray-900 dark:text-white" />
            <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">WhatsApp</h3>
            <a href="https://wa.me/+22243638670" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
              +222 43 63 86 70
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <form
            action="https://formsubmit.co/AbdellahiAhmedAhmedBaba@gmail.com"
            method="POST"
            className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-xl space-y-6"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://abdellahiahmed.vercel.app/#contact" />

            {/* Honeypot field for spam protection */}
            <div style={{ display: 'none' }} aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
            </div>

            {/* Form Header */}
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2" style={{ fontFamily: "'Righteous', cursive" }}>
                Send a Message
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Let's discuss your project or opportunity
              </p>
            </div>

            {/* Name and Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2" htmlFor="name">
                  {t("contact.form.name")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 text-gray-900 dark:text-white placeholder:text-gray-400 focus:border-gray-900 dark:focus:border-white focus:ring-2 focus:ring-gray-900/10 dark:focus:ring-white/10 transition-all outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2" htmlFor="email">
                  {t("contact.form.email")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                  className="w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 text-gray-900 dark:text-white placeholder:text-gray-400 focus:border-gray-900 dark:focus:border-white focus:ring-2 focus:ring-gray-900/10 dark:focus:ring-white/10 transition-all outline-none"
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2" htmlFor="subject">
                {t("contact.form.subject")}
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                placeholder="Project Inquiry"
                className="w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 text-gray-900 dark:text-white placeholder:text-gray-400 focus:border-gray-900 dark:focus:border-white focus:ring-2 focus:ring-gray-900/10 dark:focus:ring-white/10 transition-all outline-none"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2" htmlFor="message">
                {t("contact.form.message")}
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                placeholder={t("contact.form.placeholder")}
                className="w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 text-gray-900 dark:text-white placeholder:text-gray-400 focus:border-gray-900 dark:focus:border-white focus:ring-2 focus:ring-gray-900/10 dark:focus:ring-white/10 transition-all resize-none outline-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold py-4 rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
            >
              <Send className="h-5 w-5" />
              <span>{t("contact.form.button")}</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

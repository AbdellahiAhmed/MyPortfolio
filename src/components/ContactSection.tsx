import { Github, Linkedin, Phone, Mail } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium border border-cyan-500/30">
            Contact
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-6">
            <span className="text-black dark:bg-gradient-to-r dark:from-purple-400 dark:to-cyan-400 dark:bg-clip-text dark:text-transparent">
              Get in Touch
            </span>
          </h2>
          <p className="text-xl text-black dark:text-slate-300 max-w-3xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            {
              icon: Github,
              title: "GitHub",
              subtitle: "View my code",
              link: "https://github.com/AbdellahiAhmed",
              color: "from-purple-500 to-purple-600"
            },
            {
              icon: Linkedin,
              title: "LinkedIn",
              subtitle: "Professional profile",
              link: "https://www.linkedin.com/in/abdellahiahmedahmedbaba/",
              color: "from-blue-500 to-blue-600"
            },
            {
              icon: Phone,
              title: "WhatsApp",
              subtitle: "Quick chat",
              link: "https://wa.me/+22243638670",
              color: "from-green-500 to-green-600"
            },
            {
              icon: Mail,
              title: "Send Email",
              subtitle: "Write to me",
              link: "mailto:AbdellahiAhmedAhmedBaba@gmail.com",
              color: "from-cyan-500 to-cyan-600"
            }
          ].map((contact, index) => (
            <a
              key={index}
              href={contact.link}
              className="group bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 text-center"
            >
              <div className="flex flex-col items-center">
                <div className={`w-16 h-16 mb-4 bg-gradient-to-r ${contact.color} rounded-xl flex items-center justify-center`}>
                  <contact.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-black dark:text-white mb-1">{contact.title}</h3>
                <p className="text-sm text-slate-700 dark:text-slate-400">{contact.subtitle}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <form 
            action="https://formsubmit.co/AbdellahiAhmedAhmedBaba@gmail.com" 
            method="POST" 
            className="space-y-6 bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://abdellahiahmed.vercel.app/#contact" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-black dark:text-slate-300 mb-2" htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  className="w-full bg-white dark:bg-slate-900/50 border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-2.5 text-black dark:text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                  placeholder="Abdellahi Ahmed"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-black dark:text-slate-300 mb-2" htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  className="w-full bg-white dark:bg-slate-900/50 border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-2.5 text-black dark:text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                  placeholder="AbdellahiAhmedAhmedBaba@gmail.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-black dark:text-slate-300 mb-2" htmlFor="subject">Subject</label>
              <input 
                type="text" 
                id="subject"
                name="subject"
                className="w-full bg-white dark:bg-slate-900/50 border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-2.5 text-black dark:text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                placeholder="Project Inquiry"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-black dark:text-slate-300 mb-2" htmlFor="message">Message</label>
              <textarea 
                id="message"
                name="message"
                rows={6}
                className="w-full bg-white dark:bg-slate-900/50 border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-2.5 text-black dark:text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all resize-none"
                placeholder="Your message here..."
              ></textarea>
            </div>
            <button 
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold py-3 rounded-xl transition-all duration-300 hover:scale-[1.02] focus:scale-[0.98]"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

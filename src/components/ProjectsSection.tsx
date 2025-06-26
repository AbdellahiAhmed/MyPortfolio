import { Network, Server, Shield, Github, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ProjectsSection = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="px-4 py-2 bg-orange-500/20 text-orange-400 rounded-full text-sm font-medium border border-orange-500/30">
            {t("projects.section")}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-6">
            <span className="text-black dark:bg-gradient-to-r dark:from-white dark:to-slate-300 dark:bg-clip-text dark:text-transparent">
              {t("projects.title")}
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Network,
              title: "AutoNetConfig",
              desc: t("projects.items.autonet.description"),
              tags: ["Python", "Network Automation", "CLI"],
              colors: ["blue", "green", "purple"],
              links: [
                { label: t("projects.code"), url: "#", icon: Github },
                { label: t("projects.coming_soon"), url: "#", icon: ExternalLink }
              ]
            },
            {
              icon: Server,
              title: "LMD System",
              desc: t("projects.items.lmd.description"),
              tags: ["HTML/CSS/JS", "PHP", "MySQL"],
              colors: ["blue", "red", "yellow"],
              links: [
                { label: t("projects.code"), url: "#", icon: Github },
                { label: t("projects.live_demo"), url: "#", icon: ExternalLink }
              ]
            },
            {
              icon: Shield,
              title: "Bank Management System",
              desc: t("projects.items.bank.description"),
              tags: ["Java", "Swing", "MySQL"],
              colors: ["orange", "blue", "green"],
              links: [
                { label: t("projects.code"), url: "https://github.com/AbdellahiAhmed/Syst-me_de_Gestion_du_Bank", icon: Github },
                { label: t("projects.documentation"), url: "https://github.com/AbdellahiAhmed/Syst-me_de_Gestion_du_Bank/blob/main/README.md", icon: ExternalLink }
              ]
            }
          ].map((project, i) => (
            <div key={i} className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-r from-${project.colors[0]}-500/20 to-${project.colors[1]}-500/20 rounded-xl flex items-center justify-center border border-${project.colors[0]}-500/30 mr-4`}>
                    <project.icon className={`h-6 w-6 text-${project.colors[0]}-400`} />
                  </div>
                  <h3 className="text-xl font-bold text-black dark:text-white">{project.title}</h3>
                </div>
                <p className="text-black dark:text-slate-300 mb-6 leading-relaxed">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, j) => (
                    <span
                      key={j}
                      className={`px-3 py-1 bg-${project.colors[j % 3]}-500/20 text-${project.colors[j % 3]}-300 text-sm rounded-full border border-${project.colors[j % 3]}-500/30`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  {project.links.map((link, k) => (
                    <a key={k} href={link.url} className={`flex items-center text-${project.colors[1]}-400 hover:text-${project.colors[1]}-300 transition-colors`}>
                      <link.icon className="h-4 w-4 mr-2" />
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/AbdellahiAhmed?tab=repositories"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-slate-700 to-slate-600 hover:from-slate-600 hover:to-slate-500 text-white rounded-xl transition-all duration-300 hover:scale-105 border border-slate-600"
          >
            <Github className="h-5 w-5 mr-3" />
            {t("projects.all_projects")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

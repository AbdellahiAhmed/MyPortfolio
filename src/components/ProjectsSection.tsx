import { Network, Server, Shield, Github, FileText, BarChart3, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';

interface ProjectsSectionProps {
  onNavigateToAutoNetConfig?: () => void;
  onNavigateToLMDSystem?: () => void;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onNavigateToAutoNetConfig, onNavigateToLMDSystem }) => {
  const { t } = useTranslation();

  return (
    <section id="projects" className="py-20 relative bg-white dark:bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="px-4 py-2 bg-orange-500/20 text-orange-400 rounded-full text-sm font-medium border border-orange-500/30">
            {t("projects.section")}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-6">
            <span className="bg-gradient-to-r from-orange-600 to-yellow-400 bg-clip-text text-transparent dark:from-white dark:to-slate-300">
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
               tags: ["Python", "Network Automation", "EVE-NG"],
               colors: ["blue", "green", "purple"],
               github: "",
               demo: onNavigateToAutoNetConfig ? "internal" : "https://autonetconfig-screenshots.vercel.app"
             },
            {
              icon: FileText,
              title: "Rappory",
              desc: t("projects.items.rappory.description"),
              tags: ["HTML", "CSS", "JS"],
              colors: ["blue", "green", "purple"],
              github: "https://github.com/AbdellahiAhmed/Rappory",
              demo: "https://rappory.vercel.app"
            },
            {
              icon: BarChart3,
              title: "Deftrak",
              desc: t("projects.items.detrack.description"),
              tags: ["HTML", "CSS", "JS"],
              colors: ["blue", "green", "purple"],
              github: "https://github.com/AbdellahiAhmed/Deftrak",
              demo: "https://deftrak.vercel.app"
            },
            {
              icon: Server,
              title: "LMD System",
              desc: t("projects.items.lmd.description"),
              tags: ["HTML/CSS/JS", "PHP", "MySQL"],
              colors: ["blue", "red", "yellow"],
              github: "https://github.com/AbdellahiAhmed/Syst-me_LMD",
              demo: onNavigateToLMDSystem ? "internal" : ""
            },
            {
              icon: Shield,
              title: "Bank Management System",
              desc: t("projects.items.bank.description"),
              tags: ["Java", "Swing", "MySQL"],
              colors: ["orange", "blue", "green"],
              github: "https://github.com/AbdellahiAhmed/Syst-me_de_Gestion_du_Bank"
            }
          ].map((project, i) => (
            <div
              key={i}
              className="group bg-white/70 dark:bg-slate-800/50 backdrop-blur-md rounded-2xl overflow-hidden shadow-md border border-slate-200 dark:border-slate-700/50 transition-all duration-300 hover:scale-105 hover:border-purple-500/50"
            >
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div
                    className={clsx(
                      "w-12 h-12 rounded-xl flex items-center justify-center mr-4 border",
                      `bg-gradient-to-r from-${project.colors[0]}-500/20 to-${project.colors[1]}-500/20`,
                      `border-${project.colors[0]}-500/30`
                    )}
                  >
                    <project.icon className={`h-6 w-6 text-${project.colors[0]}-400`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">{project.title}</h3>
                </div>

                <p className="text-gray-700 dark:text-slate-300 mb-6 leading-relaxed">{project.desc}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, j) => (
                    <span
                      key={j}
                      className={clsx(
                        "px-3 py-1 rounded-full text-sm border",
                        `bg-${project.colors[j % 3]}-500/20`,
                        `text-${project.colors[j % 3]}-600`,
                        `border-${project.colors[j % 3]}-500/30`
                      )}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={clsx(
                        "inline-flex items-center font-medium underline-offset-2 hover:underline",
                        `text-${project.colors[1]}-500 hover:text-${project.colors[1]}-700`
                      )}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      GitHub
                    </a>
                  )}
                  {project.demo && (
                    project.demo === "internal" ? (
                      <button
                        onClick={project.title === "AutoNetConfig" ? onNavigateToAutoNetConfig : onNavigateToLMDSystem}
                        className={clsx(
                          "inline-flex items-center font-medium underline-offset-2 hover:underline",
                          `text-${project.colors[2]}-500 hover:text-${project.colors[2]}-700`
                        )}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </button>
                    ) : (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={clsx(
                          "inline-flex items-center font-medium underline-offset-2 hover:underline",
                          `text-${project.colors[2]}-500 hover:text-${project.colors[2]}-700`
                        )}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    )
                  )}
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
